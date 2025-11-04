import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { CartProvider } from './contexts/CartContext';
import { ToastProvider } from './contexts/ToastContext';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import OrderConfirmation from './pages/OrderConfirmation';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import QuoteRequest from './pages/QuoteRequest';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import WorkWithUs from './pages/WorkWithUs';

function App() {
  return (
    <Router>
      <ToastProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/work-with-us" element={<WorkWithUs />} />
                <Route path="/quote-request" element={<QuoteRequest />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;