import ReactDOM from 'react-dom/client';

import './index.css';
import BscBase from './bsc/index.tsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import MobilityDashboard from './bsc/mobilityprediction/index.tsx';

import ClimateAnalyticsDashboard from './bsc/climate/index.tsx';
import ProductAnalysisDashboard from './bsc/manage/index.tsx';
import { GodoBase } from './godo/index.tsx';
import ChatBot from './godo/chabot/index.tsx';
import GenerateNews from './godo/generatenews/index.tsx';
import GodoProductAnalysisDashboard from './godo/manage/index.tsx';
import { JSX, ReactNode } from 'react';

const root = document.getElementById('root');

if (!root) {
    throw new Error('No root element found');
}

interface RouteItem {
    path: string;
    element: ReactNode;
}

// Define types for the router props
interface AppRouterProps {
    basename: string;
    routes: RouteItem[];
}
// Define routes configuration for easier management
const bscRoutes: RouteItem[] = [
    { path: '/', element: <BscBase /> },
    { path: '/app1/*', element: <ClimateAnalyticsDashboard /> },
    { path: '/app2/*', element: <MobilityDashboard /> },
    { path: '/app3/*', element: <ProductAnalysisDashboard /> },
];

const godoRoutes: RouteItem[] = [
    { path: '/', element: <GodoBase /> },
    { path: '/app1/*', element: <ChatBot /> },
    { path: '/app2/*', element: <GenerateNews /> },
    { path: '/app3/*', element: <GodoProductAnalysisDashboard /> },
];

// Create a reusable router component with type definitions
const AppRouter = ({ basename, routes }: AppRouterProps): JSX.Element => (
    <BrowserRouter basename={basename}>
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={`${basename}-${index}`}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    </BrowserRouter>
);
// Landing page component that provides links to both applications
const LandingPage = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6">
            <h1 className="text-3xl font-bold text-gray-800">
                Welcome to Our Applications
            </h1>
            <div className="flex gap-4">
                <a
                    href="/bsc"
                    className="px-6 py-3 text-white bg-green-500 rounded hover:bg-green-600 transition-colors font-medium"
                >
                    Go to BSC Dashboard
                </a>
                <a
                    href="/godo"
                    className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors font-medium"
                >
                    Go to GODO Platform
                </a>
            </div>
        </div>
    );
};

// Main render with root router that includes landing page and redirects
ReactDOM.createRoot(root).render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
        <AppRouter basename="/bsc" routes={bscRoutes} />
        <AppRouter basename="/godo" routes={godoRoutes} />
    </>
);
