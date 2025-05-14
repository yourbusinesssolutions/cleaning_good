import { Filter, Search } from 'lucide-react';
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Product categories
  const categories = [
    { id: 'all', name: 'Alle producten', count: 48 },
    { id: 'cleaning-agents', name: 'Reinigingsmiddelen', count: 15 },
    { id: 'equipment', name: 'Schoonmaakapparatuur', count: 8 },
    { id: 'tools', name: 'Gereedschappen', count: 12 },
    { id: 'paper-products', name: 'Papierproducten', count: 6 },
    { id: 'safety', name: 'Veiligheidsproducten', count: 7 }
  ];

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Professionele Allesreiniger',
      category: 'cleaning-agents',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3',
      description: 'Krachtige allesreiniger voor dagelijks gebruik',
      inStock: true
    },
    {
      id: 2,
      name: 'Industriële Stofzuiger',
      category: 'equipment',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3',
      description: 'Professionele stofzuiger voor commercieel gebruik',
      inStock: true
    },
    {
      id: 3,
      name: 'Microvezel Doeken Set',
      category: 'tools',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3',
      description: 'Set van 10 hoogwaardige microvezel doeken',
      inStock: true
    },
    {
      id: 4,
      name: 'Desinfecterende Handzeep',
      category: 'cleaning-agents',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1584362528334-88c9d35c9c5f?ixlib=rb-4.0.3',
      description: 'Antibacteriële handzeep voor hygiënische reiniging',
      inStock: true
    },
    {
      id: 5,
      name: 'Vloerwisser Systeem',
      category: 'tools',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1581578017426-04745e5d4d1a?ixlib=rb-4.0.3',
      description: 'Compleet vloerwissysteem met emmer',
      inStock: true
    },
    {
      id: 6,
      name: 'Toiletpapier Bulk',
      category: 'paper-products',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?ixlib=rb-4.0.3',
      description: 'Grootverpakking toiletpapier - 48 rollen',
      inStock: true
    },
    {
      id: 7,
      name: 'Glasreiniger Spray',
      category: 'cleaning-agents',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078987?ixlib=rb-4.0.3',
      description: 'Streepvrije glasreiniger voor ramen en spiegels',
      inStock: true
    },
    {
      id: 8,
      name: 'Veiligheidshandschoenen',
      category: 'safety',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1582735689369-f7d7be364c1b?ixlib=rb-4.0.3',
      description: 'Chemisch resistente handschoenen - maat L',
      inStock: false
    },
    {
      id: 9,
      name: 'Schrobmachine',
      category: 'equipment',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-4.0.3',
      description: 'Professionele vloerschrobmachine',
      inStock: true
    },
    {
      id: 10,
      name: 'Ontkalker',
      category: 'cleaning-agents',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078987?ixlib=rb-4.0.3',
      description: 'Krachtige ontkalker voor sanitair',
      inStock: true
    },
    {
      id: 11,
      name: 'Papieren Handdoeken',
      category: 'paper-products',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1605021875579-a79d016f6e73?ixlib=rb-4.0.3',
      description: 'Zachte papieren handdoeken - 20 pakken',
      inStock: true
    },
    {
      id: 12,
      name: 'Veiligheidsbril',
      category: 'safety',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1517256673644-36ad9ca0a7fa?ixlib=rb-4.0.3',
      description: 'Beschermende veiligheidsbril',
      inStock: true
    }
  ];

  // Filter products based on selected category, search term, and price range
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = product.price < 20;
    else if (priceRange === 'medium') matchesPrice = product.price >= 20 && product.price < 100;
    else if (priceRange === 'high') matchesPrice = product.price >= 100;
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

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
                <a 
                  href="/contact" 
                  className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-medium transition-all inline-block w-full text-center"
                >
                  Contact opnemen
                </a>
              </div>
            </aside>
            
            {/* Products Grid */}
            <main className="lg:w-3/4">
              {/* Sort Options */}
              <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <p className="text-gray-600">
                    {sortedProducts.length} producten gevonden
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-blue-600">€{product.price}</span>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          product.inStock 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {product.inStock ? 'Op voorraad' : 'Uitverkocht'}
                        </span>
                      </div>
                      <button 
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
                          product.inStock
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!product.inStock}
                      >
                        {product.inStock ? 'Meer informatie' : 'Niet beschikbaar'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {sortedProducts.length === 0 && (
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
              <a 
                href="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-all"
              >
                Contact opnemen
              </a>
              <a 
                href="/quote-request" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-md font-medium transition-all"
              >
                Offerte aanvragen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;