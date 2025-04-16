import { JSX } from 'react';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart,
    Area,
} from 'recharts';
import {
    Radio,
    Tv,
    Mic,
    BarChart2,
    AlertTriangle,
    ArrowUp,
    ArrowDown,
    Clock,
    MessageCircle,
    TrendingUp,
    Globe,
    User,
} from 'lucide-react';

// Datos simulados para el observatorio de medios
const coberturaTematicaData = [
    { name: '8:00', rac1: 40, ser: 25, cope: 15, catalunya: 30, ondaCero: 20 },
    { name: '9:00', rac1: 30, ser: 35, cope: 25, catalunya: 20, ondaCero: 30 },
    { name: '10:00', rac1: 20, ser: 40, cope: 35, catalunya: 25, ondaCero: 40 },
    { name: '11:00', rac1: 35, ser: 30, cope: 40, catalunya: 35, ondaCero: 25 },
    { name: '12:00', rac1: 45, ser: 20, cope: 30, catalunya: 40, ondaCero: 35 },
    { name: '13:00', rac1: 25, ser: 45, cope: 25, catalunya: 30, ondaCero: 40 },
    { name: '14:00', rac1: 50, ser: 35, cope: 20, catalunya: 25, ondaCero: 30 },
];

const distribucionTematicaData = [
    { name: 'Política', value: 35, color: '#0088FE' },
    { name: 'Deportes', value: 25, color: '#00C49F' },
    { name: 'Economía', value: 15, color: '#FFBB28' },
    { name: 'Internacional', value: 10, color: '#FF8042' },
    { name: 'Cultura', value: 8, color: '#8884d8' },
    { name: 'Otros', value: 7, color: '#82ca9d' },
];

const comparativaEmisorasData = [
    { name: 'RAC1', politica: 35, deportes: 25, economia: 15, internacional: 10, cultura: 8 },
    { name: 'SER', politica: 40, deportes: 20, economia: 18, internacional: 12, cultura: 5 },
    { name: 'COPE', politica: 30, deportes: 30, economia: 10, internacional: 15, cultura: 10 },
    { name: 'Cat Ràdio', politica: 38, deportes: 18, economia: 20, internacional: 14, cultura: 12 },
    { name: 'Onda Cero', politica: 32, deportes: 28, economia: 15, internacional: 15, cultura: 10 },
];

const mencionesData = [
    { name: 'Lun', rac1: 45, competencia: 38 },
    { name: 'Mar', rac1: 48, competencia: 42 },
    { name: 'Mié', rac1: 52, competencia: 48 },
    { name: 'Jue', rac1: 50, competencia: 52 },
    { name: 'Vie', rac1: 55, competencia: 50 },
    { name: 'Sáb', rac1: 42, competencia: 45 },
    { name: 'Dom', rac1: 38, competencia: 40 },
];

const alertasData = [
    {
        id: 1,
        tipo: 'Tendencia emergente',
        mensaje: 'Aumento significativo de menciones a "crisis energética" en SER y COPE',
        severidad: 'alta',
        tiempo: '30m',
    },
    {
        id: 2,
        tipo: 'Brecha de cobertura',
        mensaje: 'Catalunya Ràdio dedicando 40% a economía local, sin cobertura en RAC1',
        severidad: 'media',
        tiempo: '1h',
    },
    {
        id: 3,
        tipo: 'Enfoque diferencial',
        mensaje: 'Tono crítico en COPE sobre política gubernamental vs neutral en otras emisoras',
        severidad: 'media',
        tiempo: '2h',
    },
    {
        id: 4,
        tipo: 'Oportunidad editorial',
        mensaje: 'Baja cobertura general sobre crisis climática, potencial nicho informativo',
        severidad: 'baja',
        tiempo: '4h',
    },
];

const sentimientoData = [
    { name: 'RAC1', positivo: 40, neutral: 45, negativo: 15 },
    { name: 'SER', positivo: 30, neutral: 50, negativo: 20 },
    { name: 'COPE', positivo: 25, neutral: 45, negativo: 30 },
    { name: 'Cat Ràdio', positivo: 35, neutral: 50, negativo: 15 },
    { name: 'Onda Cero', positivo: 30, neutral: 55, negativo: 15 },
];

