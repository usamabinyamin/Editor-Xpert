import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import PricingPlanPage from './pages/PricingPlanPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing-plan" element={<PricingPlanPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
