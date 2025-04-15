import { JSX } from 'react';
import { Link } from 'react-router';

interface CardProps {
    title: string;
    description: string;
    route: string;
    icon: JSX.Element;
}

const Card = ({ title, description, route, icon }: CardProps) => {
    return (
        <Link to={route} className="block">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="flex items-center justify-center mb-4 text-blue-500">
                    {icon}
                </div>
                <h2 className="text-xl font-semibold text-center mb-2">
                    {title}
                </h2>
                <p className="text-gray-600 text-center">{description}</p>
            </div>
        </Link>
    );
};

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Welcome to Your Dashboard
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card
                        title="Climate Forecasts"
                        description="Access detailed climate forecasts and weather predictions"
                        route="/app1"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                />
                            </svg>
                        }
                    />

                    <Card
                        title="Mobility Prediction"
                        description="Interactive map visualization and geographic data analysis"
                        route="/app2"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                />
                            </svg>
                        }
                    />
                    <Card
                        title="Prediction Dashboard"
                        description="Explore prediction trends and data analysis with IA"
                        route="/app3"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                />
                            </svg>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
