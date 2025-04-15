import { JSX, useState } from 'react';
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
    TrendingUp,
    Truck,
    Package,
    DollarSign,
    AlertTriangle,
    ArrowUp,
    ArrowDown,
    Zap,
    Clock,
} from 'lucide-react';

// Datos simulados
const demandData = [
    { name: 'Ene', actual: 4000, prediccion: 4200, tendencia: 4100 },
    { name: 'Feb', actual: 3000, prediccion: 3100, tendencia: 3200 },
    { name: 'Mar', actual: 2000, prediccion: 2400, tendencia: 2300 },
    { name: 'Abr', actual: 2780, prediccion: 2600, tendencia: 2700 },
    { name: 'May', actual: 1890, prediccion: 2000, tendencia: 1950 },
    { name: 'Jun', actual: 2390, prediccion: 2500, tendencia: 2450 },
    { name: 'Jul', actual: 3490, prediccion: 3300, tendencia: 3400 },
    { name: 'Ago', actual: null, prediccion: 3800, tendencia: 3700 },
    { name: 'Sep', actual: null, prediccion: 4100, tendencia: 4000 },
];

const inventarioData = [
    { name: 'Producto A', value: 30, color: '#0088FE' },
    { name: 'Producto B', value: 20, color: '#00C49F' },
    { name: 'Producto C', value: 15, color: '#FFBB28' },
    { name: 'Producto D', value: 35, color: '#FF8042' },
];

const rutasData = [
    { name: 'Ruta A', actual: 75, optimizada: 85 },
    { name: 'Ruta B', actual: 60, optimizada: 78 },
    { name: 'Ruta C', actual: 80, optimizada: 92 },
    { name: 'Ruta D', actual: 55, optimizada: 70 },
    { name: 'Ruta E', actual: 65, optimizada: 83 },
];

const alertasData = [
    {
        id: 1,
        tipo: 'Inventario bajo',
        mensaje: 'Producto A por debajo del umbral crítico',
        severidad: 'alta',
        tiempo: '2h',
    },
    {
        id: 2,
        tipo: 'Demanda anómala',
        mensaje: 'Incremento inusual de demanda en región Norte',
        severidad: 'media',
        tiempo: '4h',
    },
    {
        id: 3,
        tipo: 'Retraso logístico',
        mensaje: 'Posible congestión en ruta B',
        severidad: 'media',
        tiempo: '1h',
    },
    {
        id: 4,
        tipo: 'Predicción mercado',
        mensaje: 'Tendencia alcista en Producto C',
        severidad: 'baja',
        tiempo: '12h',
    },
];

const tendenciaData = [
    { name: 'Lun', demanda: 4000 },
    { name: 'Mar', demanda: 4200 },
    { name: 'Mié', demanda: 4500 },
    { name: 'Jue', demanda: 4800 },
    { name: 'Vie', demanda: 5100 },
    { name: 'Sáb', demanda: 5300 },
    { name: 'Dom', demanda: 5600 },
];

export default function IADashboard() {
    const [currentDate] = useState(
        new Date().toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Contenido principal del dashboard */}
            <main className="mx-auto px-8 py-4">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Panel de Control Predictivo
                    </h2>

                    {/* Tarjetas de KPIs - Ahora en la parte superior */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <KpiCard
                            title="Predicción Demanda"
                            value="↑ 15.2%"
                            subtitle="Crecimiento previsto"
                            icon={
                                <TrendingUp
                                    size={24}
                                    className="text-indigo-500"
                                />
                            }
                            trend="up"
                            bgColor="bg-indigo-50"
                        />
                        <KpiCard
                            title="Eficiencia Logística"
                            value="92.4%"
                            subtitle="Con optimización IA"
                            icon={
                                <Truck size={24} className="text-green-500" />
                            }
                            trend="up"
                            bgColor="bg-green-50"
                        />
                        <KpiCard
                            title="Stock Óptimo"
                            value="87.6%"
                            subtitle="Nivel de inventario"
                            icon={
                                <Package size={24} className="text-blue-500" />
                            }
                            trend="down"
                            bgColor="bg-blue-50"
                        />
                        <KpiCard
                            title="ROI Proyectado"
                            value="$68.3K"
                            subtitle="Ahorro trimestral"
                            icon={
                                <DollarSign
                                    size={24}
                                    className="text-purple-500"
                                />
                            }
                            trend="up"
                            bgColor="bg-purple-50"
                        />
                    </div>

                    {/* Panel de Alertas - Ahora más prominente */}
                    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold flex items-center">
                                <AlertTriangle
                                    size={20}
                                    className="text-orange-500 mr-2"
                                />
                                Alertas Predictivas en Tiempo Real
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
                        {/* Gráfico de predicción vs demanda real */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                                <Zap size={20} className="text-blue-500 mr-2" />
                                Análisis Predictivo de Demanda
                            </h3>
                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        data={demandData}
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
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="actual"
                                            stroke="#3b82f6"
                                            name="Demanda Real"
                                            strokeWidth={2}
                                            dot={{ r: 4 }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="prediccion"
                                            stroke="#10b981"
                                            name="Predicción IA"
                                            strokeWidth={2}
                                            dot={{ r: 4 }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="tendencia"
                                            stroke="#6366f1"
                                            strokeDasharray="3 3"
                                            name="Tendencia"
                                            strokeWidth={2}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Gráfico de distribución de inventario */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                                <Package
                                    size={20}
                                    className="text-green-500 mr-2"
                                />
                                Distribución Óptima de Inventario
                            </h3>
                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={inventarioData}
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
                                            {inventarioData.map(
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
                                                `${value} unidades`,
                                                'Cantidad',
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
                        {/* Optimización de rutas logísticas */}
                        <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-2">
                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                                <Truck
                                    size={20}
                                    className="text-indigo-500 mr-2"
                                />
                                Optimización Inteligente de Rutas
                            </h3>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={rutasData}
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
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar
                                            dataKey="actual"
                                            name="Eficiencia Actual"
                                            fill="#94a3b8"
                                            radius={[4, 4, 0, 0]}
                                        />
                                        <Bar
                                            dataKey="optimizada"
                                            name="Con IA Predictiva"
                                            fill="#6366f1"
                                            radius={[4, 4, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Predicción de tendencias */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                                <TrendingUp
                                    size={20}
                                    className="text-purple-500 mr-2"
                                />
                                Predicción de Tendencias
                            </h3>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                        data={tendenciaData}
                                        margin={{
                                            top: 5,
                                            right: 20,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            stroke="#f0f0f0"
                                        />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="demanda"
                                            stroke="#8b5cf6"
                                            fill="#c4b5fd"
                                            name="Tendencia Prevista"
                                        />
                                    </AreaChart>
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
