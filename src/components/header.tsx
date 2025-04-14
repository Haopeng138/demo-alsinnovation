import React from 'react';
import { Link } from 'react-router'; // Or use <a> if you're not using react-router

type NavItem = {
    label: string;
    path: string;
};

type HeaderProps = {
    links: NavItem[];
};

const Header: React.FC<HeaderProps> = ({ links }) => {
    return (
        <header className="bg-white text-[#0f2c45] shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-xl font-bold">MyApp</div>
                <nav className="space-x-4">
                    {links.map(({ label, path }) => (
                        <Link key={path} to={path} className="hover:underline">
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
