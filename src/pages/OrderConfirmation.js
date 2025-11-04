import { CheckCircle, Mail, Package, Phone } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import OrderService from '../services/orderService';

const OrderConfirmation = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        const orderData = await OrderService.getOrder(id);
        setOrder(orderData);
      } catch (err) {
        console.error('Error fetching order:', err);
        setError('Kon bestelling niet laden');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchOrder();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Bevestiging" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Bestelling niet gevonden" />
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <p className="text-gray-600 mb-6">{error || 'Deze bestelling bestaat niet.'}</p>
            <Link
              to="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Terug naar producten
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Bestelling Bevestigd" />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Bedankt voor uw bestelling!
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                Uw bestelling is succesvol ontvangen.
              </p>
              <p className="text-gray-500">
                Bestelnummer: <span className="font-semibold">#{order.id}</span>
              </p>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Wat gebeurt er nu?</h2>
            <div className="space-y-3 text-blue-800">
              <div className="flex items-start gap-3">
                <span className="font-bold">1.</span>
                <p>U ontvangt binnen enkele minuten een bevestigingsmail op <strong>{order.email}</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold">2.</span>
                <p>Ons team bekijkt uw aanvraag en stelt een gedetailleerde offerte op</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold">3.</span>
                <p>Binnen 24 uur nemen wij telefonisch contact met u op via <strong>{order.phone}</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold">4.</span>
                <p>Na akkoord plannen wij de levering of uitvoering in</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Order Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Contactgegevens</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Package className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Naam</p>
                    <p className="font-semibold text-gray-800">{order.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">E-mail</p>
                    <p className="font-semibold text-gray-800">{order.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Telefoon</p>
                    <p className="font-semibold text-gray-800">{order.phone}</p>
                  </div>
                </div>
                {order.company && (
                  <div className="flex items-center gap-3">
                    <Package className="text-gray-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Bedrijf</p>
                      <p className="font-semibold text-gray-800">{order.company}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Bestelling overzicht</h2>
              <div className="space-y-3">
                {order.items && order.items.map((item) => (
                  <div key={item.id} className="flex justify-between py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-800">{item.product_name}</p>
                      <p className="text-sm text-gray-600">
                        {item.quantity}x €{parseFloat(item.price).toFixed(2)}
                      </p>
                    </div>
                    <p className="font-semibold text-blue-600">
                      €{parseFloat(item.subtotal).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className="flex justify-between pt-4 text-lg font-bold text-gray-800">
                  <span>Totaal</span>
                  <span>€{parseFloat(order.total_amount).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          {order.notes && (
            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Uw opmerkingen</h3>
              <p className="text-gray-600">{order.notes}</p>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Verder winkelen
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Contact opnemen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
