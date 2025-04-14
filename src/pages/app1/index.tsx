import Header from '@/components/header';
import { Route, Routes } from 'react-router';

function Dashboard2() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <p>Welcome to the dashboard!</p>
        </div>
    );
}

function Settings() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold">Settings</h2>
            <p>Manage your settings here.</p>
        </div>
    );
}

export function App1() {
    const links = [
        { label: 'About', path: '/app/dashboard' },
        { label: 'Contact', path: '/app/settings' },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header links={links} />
            <Routes>
                <Route path="dashboard" element={<Dashboard2 />} />
                <Route path="settings" element={<Settings />} />
            </Routes>
        </div>
    );
}
