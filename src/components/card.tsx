import { JSX } from 'react';
import { Link } from 'react-router';

interface CardProps {
    title: string;
    description: string;
    route: string;
    icon: JSX.Element;
}

export function Card({ title, description, route, icon }: CardProps) {
    return (
        <Link to={route} className="block">
            <div className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-blue-50 p-3 rounded-md text-blue-600">
                        {icon}
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-1">
                            {title}
                        </h2>
                        <p className="text-sm text-gray-500">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
