import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import ClimateForecasts from './pages/prueba2.tsx';
import MapaDashboard from './pages/mapa.tsx';
import Dashboard from './pages/app3.tsx';

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found');
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/app1" element={<ClimateForecasts></ClimateForecasts>} />
      <Route path="/app2" element={<MapaDashboard />} />
      <Route path="/app3" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
