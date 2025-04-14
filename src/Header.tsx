import { ALSLogo } from "./prueba";

export function Header() {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ALSLogo />
            </div>
            <nav className="hidden md:flex space-x-8">
              <NavLink href="#" active>Dashboard</NavLink>
              <NavLink href="#">Historic Data</NavLink>
              <NavLink href="#">Forecasts</NavLink>
              <NavLink href="#">Reports</NavLink>
              <NavLink href="#">Settings</NavLink>
            </nav>
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:outline-none text-sm w-40"
              />
              <Search size={16} className="text-gray-500" />
            </div>
          </div>
        </div>
      </header>
    );
  }