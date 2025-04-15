import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import ClimateForecasts from './pages/prueba2.tsx';
import MobilityDashboard from './pages/mobilityprediction/index.tsx';
import Dashboard from './pages/app3.tsx';
import { App1 } from './pages/app1';

const root = document.getElementById('root');

if (!root) {
    throw new Error('No root element found');
}

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/app/*" element={<App1 />}></Route>
            <Route
                path="/app1/*"
                element={<ClimateForecasts></ClimateForecasts>}
            />
            <Route path="/app2/*" element={<MobilityDashboard />} />
            <Route path="/app3" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
);
