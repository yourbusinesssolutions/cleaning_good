import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, loading, updateCartItem, removeFromCart, clearCart } = useCart();

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) {
      await removeFromCart(itemId);
    } else {
      await updateCartItem(itemId, newQuantity);
    }
  };

  const handleRemoveItem = async (itemId) => {
    await removeFromCart(itemId);
  };

  const handleClearCart = async () => {
    if (window.confirm('Weet u zeker dat u de winkelwagen wilt legen?')) {
      await clearCart();
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (loading && (!cart || !cart.items)) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Winkelwagen" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  const isEmpty = !cart.items || cart.items.length === 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Winkelwagen" />

      <div className="container mx-auto px-4 py-12">
        {isEmpty ? (
          // Empty cart state
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Uw winkelwagen is leeg
            </h2>
            <p className="text-gray-600 mb-8">
              Voeg producten toe aan uw winkelwagen om verder te gaan
            </p>
            <Link
              to="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Bekijk producten
            </Link>
          </div>
        ) : (
          // Cart with items
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Winkelwagen ({cart.item_count} {cart.item_count === 1 ? 'item' : 'items'})
                  </h2>
                  <button
                    onClick={handleClearCart}
                    className="text-red-600 hover:text-red-700 flex items-center gap-2 text-sm"
                    disabled={loading}
                  >
                    <Trash2 size={16} />
                    Alles verwijderen
                  </button>
                </div>

                <div className="space-y-4">
                  {cart.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    >
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-24 flex-shrink-0">
                        <img
                          src={item.product.image_url || 'https://via.placeholder.com/150'}
                          alt={item.product.name}
                          className="w-full h-full object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/150';
                          }}
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <Link
                              to={`/products/${item.product.id}`}
                              className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                            >
                              {item.product.name}
                            </Link>
                            {item.product.category_name && (
                              <p className="text-sm text-gray-500">{item.product.category_name}</p>
                            )}
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                            disabled={loading}
                          >
                            <X size={20} />
                          </button>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600">Aantal:</span>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-50"
                                disabled={loading || item.quantity <= 1}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-50"
                                disabled={loading}
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>

                          {/* Price */}
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-sm text-gray-600">
                                €{parseFloat(item.product.price).toFixed(2)} per stuk
                              </p>
                              <p className="text-lg font-bold text-blue-600">
                                €{parseFloat(item.subtotal).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Shopping Button */}
              <Link
                to="/products"
                className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                ← Verder winkelen
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Overzicht</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotaal</span>
                    <span>€{parseFloat(cart.total || 0).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Verzendkosten</span>
                    <span className="text-green-600">Wordt berekend bij afrekenen</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold text-gray-800">
                      <span>Totaal</span>
                      <span>€{parseFloat(cart.total || 0).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors mb-3"
                  disabled={loading}
                >
                  Afrekenen
                </button>

                <div className="text-center text-sm text-gray-500">
                  <p>Veilig betalen</p>
                  <p className="mt-2">U ontvangt binnen 24 uur een offerte</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
