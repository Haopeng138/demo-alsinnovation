import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import MobilityDashboard from './pages/mobilityprediction/index.tsx';

import { App1 } from './pages/app1';
import ClimateAnalyticsDashboard from './pages/climate/index.tsx';
import ProductAnalysisDashboard from './pages/manage/index.tsx';

const root = document.getElementById('root');

if (!root) {
    throw new Error('No root element found');
}

ReactDOM.createRoot(root).render(
    <BrowserRouter basename="/demo">
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/app/*" element={<App1 />}></Route>
            <Route
                path="/app1/*"
                element={
                    <ClimateAnalyticsDashboard></ClimateAnalyticsDashboard>
                }
            />
            <Route path="/app2/*" element={<MobilityDashboard />} />
            <Route
                path="/app3/*"
                element={<ProductAnalysisDashboard></ProductAnalysisDashboard>}
            />
        </Routes>
    </BrowserRouter>
);
