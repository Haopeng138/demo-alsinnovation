import { useState } from 'react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
} from 'recharts';
import {
    Maximize2,
    ZoomIn,
    ZoomOut,
    Users,
    Clock,
    ArrowRight,
} from 'lucide-react';

import { zonasData, trendData, Zona, TrendData } from './data'; // Asegúrate de importar tus datos correctamente
import Header from '@/components/header';
import { Routes, Route } from 'react-router';
import { Footer } from '@/components/footer';

interface BodyProps {
    zonasData: Zona[];
    trendData: TrendData[];
    selectedZone: Zona | null;
    setSelectedZone: (zone: Zona | null) => void;
    handleZoneClick: (zone: Zona) => void;
}

function Body({
    zonasData,
    trendData,
    selectedZone,
    setSelectedZone,
    handleZoneClick,
}: BodyProps) {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900">
                    AI Mobility Prediction
                </h1>
            </div>

            {/* Vista principal con mapa y datos */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
                {/* Mapa de la ciudad con zonas */}
                <div className="lg:w-2/3 bg-white border rounded-lg shadow-sm overflow-hidden">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">
                            City Map - Zones Activity
                        </h2>
                        <div className="flex gap-2">
                            <button className="p-1 rounded hover:bg-gray-100">
                                <ZoomIn size={18} className="text-gray-600" />
                            </button>
                            <button className="p-1 rounded hover:bg-gray-100">
                                <ZoomOut size={18} className="text-gray-600" />
                            </button>
                            <button className="p-1 rounded hover:bg-gray-100">
                                <Maximize2
                                    size={18}
                                    className="text-gray-600"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="p-4 relative" style={{ height: '500px' }}>
                        {/* Mapa SVG */}
                        <svg viewBox="0 0 600 500" className="w-full h-full">
                            {/* Fondo del mapa con calles */}
                            <rect
                                x="0"
                                y="0"
                                width="600"
                                height="500"
                                fill="#F8F9FA"
                            />

                            {/* Calles principales */}
                            <line
                                x1="0"
                                y1="150"
                                x2="600"
                                y2="150"
                                stroke="#D1D5DB"
                                strokeWidth="15"
                            />
                            <line
                                x1="0"
                                y1="350"
                                x2="600"
                                y2="350"
                                stroke="#D1D5DB"
                                strokeWidth="15"
                            />
                            <line
                                x1="150"
                                y1="0"
                                x2="150"
                                y2="500"
                                stroke="#D1D5DB"
                                strokeWidth="15"
                            />
                            <line
                                x1="350"
                                y1="0"
                                x2="350"
                                y2="500"
                                stroke="#D1D5DB"
                                strokeWidth="15"
                            />

                            {/* Calles secundarias */}
                            <line
                                x1="0"
                                y1="250"
                                x2="600"
                                y2="250"
                                stroke="#D1D5DB"
                                strokeWidth="8"
                            />
                            <line
                                x1="250"
                                y1="0"
                                x2="250"
                                y2="500"
                                stroke="#D1D5DB"
                                strokeWidth="8"
                            />
                            <line
                                x1="450"
                                y1="0"
                                x2="450"
                                y2="500"
                                stroke="#D1D5DB"
                                strokeWidth="8"
                            />
                            <line
                                x1="50"
                                y1="0"
                                x2="50"
                                y2="500"
                                stroke="#D1D5DB"
                                strokeWidth="8"
                            />

                            {/* Edificios/bloques */}
                            <rect
                                x="50"
                                y="50"
                                width="80"
                                height="80"
                                fill="#E2E8F0"
                                stroke="#CBD5E1"
                            />
                            <rect
                                x="170"
                                y="50"
                                width="60"
                                height="80"
                                fill="#E2E8F0"
                                stroke="#CBD5E1"
                            />
                            <rect
                                x="370"
                                y="50"
                                width="60"
                                height="80"
                                fill="#E2E8F0"
                                stroke="#CBD5E1"
                            />
                            <rect
                                x="470"
                                y="50"
                                width="90"
                                height="80"
                                fill="#E2E8F0"
                                stroke="#CBD5E1"
                            />
                            <rect
                                x="50"
                                y="170"
                                width="80"
                                height="60"
                                fill="#E2E8F0"
                                stroke="#CBD5E1"
                            />
                            <rect
                                x="170"
                                y="170"
                                width="60"
                                height="60"
                                fill="#E2E8F0"
                                stroke="#CBD5E1"
                            />
                            <rect
                                x="370"
                                y="170"
                                width="60"
                                height="60"
                                fill="#E2E8F0"
                                stroke="#CBD5E1"
                            />
                            <rect
                                x="470"
                                y="170"
                                width="90"
                                height="60"
                                fill="#E2E8F0"
                                stroke="#CBD5E1"
                            />
                            <rect
                                x="50"
                                y="370"
                                width="80"
                                height="100"
                                fill="#E2E8F0"
                                stroke="#CBD5E1"
                            />
                            <rect
                                x="170"
                                y="370"
                                width="60"
                                height="100"
                                fill="#E2E8F0"
                                stroke="#CBD5E1"
                            />
                            <rect
                                x="370"
                                y="370"
                                width="60"
                                height="100"
                                fill="#E2E8F0"
                                stroke="#CBD5E1"
                            />
                            <rect
                                x="470"
                                y="370"
                                width="90"
                                height="100"
                                fill="#E2E8F0"
                                stroke="#CBD5E1"
                            />

                            {/* Áreas verdes */}
                            <circle
                                cx="250"
                                cy="250"
                                r="50"
                                fill="#BBDFC8"
                                stroke="#A5D0B9"
                            />
                            <rect
                                x="470"
                                y="250"
                                width="80"
                                height="80"
                                fill="#BBDFC8"
                                stroke="#A5D0B9"
                                rx="5"
                            />

                            {/* Zonas de monitoreo con círculos de calor */}
                            {zonasData.map((zona) => (
                                <g
                                    key={zona.id}
                                    onClick={() => handleZoneClick(zona)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <circle
                                        cx={zona.position.x}
                                        cy={zona.position.y}
                                        r={zona.radius}
                                        fill={zona.color}
                                        opacity="0.6"
                                    />
                                    <circle
                                        cx={zona.position.x}
                                        cy={zona.position.y}
                                        r={zona.radius * 1.5}
                                        fill={zona.color}
                                        opacity="0.3"
                                    />
                                    <circle
                                        cx={zona.position.x}
                                        cy={zona.position.y}
                                        r={zona.radius * 0.5}
                                        fill={zona.color}
                                        opacity="0.9"
                                    />
                                    <text
                                        x={zona.position.x}
                                        y={zona.position.y + 5}
                                        textAnchor="middle"
                                        fill="#FFFFFF"
                                        fontWeight="bold"
                                        fontSize="14"
                                    >
                                        {zona.id}
                                    </text>
                                </g>
                            ))}

                            {/* Leyenda */}
                            <text x="20" y="480" fontSize="12" fill="#64748B">
                                Fuente: AI Mobility Prediction System
                            </text>
                        </svg>

                        {/* Leyenda flotante */}
                        <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md border border-gray-200">
                            <h4 className="text-sm font-semibold mb-2 text-gray-700">
                                Leyenda
                            </h4>
                            {zonasData.map((zona) => (
                                <div
                                    key={zona.id}
                                    className="flex items-center mb-1 text-sm"
                                >
                                    <div
                                        className="w-3 h-3 rounded-full mr-2"
                                        style={{ backgroundColor: zona.color }}
                                    ></div>
                                    <span>
                                        Zona {zona.id}: {zona.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Panel de estadísticas */}
                <div className="lg:w-1/3 h-[563px]">
                    {selectedZone ? (
                        <div className="bg-white border rounded-lg shadow-sm p-6 h-full">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">
                                    Zona {selectedZone.id}: {selectedZone.name}
                                </h2>
                                <button
                                    className="text-gray-400 hover:text-gray-600"
                                    onClick={() => setSelectedZone(null)}
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="my-6 border-b pb-6">
                                <div className="flex items-baseline">
                                    <span className="text-5xl font-bold">
                                        {selectedZone.visitors.toLocaleString()}
                                    </span>
                                    <span className="ml-2 text-gray-600">
                                        visitantes
                                    </span>
                                    <span className="ml-1 text-sm text-gray-500">
                                        ahora
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Users
                                        size={18}
                                        className="text-gray-400 mr-2"
                                    />
                                    <div className="flex justify-between w-full">
                                        <span className="text-gray-600">
                                            Pico de visitantes:
                                        </span>
                                        <span className="font-semibold">
                                            {selectedZone.peak.toLocaleString()}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Clock
                                        size={18}
                                        className="text-gray-400 mr-2"
                                    />
                                    <div className="flex justify-between w-full">
                                        <span className="text-gray-600">
                                            Tiempo de estancia:
                                        </span>
                                        <span className="font-semibold">
                                            {selectedZone.dwellTime} min
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <ArrowRight
                                        size={18}
                                        className="text-gray-400 mr-2"
                                    />
                                    <div className="flex justify-between w-full">
                                        <span className="text-gray-600">
                                            Flujo de entrada:
                                        </span>
                                        <span className="font-semibold">
                                            {selectedZone.entering} /h
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t">
                                <h3 className="text-sm font-medium text-gray-700 mb-3">
                                    Distribución por horas
                                </h3>
                                <div className="h-40">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <LineChart data={trendData}>
                                            <XAxis
                                                dataKey="time"
                                                tick={{ fontSize: 10 }}
                                            />
                                            <YAxis tick={{ fontSize: 10 }} />
                                            <Tooltip />
                                            <Line
                                                type="monotone"
                                                dataKey={`zone${selectedZone.id}`}
                                                stroke={selectedZone.color}
                                                strokeWidth={2}
                                                dot={false}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white border rounded-lg shadow-sm p-6 h-full">
                            <h2 className="text-xl font-semibold mb-4">
                                Resumen de Actividad
                            </h2>

                            <div className="space-y-4">
                                {zonasData.map((zona) => (
                                    <div
                                        key={zona.id}
                                        className="p-4 border rounded-lg flex items-center cursor-pointer hover:bg-gray-50"
                                        onClick={() => handleZoneClick(zona)}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                                            style={{
                                                backgroundColor: zona.color,
                                            }}
                                        >
                                            <span className="text-white font-bold">
                                                {zona.id}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium">
                                                {zona.name}
                                            </h3>
                                            <div className="flex justify-between mt-1">
                                                <span className="text-sm text-gray-500">
                                                    {zona.visitors.toLocaleString()}{' '}
                                                    visitantes
                                                </span>
                                                <span
                                                    className="text-sm font-medium"
                                                    style={{
                                                        color: zona.color,
                                                    }}
                                                >
                                                    {Math.round(
                                                        (zona.visitors /
                                                            zona.peak) *
                                                            100
                                                    )}
                                                    % ocupación
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-500">
                                    Haga clic en una zona para ver más detalles
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default function MobilityDashboard() {
    const [selectedZone, setSelectedZone] = useState<Zona | null>(null);

    // Datos de las zonas

    // Función para mostrar detalles de zona al seleccionarla
    const handleZoneClick = (zone: Zona) => {
        setSelectedZone(
            selectedZone && selectedZone.id === zone.id ? null : zone
        );
    };

    const links = [
        { label: 'Overview', path: '/app2' },
        { label: 'Insights', path: '/app2/insights' },
        { label: 'Reports', path: '/app2/reports' },
    ];

    return (
        <div>
            {/* Header con logo y navegación */}
            <Header links={links}></Header>
            <div className="px-8 py-4">
                <Body
                    zonasData={zonasData}
                    trendData={trendData}
                    selectedZone={selectedZone}
                    setSelectedZone={setSelectedZone}
                    handleZoneClick={handleZoneClick}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {zonasData.map((zona) => (
                                    <div
                                        key={zona.id}
                                        className="bg-white border rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                                        onClick={() => handleZoneClick(zona)}
                                    >
                                        <div className="flex items-center mb-2">
                                            <div
                                                className="w-6 h-6 rounded-full mr-2"
                                                style={{
                                                    backgroundColor: zona.color,
                                                }}
                                            ></div>
                                            <h3 className="font-medium">
                                                Zona {zona.id}
                                            </h3>
                                        </div>
                                        <div className="flex items-baseline">
                                            <span className="text-3xl font-bold">
                                                {zona.visitors.toLocaleString()}
                                            </span>
                                            <span className="ml-2 text-sm text-gray-500">
                                                visitantes ahora
                                            </span>
                                        </div>
                                        <div className="mt-2 text-sm text-gray-600">
                                            Pico: {zona.peak.toLocaleString()} |{' '}
                                            {zona.dwellTime} min |{' '}
                                            {zona.entering}/h
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    />
                    <Route
                        path="insights"
                        element={
                            <div className="mb-6">
                                <div className="bg-white border rounded-lg p-6 shadow-sm">
                                    <h2 className="text-lg font-semibold mb-4">
                                        Tendencia de Visitantes por Zona
                                    </h2>
                                    <div className="h-64">
                                        <ResponsiveContainer
                                            width="100%"
                                            height="100%"
                                        >
                                            <LineChart data={trendData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="time" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Line
                                                    type="monotone"
                                                    dataKey="zone1"
                                                    name="Zona 1"
                                                    stroke="#FF9966"
                                                    strokeWidth={2}
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="zone2"
                                                    name="Zona 2"
                                                    stroke="#6699FF"
                                                    strokeWidth={2}
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="zone3"
                                                    name="Zona 3"
                                                    stroke="#9966FF"
                                                    strokeWidth={2}
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="zone4"
                                                    name="Zona 4"
                                                    stroke="#66D9C8"
                                                    strokeWidth={2}
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="reports"
                        element={
                            <div className="mb-6">
                                <div className="bg-white border rounded-lg p-6 shadow-sm">
                                    <h2 className="text-lg font-semibold mb-4">
                                        Informes de Ocupación
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead>
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Zona
                                                    </th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Ubicación
                                                    </th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Ocupación Actual
                                                    </th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Ocupación Máxima
                                                    </th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Tiempo de Estancia
                                                    </th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Flujo Horario
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {zonasData.map((zona) => (
                                                    <tr
                                                        key={zona.id}
                                                        className="hover:bg-gray-50 cursor-pointer"
                                                        onClick={() =>
                                                            handleZoneClick(
                                                                zona
                                                            )
                                                        }
                                                    >
                                                        <td className="px-4 py-3 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div
                                                                    className="w-3 h-3 rounded-full mr-2"
                                                                    style={{
                                                                        backgroundColor:
                                                                            zona.color,
                                                                    }}
                                                                ></div>
                                                                <span className="font-medium text-gray-900">
                                                                    Zona{' '}
                                                                    {zona.id}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 whitespace-nowrap">
                                                            {zona.name}
                                                        </td>
                                                        <td className="px-4 py-3 whitespace-nowrap">
                                                            {zona.visitors.toLocaleString()}{' '}
                                                            personas
                                                        </td>
                                                        <td className="px-4 py-3 whitespace-nowrap">
                                                            {zona.peak.toLocaleString()}{' '}
                                                            personas
                                                        </td>
                                                        <td className="px-4 py-3 whitespace-nowrap">
                                                            {zona.dwellTime}{' '}
                                                            minutos
                                                        </td>
                                                        <td className="px-4 py-3 whitespace-nowrap">
                                                            {zona.entering}{' '}
                                                            personas/hora
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </Routes>
            </div>
            <Footer title="AI Mobility Prediction Platform" />
        </div>
    );
}
