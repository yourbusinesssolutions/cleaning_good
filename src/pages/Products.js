// src/pages/Products.js
import { Filter, Search } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useProducts } from '../hooks/useProducts';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const { products, categories, loading, error, totalCount } = useProducts({
    category: selectedCategory,
    search: searchTerm,
    price_range: priceRange,
    ordering: sortBy
  });

  // Function to truncate text to a certain number of lines
  const truncateDescription = (text) => {
    // Roughly estimate 100 characters per 2 lines (depends on container width)
    if (text && text.length > 140) {
      return text.substring(0, 140) + '...';
    }
    return text;
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Er is iets misgegaan</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <>
      <PageHeader 
        title="Ons Assortiment" 
        subtitle="Professionele schoonmaakproducten en apparatuur voor elk bedrijf"
        breadcrumbs={[
          { text: 'Assortiment' }
        ]}
        bgImage="https://images.unsplash.com/photo-1596103443122-b2a0743b3920?ixlib=rb-4.0.3"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Filter className="mr-2" size={20} />
                  Filters
                </h2>
                
                {/* Search */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zoeken</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Zoek producten..."
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
                  </div>
                </div>
                
                {/* Categories */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Categorieën</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all flex justify-between items-center ${
                          selectedCategory === category.id 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className={`text-sm ${
                          selectedCategory === category.id ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          ({category.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Prijsklasse</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        value="all"
                        checked={priceRange === 'all'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="mr-2"
                      />
                      <span>Alle prijzen</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        value="low"
                        checked={priceRange === 'low'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="mr-2"
                      />
                      <span>Onder €20</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        value="medium"
                        checked={priceRange === 'medium'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="mr-2"
                      />
                      <span>€20 - €100</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        value="high"
                        checked={priceRange === 'high'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="mr-2"
                      />
                      <span>Boven €100</span>
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Contact Card */}
              <div className="bg-blue-700 text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Hulp nodig?</h3>
                <p className="mb-4 text-blue-100">
                  Onze experts helpen u graag bij het kiezen van de juiste producten voor uw bedrijf.
                </p>
                <Link
                  to="/contact"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-medium transition-all inline-block w-full text-center"
                >
                  Contact opnemen
                </Link>
              </div>
            </aside>
            
            {/* Products Grid */}
            <main className="lg:w-3/4">
              {/* Sort Options */}
              <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <p className="text-gray-600">
                    {loading ? 'Producten laden...' : `${totalCount} producten gevonden`}
                  </p>
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Sorteer op:</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="name">Naam</option>
                      <option value="price-low">Prijs (laag naar hoog)</option>
                      <option value="price-high">Prijs (hoog naar laag)</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Products */}
              {loading ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                      <div className="h-48 bg-gray-300"></div>
                      <div className="p-6">
                        <div className="h-4 bg-gray-300 rounded mb-3"></div>
                        <div className="h-3 bg-gray-300 rounded mb-4"></div>
                        <div className="h-8 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map(product => (
                    <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={product.image_url || 'https://via.placeholder.com/400x300?text=No+Image'} 
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                        <div className="h-20 overflow-hidden mb-4">
                          <p className="text-gray-600 text-sm">{truncateDescription(product.description)}</p>
                          {product.description && product.description.length > 140 && (
                            <Link
                              to={`/products/${product.id}`}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block"
                            >
                              Lees meer...
                            </Link>
                          )}
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-2xl font-bold text-blue-600">€{parseFloat(product.price).toFixed(2)}</span>
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            product.in_stock
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {product.in_stock ? 'Op voorraad' : 'Uitverkocht'}
                          </span>
                        </div>
                        <Link
                          to={`/products/${product.id}`}
                          className={`w-full py-2 px-4 rounded-lg font-medium transition-all block text-center ${
                            product.in_stock
                              ? 'bg-blue-600 hover:bg-blue-700 text-white'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none'
                          }`}
                        >
                          {product.in_stock ? 'Meer informatie' : 'Niet beschikbaar'}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {!loading && products.length === 0 && (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <p className="text-gray-600 text-lg">
                    Geen producten gevonden die aan uw criteria voldoen.
                  </p>
                  <button 
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchTerm('');
                      setPriceRange('all');
                    }}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all"
                  >
                    Filters resetten
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Grote hoeveelheden nodig?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Voor zakelijke bestellingen en grootafnemers bieden wij speciale kortingen. Neem contact op voor een offerte op maat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-all text-center"
              >
                Contact opnemen
              </Link>
              <Link
                to="/quote-request"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-md font-medium transition-all text-center"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Products;