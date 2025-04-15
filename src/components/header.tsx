import { Link } from 'react-router'; // Or use <a> if you're not using react-router
import { Logo } from './logo';

type NavItem = {
    label: string;
    path: string;
};

type HeaderProps = {
    links: NavItem[];
};

function Header({ links }: HeaderProps) {
    return (
        <header className="bg-white text-[#0f2c45] shadow-md">
            <div className="px-8 py-4 flex justify-between items-center">
                <div>
                    <Link to="/" className="flex items-center">
                        <Logo></Logo>
                    </Link>
                </div>
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
}

export default Header;
