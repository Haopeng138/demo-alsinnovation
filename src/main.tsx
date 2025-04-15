import ReactDOM from 'react-dom/client';

import './index.css';
import BscBase from './bsc/index.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import MobilityDashboard from './bsc/mobilityprediction/index.tsx';

import ClimateAnalyticsDashboard from './bsc/climate/index.tsx';
import ProductAnalysisDashboard from './bsc/manage/index.tsx';
import { GodoBase } from './godo/index.tsx';
import ChatBot from './godo/chabot/index.tsx';

const root = document.getElementById('root');

if (!root) {
    throw new Error('No root element found');
}

ReactDOM.createRoot(root).render(
    <>
        <BrowserRouter basename="/bsc">
            <Routes>
                <Route path="/" element={<BscBase />} />
                <Route
                    path="/app1/*"
                    element={
                        <ClimateAnalyticsDashboard></ClimateAnalyticsDashboard>
                    }
                />
                <Route path="/app2/*" element={<MobilityDashboard />} />
                <Route
                    path="/app3/*"
                    element={
                        <ProductAnalysisDashboard></ProductAnalysisDashboard>
                    }
                />
            </Routes>
        </BrowserRouter>
        <BrowserRouter basename="/godo">
            <Routes>
                <Route path="/" element={<GodoBase />} />
                <Route path="/app1/*" element={<ChatBot></ChatBot>} />
            </Routes>
        </BrowserRouter>
    </>
);
