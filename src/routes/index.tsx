import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home';
import Features from '../pages/Features';
import Pricing from '../pages/Pricing';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Checkout from '../pages/Checkout';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Careers from '../pages/Careers';
import Terms from '../pages/Terms';
import PlaceholderPage from '../pages/Placeholder';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes with main layout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/changelog" element={<PlaceholderPage slug="changelog" />} />
          <Route path="/roadmap" element={<PlaceholderPage slug="roadmap" />} />
          <Route path="/blog" element={<PlaceholderPage slug="blog" />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<PlaceholderPage slug="privacy" />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<PlaceholderPage slug="cookies" />} />
          <Route path="/security" element={<PlaceholderPage slug="security" />} />
        </Route>

        {/* Lead capture */}
        <Route path="/login" element={<Navigate to="/signup" replace />} />
        <Route path="/forgot-password" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard (separate layout) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