export default function ObservatorioMediaDashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Contenido principal del dashboard */}
            <main className="mx-auto px-8 py-4">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Observatorio Competitivo de Medios
                    </h2>

                    {/* Tarjetas de KPIs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <KpiCard
                            title="Menciones Grupo Godó"
                            value="↑ 12.5%"
                            subtitle="vs. semana anterior"
                            icon={
                                <MessageCircle
                                    size={24}
                                    className="text-indigo-500"
                                />
                            }
                            trend="up"
                            bgColor="bg-indigo-50"
                        />
                        <KpiCard
                            title="Cobertura Política"
                            value="35.8%"
                            subtitle="del tiempo total"
                            icon={
                                <Globe size={24} className="text-green-500" />
                            }
                            trend="up"
                            bgColor="bg-green-50"
                        />
                        <KpiCard
                            title="Sentimiento Positivo"
                            value="42.6%"
                            subtitle="en RAC1 hoy"
                            icon={
                                <User size={24} className="text-blue-500" />
                            }
                            trend="down"
                            bgColor="bg-blue-50"
                        />
                        <KpiCard
                            title="Temas Exclusivos"
                            value="8"
                            subtitle="no tratados por competencia"
                            icon={
                                <TrendingUp
                                    size={24}
                                    className="text-purple-500"
                                />
                            }
                            trend="up"
                            bgColor="bg-purple-50"
                        />
                    </div>

                    {/* Panel de Alertas */}
                    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold flex items-center">
                                <AlertTriangle
                                    size={20}
                                    className="text-orange-500 mr-2"
                                />
                                Alertas de Monitoreo en Tiempo Real
                            </h3>
                            <div className="bg-orange-100 text-orange-700 py-1 px-3 rounded-full text-sm font-medium">
                                4 Alertas activas
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {alertasData.map((alerta) => (
                                <div
                                    key={alerta.id}
                                    className={`rounded-lg p-4 border-l-4 ${
                                        alerta.severidad === 'alta'
                                            ? 'border-red-500 bg-red-50'
                                            : alerta.severidad === 'media'
                                              ? 'border-yellow-500 bg-yellow-50'
                                              : 'border-blue-500 bg-blue-50'
                                    }`}
                                >
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-medium text-gray-800">
                                            {alerta.tipo}
                                        </h4>
                                        <span className="flex items-center text-sm text-gray-500">
                                            <Clock size={14} className="mr-1" />
                                            {alerta.tiempo}
                                        </span>
                                    </div>
                                    <p className="text-sm mt-1 text-gray-600">
                                        {alerta.mensaje}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gráficos principales en layout horizontal */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        {/* Gráfico de Cobertura Temática por Hora */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                                <Radio size={20} className="text-blue-500 mr-2" />
                                Cobertura Política por Hora del Día
                            </h3>
                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        data={coberturaTematicaData}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            stroke="#f0f0f0"
                                        />
                                        <XAxis dataKey="name" />
                                        <YAxis
                                            label={{ 
                                                value: '% del tiempo', 
                                                angle: -90, 
                                                position: 'insideLeft' 
                                            }}
                                        />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="rac1"
                                            stroke="#3b82f6"
                                            name="RAC1"
                                            strokeWidth={2}
                                            dot={{ r: 4 }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="ser"
                                            stroke="#10b981"
                                            name="SER"
                                            strokeWidth={2}
                                            dot={{ r: 4 }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="cope"
                                            stroke="#f59e0b"
                                            name="COPE"
                                            strokeWidth={2}
                                            dot={{ r: 4 }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="catalunya"
                                            stroke="#8b5cf6"
                                            name="Catalunya Ràdio"
                                            strokeWidth={2}
                                            dot={{ r: 4 }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="ondaCero"
                                            stroke="#ef4444"
                                            name="Onda Cero"
                                            strokeWidth={2}
                                            dot={{ r: 4 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Gráfico de distribución temática */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                                <BarChart2 
                                    size={20}
                                    className="text-green-500 mr-2"
                                />
                                Distribución Temática en RAC1 (Hoy)
                            </h3>
                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={distribucionTematicaData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={70}
                                            outerRadius={100}
                                            paddingAngle={5}
                                            dataKey="value"
                                            label={({ name, percent }) =>
                                                `${name}: ${(percent * 100).toFixed(0)}%`
                                            }
                                        >
                                            {distribucionTematicaData.map(
                                                (entry, index) => (
                                                    <Cell
                                                        key={`cell-${index}`}
                                                        fill={entry.color}
                                                    />
                                                )
                                            )}
                                        </Pie>
                                        <Tooltip
                                            formatter={(value) => [
                                                `${value}%`,
                                                'Tiempo dedicado',
                                            ]}
                                        />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Fila de gráficos adicionales */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Comparativa de emisoras */}
                        <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-2">
                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                                <Mic
                                    size={20}
                                    className="text-indigo-500 mr-2"
                                />
                                Comparativa de Cobertura Temática por Emisora
                            </h3>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={comparativaEmisorasData}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            stroke="#f0f0f0"
                                        />
                                        <XAxis dataKey="name" />
                                        <YAxis 
                                            label={{ 
                                                value: '% del tiempo', 
                                                angle: -90,
                                                position: 'insideLeft' 
                                            }}
                                        />
                                        <Tooltip />
                                        <Legend />
                                        <Bar
                                            dataKey="politica"
                                            name="Política"
                                            stackId="a"
                                            fill="#0088FE"
                                            radius={[4, 4, 0, 0]}
                                        />
                                        <Bar
                                            dataKey="deportes"
                                            name="Deportes"
                                            stackId="a"
                                            fill="#00C49F"
                                            radius={[4, 4, 0, 0]}
                                        />
                                        <Bar
                                            dataKey="economia"
                                            name="Economía"
                                            stackId="a"
                                            fill="#FFBB28"
                                            radius={[4, 4, 0, 0]}
                                        />
                                        <Bar
                                            dataKey="internacional"
                                            name="Internacional"
                                            stackId="a"
                                            fill="#FF8042"
                                            radius={[4, 4, 0, 0]}
                                        />
                                        <Bar
                                            dataKey="cultura"
                                            name="Cultura"
                                            stackId="a"
                                            fill="#8884d8"
                                            radius={[4, 4, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Análisis de sentimiento */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                                <MessageCircle
                                    size={20}
                                    className="text-purple-500 mr-2"
                                />
                                Análisis de Sentimiento por Emisora
                            </h3>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={sentimientoData}
                                        margin={{
                                            top: 5,
                                            right: 20,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                        layout="vertical"
                                    >
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            stroke="#f0f0f0"
                                        />
                                        <XAxis type="number" />
                                        <YAxis dataKey="name" type="category" />
                                        <Tooltip />
                                        <Legend />
                                        <Bar
                                            dataKey="positivo"
                                            name="Positivo"
                                            stackId="a"
                                            fill="#4ade80"
                                        />
                                        <Bar
                                            dataKey="neutral"
                                            name="Neutral"
                                            stackId="a"
                                            fill="#94a3b8"
                                        />
                                        <Bar
                                            dataKey="negativo"
                                            name="Negativo"
                                            stackId="a"
                                            fill="#f87171"
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

interface KpiCardProps {
    title: string;
    value: string;
    subtitle: string;
    icon: JSX.Element;
    trend: 'up' | 'down';
    bgColor: string;
}

// Componentes auxiliares
function KpiCard({
    title,
    value,
    subtitle,
    icon,
    trend,
    bgColor,
}: KpiCardProps) {
    return (
        <div className={`rounded-lg shadow-md p-5 ${bgColor}`}>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-sm font-medium text-gray-500">
                        {title}
                    </h3>
                    <p className="text-2xl font-bold mt-1 text-gray-800">
                        {value}
                    </p>
                    <div className="flex items-center mt-1">
                        {trend === 'up' ? (
                            <ArrowUp size={14} className="text-green-500" />
                        ) : (
                            <ArrowDown size={14} className="text-red-500" />
                        )}
                        <span className="text-xs ml-1 text-gray-600">
                            {subtitle}
                        </span>
                    </div>
                </div>
                <div className="p-2 rounded-md bg-white shadow-sm">{icon}</div>
            </div>
        </div>
    );
}