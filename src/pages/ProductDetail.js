import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Package, CheckCircle, XCircle, ShoppingCart, Minus, Plus } from 'lucide-react';
import ProductService from '../services/productService';
import ProductInquiryModal from '../components/ProductInquiryModal';
import PageHeader from '../components/PageHeader';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, loading: cartLoading } = useCart();

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ProductService.getProductDetail(id);
      setProduct(data);
    } catch (err) {
      console.error('Error fetching product:', err);
      setError('Product niet gevonden of er is een fout opgetreden.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Product Details" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Product niet gevonden" />
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <XCircle size={64} className="mx-auto text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Product niet gevonden</h2>
            <p className="text-gray-600 mb-6">{error || 'Dit product bestaat niet of is niet meer beschikbaar.'}</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
              Terug naar assortiment
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const imageUrl = product.image_url || product.image || 'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title={product.name} />

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/products')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Terug naar assortiment</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg p-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-square">
              <img
                src={imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x600?text=No+Image';
                }}
              />
              {!product.in_stock && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                  Niet op voorraad
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              {product.category && (
                <p className="text-blue-600 font-medium">
                  Categorie: {product.category.name || product.category}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <p className="text-sm text-gray-600 mb-1">Prijs</p>
              <p className="text-4xl font-bold text-blue-600">
                €{parseFloat(product.price).toFixed(2)}
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-3">
              {product.in_stock ? (
                <>
                  <CheckCircle size={24} className="text-green-500" />
                  <span className="text-green-600 font-semibold">Op voorraad</span>
                </>
              ) : (
                <>
                  <XCircle size={24} className="text-red-500" />
                  <span className="text-red-600 font-semibold">Niet op voorraad</span>
                </>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Productomschrijving</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}

            {/* Quantity Selector */}
            {product.in_stock && (
              <div className="border-t pt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Aantal
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <Minus size={20} />
                  </button>
                  <span className="px-6 py-3 font-semibold min-w-[4rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="border-t pt-6 space-y-3">
              {product.in_stock ? (
                <>
                  <button
                    onClick={async () => {
                      try {
                        await addToCart(product.id, quantity);
                      } catch (error) {
                        console.error('Error adding to cart:', error);
                      }
                    }}
                    disabled={cartLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart size={20} />
                    {cartLoading ? 'Toevoegen...' : 'Toevoegen aan winkelwagen'}
                  </button>

                  <button
                    onClick={() => setShowInquiryModal(true)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Package size={20} />
                    Of vraag een offerte aan
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowInquiryModal(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Package size={20} />
                  Informeer naar beschikbaarheid
                </button>
              )}

              <Link
                to="/contact"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Neem contact op
              </Link>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
              <p className="mb-2">
                <strong>Let op:</strong> Dit is een indicatieprijs. Voor een exacte offerte kunt u een aanvraag indienen.
              </p>
              <p>
                Wij nemen binnen 24 uur contact met u op om uw aanvraag te bespreken.
              </p>
            </div>
          </div>
        </div>

        {/* Product Inquiry Modal */}
        {showInquiryModal && (
          <ProductInquiryModal
            product={product}
            onClose={() => setShowInquiryModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
