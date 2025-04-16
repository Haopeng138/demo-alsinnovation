import { Card } from '@/components/card';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { RiRobot2Line } from 'react-icons/ri';

export function GodoBase() {
    return (
        <>
            {' '}
            <div className="min-h-screen bg-gray-50 py-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-10">
                        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                            AI Products
                        </h1>
                        <p className="text-gray-500">
                            Access and analyze critical business data and
                            predictions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <Card
                            title="Custom AI Agents"
                            description="Build and deploy custom AI agents for various tasks"
                            route="/app1"
                            icon={<RiRobot2Line />}
                        />

                        <Card
                            title="Auto News Generation"
                            description="Generate news articles and summaries using AI"
                            route="/app2"
                            icon={<HiOutlineNewspaper />}
                        />

                        <Card
                            title="Predictive Analytics"
                            description="AI-powered trend analysis and forecasting tools"
                            route="/app3"
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
