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
} from 'lucide-react';

import { RegionalClimateAnalysis } from './component/regional';

// Datos simplificados
// Datos de impacto climático en producción y logística (basado en región mediterránea)
const weatherImpactData = [
    { month: 'May', temp: 21.8, precip: 58, production: 92, logistics: 88 },
    { month: 'Jun', temp: 26.5, precip: 32, production: 88, logistics: 82 },
    { month: 'Jul', temp: 30.2, precip: 12, production: 79, logistics: 75 },
    { month: 'Aug', temp: 31.7, precip: 8, production: 72, logistics: 68 },
    { month: 'Sep', temp: 27.9, precip: 38, production: 82, logistics: 78 },
    { month: 'Oct', temp: 23.4, precip: 84, production: 87, logistics: 83 },
];

// Riesgos climáticos con probabilidades e impactos más realistas
const climateRiskData = [
    { name: 'Sequía', probability: 0.28, impact: 82, radius: 45 },
    { name: 'Inundaciones', probability: 0.15, impact: 75, radius: 30 },
    { name: 'Olas de calor', probability: 0.42, impact: 68, radius: 50 },
    { name: 'Tormentas severas', probability: 0.12, impact: 88, radius: 28 },
    { name: 'Heladas tardías', probability: 0.08, impact: 65, radius: 20 },
];

// Impacto de temperatura en eficiencia y costos (curva más realista)
const temperatureImpactData = [
    { temp: 10, efficiency: 78, cost: 102 },
    { temp: 15, efficiency: 85, cost: 97 },
    { temp: 20, efficiency: 94, cost: 89 },
    { temp: 25, efficiency: 96, cost: 86 },
    { temp: 30, efficiency: 88, cost: 93 },
    { temp: 35, efficiency: 72, cost: 107 },
    { temp: 40, efficiency: 60, cost: 120 },
];

// Emisiones de carbono por sector (valores más detallados)
const carbonEmissionsData = [
    {
        name: 'Manufactura',
        value: 38.5,
        subcategories: [
            { name: 'Procesos industriales', value: 22 },
            { name: 'Consumo energético', value: 16.5 },
        ],
    },
    {
        name: 'Logística',
        value: 27.2,
        subcategories: [
            { name: 'Transporte terrestre', value: 18 },
            { name: 'Transporte marítimo', value: 6.5 },
            { name: 'Transporte aéreo', value: 2.7 },
        ],
    },
    {
        name: 'Instalaciones',
        value: 18.3,
        subcategories: [
            { name: 'Calefacción/refrigeración', value: 12 },
            { name: 'Electricidad', value: 6.3 },
        ],
    },
    { name: 'Cadena de suministro', value: 11.7 },
    { name: 'Residuos', value: 4.3 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// Remove or comment out the existing header in the ClimateForecasts component
export default function ClimateForecasts() {
    const [selectedTimeframe, setSelectedTimeframe] = useState('6 Months');
    const [selectedRegion, setSelectedRegion] = useState('Global');

    return (
        <div className="min-h-screen bg-gray-50 text-bland-dark-blue">
            <main className="px-8 py-4">
                <div className="mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <h1 className="text-2xl font-bold text-bland-dark-blue mb-4 md:mb-0">
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
                            <h2 className="font-semibold text-bland-dark-blue text-lg">
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
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
                        {/* Risk Matrix */}
                        <RegionalClimateAnalysis></RegionalClimateAnalysis>

                        {/* Temperature Impact */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <h2 className="font-semibold text-bland-dark-blue mb-4">
                                Optimizador de procesos por temperatura
                            </h2>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={temperatureImpactData}>
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            strokeOpacity={0.1}
                                        />
                                        <Legend
                                            width={600}
                                            verticalAlign="top"
                                        />
                                        <XAxis
                                            dataKey="temp"
                                            label={{
                                                value: 'Temperatura (°C)',
                                                position: 'insideBottom',
                                                offset: -2,
                                            }}
                                        />
                                        <YAxis domain={[60, 110]} />
                                        <Tooltip />

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
                        <h2 className="font-semibold text-bland-dark-blue0 mb-4">
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
                                            (_entry, index) => (
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
        </div>
    );
}

interface SelectDropdownProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

export function SelectDropdown({
    options,
    value,
    onChange,
}: SelectDropdownProps) {
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
