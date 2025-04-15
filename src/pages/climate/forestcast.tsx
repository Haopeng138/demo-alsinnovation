import { JSX, useState } from 'react';
import {
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import {
    Download,
    AlertCircle,
    Zap,
    TrendingUp,
    ChevronDown,
    Search,
} from 'lucide-react';

// Datos simplificados
const weatherImpactData = [
    { month: 'May', temp: 23.5, precip: 82, production: 95, logistics: 92 },
    { month: 'Jun', temp: 26.1, precip: 65, production: 93, logistics: 90 },
    { month: 'Jul', temp: 28.4, precip: 42, production: 88, logistics: 85 },
    { month: 'Aug', temp: 29.2, precip: 30, production: 83, logistics: 78 },
    { month: 'Sep', temp: 27.5, precip: 45, production: 85, logistics: 82 },
    { month: 'Oct', temp: 24.8, precip: 72, production: 90, logistics: 87 },
];

const climateRiskData = [
    { name: 'Sequía', probability: 0.23, impact: 85, radius: 30 },
    { name: 'Inundaciones', probability: 0.18, impact: 78, radius: 25 },
    { name: 'Olas de calor', probability: 0.35, impact: 62, radius: 35 },
    { name: 'Tormentas', probability: 0.15, impact: 90, radius: 22 },
];

const temperatureImpactData = [
    { temp: 15, efficiency: 82, cost: 95 },
    { temp: 21, efficiency: 95, cost: 88 },
    { temp: 27, efficiency: 94, cost: 87 },
    { temp: 33, efficiency: 75, cost: 98 },
];

const carbonEmissionsData = [
    { name: 'Manufactura', value: 40 },
    { name: 'Logística', value: 25 },
    { name: 'Oficinas', value: 15 },
    { name: 'Viajes', value: 12 },
    { name: 'Otros', value: 8 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// Remove or comment out the existing header in the ClimateForecasts component
export default function ClimateForecasts() {
    const [selectedTimeframe, setSelectedTimeframe] = useState('6 Months');
    const [selectedRegion, setSelectedRegion] = useState('Global');

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <main className="px-8 py-4">
                <div className="mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <h1 className="text-2xl font-bold text-blue-900 mb-4 md:mb-0">
                            Climate Forecasts & Business Impact
                        </h1>
                        <div className="flex space-x-3">
                            <SelectDropdown
                                options={['6 Months', '1 Year', '5 Years']}
                                value={selectedTimeframe}
                                onChange={setSelectedTimeframe}
                            />
                            <SelectDropdown
                                options={[
                                    'Global',
                                    'Americas',
                                    'Europe',
                                    'Asia',
                                ]}
                                value={selectedRegion}
                                onChange={setSelectedRegion}
                            />
                        </div>
                    </div>

                    {/* Alerts */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <AlertCard
                            icon={<AlertCircle size={20} />}
                            title="Riesgo inminente"
                            description="Olas de calor previstas para julio-agosto podrían reducir la productividad en un 12%."
                            severity="high"
                        />
                        <AlertCard
                            icon={<Zap size={20} />}
                            title="Oportunidad detectada"
                            description="Condiciones climáticas favorables para energía solar en Q3 podrían reducir costos energéticos en un 18%."
                            severity="medium"
                        />
                        <AlertCard
                            icon={<TrendingUp size={20} />}
                            title="Tendencia a vigilar"
                            description="Incremento en lluvias para octubre-noviembre. Revisar planes logísticos."
                            severity="low"
                        />
                    </div>

                    {/* Business Impact Chart */}
                    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold text-blue-900 text-lg">
                                Impacto del clima en KPIs de negocio
                            </h2>
                            <button className="p-1 hover:bg-gray-100 rounded">
                                <Download size={16} className="text-gray-500" />
                            </button>
                        </div>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={weatherImpactData}>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        strokeOpacity={0.1}
                                    />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="temp"
                                        name="Temperatura (°C)"
                                        stroke="#FF8042"
                                        strokeWidth={2}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="production"
                                        name="Eficiencia Producción (%)"
                                        stroke="#00C49F"
                                        strokeWidth={2}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="logistics"
                                        name="Eficiencia Logística (%)"
                                        stroke="#FFBB28"
                                        strokeWidth={2}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Two Column Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Risk Matrix */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <h2 className="font-semibold text-blue-900 mb-4">
                                Matriz de riesgo climático
                            </h2>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <ScatterChart
                                        margin={{
                                            top: 20,
                                            right: 20,
                                            bottom: 20,
                                            left: 20,
                                        }}
                                    >
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            strokeOpacity={0.1}
                                        />
                                        <XAxis
                                            type="number"
                                            dataKey="probability"
                                            name="Probabilidad"
                                            tickFormatter={(val) =>
                                                `${Math.round(val * 100)}%`
                                            }
                                        />
                                        <YAxis
                                            type="number"
                                            dataKey="impact"
                                            name="Impacto"
                                        />
                                        <Tooltip
                                            formatter={(value, name) =>
                                                name === 'probability'
                                                    ? [
                                                          `${(Number(value) * 100).toFixed(0)}%`,
                                                          'Probabilidad',
                                                      ]
                                                    : [
                                                          `${value}/100`,
                                                          'Impacto',
                                                      ]
                                            }
                                        />
                                        <Legend />
                                        <Scatter
                                            name="Riesgos climáticos"
                                            data={climateRiskData}
                                            fill="#8884d8"
                                        >
                                            {climateRiskData.map(
                                                (entry, index) => (
                                                    <Cell
                                                        key={`cell-${index}`}
                                                        fill={
                                                            COLORS[
                                                                index %
                                                                    COLORS.length
                                                            ]
                                                        }
                                                    />
                                                )
                                            )}
                                        </Scatter>
                                    </ScatterChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Temperature Impact */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <h2 className="font-semibold text-blue-900 mb-4">
                                Optimizador de procesos por temperatura
                            </h2>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={temperatureImpactData}>
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            strokeOpacity={0.1}
                                        />
                                        <XAxis
                                            dataKey="temp"
                                            label={{
                                                value: 'Temperatura (°C)',
                                                position: 'bottom',
                                            }}
                                        />
                                        <YAxis domain={[60, 110]} />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="efficiency"
                                            name="Eficiencia operativa (%)"
                                            stroke="#0088FE"
                                            strokeWidth={2}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="cost"
                                            name="Costos relativos (%)"
                                            stroke="#FF8042"
                                            strokeWidth={2}
                                        />
                                        <rect
                                            x="21%"
                                            y="0%"
                                            width="15%"
                                            height="100%"
                                            fill="#00C49F"
                                            fillOpacity={0.1}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg mt-4 text-xs">
                                <span className="font-medium">
                                    Recomendación:
                                </span>{' '}
                                La zona óptima para operaciones es 20-24°C con
                                eficiencia s95% y costos mínimos.
                            </div>
                        </div>
                    </div>

                    {/* Carbon Emissions */}
                    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                        <h2 className="font-semibold text-blue-900 mb-4">
                            Emisiones de carbono y oportunidades de reducción
                        </h2>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={carbonEmissionsData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                        label={({ name, percent }) =>
                                            `${name} ${(percent * 100).toFixed(0)}%`
                                        }
                                    >
                                        {carbonEmissionsData.map(
                                            (entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={
                                                        COLORS[
                                                            index %
                                                                COLORS.length
                                                        ]
                                                    }
                                                />
                                            )
                                        )}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value) => [
                                            `${value}%`,
                                            'Emisiones',
                                        ]}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="mt-4 bg-green-50 p-3 rounded-lg text-xs text-green-700">
                            <span className="font-medium">Oportunidad:</span>{' '}
                            Potencial para reducir emisiones en un 16% y costos
                            energéticos en un 12% durante los próximos 6 meses
                            mediante ajustes basados en pronósticos climáticos.
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-blue-900 text-white py-4 text-center text-sm">
                <div className="max-w-7xl mx-auto">
                    © 2025 Arm's Length Services. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

// Add these components from prueba.tsx
// ALS Logo Component
function ALSLogo() {
    return (
        <div className="flex items-center space-x-2">
            <svg
                width="36"
                height="36"
                viewBox="0 0 100 36"
                className="text-blue-900"
            >
                <g fill="currentColor">
                    <path d="M12.2,0L0,35.8h5.9l2.4-7.1h11.4l2.4,7.1h5.9L16.4,0H12.2z M9.8,23.9l4-11.6l4,11.6H9.8z" />
                    <path d="M30.7,0v35.8h5.3V0H30.7z" />
                    <path d="M56.4,0h-5l-10.8,16v-16h-5.3v35.8h5.3V21.4l11.1,14.4h6.3L46.4,19.8L56.4,0z" />
                </g>
            </svg>
            <div className="flex flex-col">
                <span className="font-bold text-blue-900 text-lg">
                    Arm's Length
                </span>
                <span className="font-bold text-blue-900 text-xs -mt-1">
                    Services Innovation
                </span>
            </div>
        </div>
    );
}

export function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <ALSLogo />
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <NavLink href="#" active>
                            Dashboard
                        </NavLink>
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

interface NavLinkProps {
    href: string;
    active?: boolean;
    children: React.ReactNode;
}

// Navigation Link Component
function NavLink({ href, active, children }: NavLinkProps) {
    return (
        <a
            href={href}
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                active
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
            }`}
        >
            {children}
        </a>
    );
}

interface SelectDropdownProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

function SelectDropdown({ options, value, onChange }: SelectDropdownProps) {
    return (
        <div className="relative">
            <select
                className="appearance-none bg-white border border-gray-200 rounded-md py-2 pl-3 pr-8 text-sm"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={16} />
            </div>
        </div>
    );
}

interface AlertCardProps {
    icon: JSX.Element;
    title: string;
    description: string;
    severity: 'high' | 'medium' | 'low';
}

function AlertCard({ icon, title, description, severity }: AlertCardProps) {
    const severityColors = {
        high: 'bg-red-50 border-red-200 text-red-800',
        medium: 'bg-amber-50 border-amber-200 text-amber-800',
        low: 'bg-blue-50 border-blue-200 text-blue-800',
    };

    return (
        <div className={`rounded-lg p-4 border ${severityColors[severity]}`}>
            <div className="flex items-start">
                <div className="mt-1 mr-3">{icon}</div>
                <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm mt-1">{description}</p>
                </div>
            </div>
        </div>
    );
}
