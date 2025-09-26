import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import HomeLanding from './pages/home-landing';
import ClientDashboard from './pages/client-dashboard';
import ContactHub from './pages/contact-hub';
import TechnologyShowcase from './pages/technology-showcase';
import ServicePortfolio from './pages/service-portfolio';
import QuotationWizard from './pages/quotation-wizard';
import AIConsultation from './pages/ai-consultation';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<ClientDashboard />} />
        <Route path="/home-landing" element={<HomeLanding />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/contact-hub" element={<ContactHub />} />
        <Route path="/technology-showcase" element={<TechnologyShowcase />} />
        <Route path="/service-portfolio" element={<ServicePortfolio />} />
        <Route path="/quotation-wizard" element={<QuotationWizard />} />
        <Route path="/ai-consultation" element={<AIConsultation />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
