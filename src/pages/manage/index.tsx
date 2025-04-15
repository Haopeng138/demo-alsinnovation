import { useState } from 'react';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ComposedChart,
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from 'recharts';
import {
    TrendingUp,
    Search,
    Package,
    DollarSign,
    Calendar,
    ArrowUp,
    ArrowDown,
    Download,
    Filter,
    ChevronDown,
    RefreshCw,
    Maximize2,
    Clock,
    Zap,
    Award,
    Target,
    ShoppingCart,
} from 'lucide-react';
import Header from '@/components/header';
import { Route, Routes } from 'react-router';
import IADashboard from './ia';

// Datos simulados
const productos = [
    {
        id: 1,
        nombre: 'Producto A',
        categoria: 'Electrónica',
        stock: 234,
        demanda: 'Alta',
        precio: 299.99,
        tendencia: 'up',
    },
    {
        id: 2,
        nombre: 'Producto B',
        categoria: 'Hogar',
        stock: 156,
        demanda: 'Media',
        precio: 149.99,
        tendencia: 'up',
    },
    {
        id: 3,
        nombre: 'Producto C',
        categoria: 'Alimentación',
        stock: 89,
        demanda: 'Baja',
        precio: 24.99,
        tendencia: 'down',
    },
    {
        id: 4,
        nombre: 'Producto D',
        categoria: 'Electrónica',
        stock: 321,
        demanda: 'Alta',
        precio: 599.99,
        tendencia: 'up',
    },
    {
        id: 5,
        nombre: 'Producto E',
        categoria: 'Moda',
        stock: 178,
        demanda: 'Media',
        precio: 79.99,
        tendencia: 'down',
    },
];

const productoSeleccionadoData = {
    nombre: 'Producto A',
    categoria: 'Electrónica',
    sku: 'ELEC-A-2023',
    descripcion:
        'Dispositivo electrónico de última generación con alta demanda en el mercado',
    precioActual: 299.99,
    costo: 175.5,
    margen: 41.5,
    stock: {
        actual: 234,
        optimo: 280,
        minimo: 50,
    },
    predicciones: {
        demanda: [
            { mes: 'Ene', actual: 120, prediccion: 118 },
            { mes: 'Feb', actual: 140, prediccion: 135 },
            { mes: 'Mar', actual: 160, prediccion: 155 },
            { mes: 'Abr', actual: 190, prediccion: 185 },
            { mes: 'May', actual: 210, prediccion: 215 },
            { mes: 'Jun', actual: 230, prediccion: 240 },
            { mes: 'Jul', actual: 260, prediccion: 270 },
            { mes: 'Ago', actual: null, prediccion: 300 },
            { mes: 'Sep', actual: null, prediccion: 330 },
            { mes: 'Oct', actual: null, prediccion: 370 },
            { mes: 'Nov', actual: null, prediccion: 410 },
            { mes: 'Dic', actual: null, prediccion: 450 },
        ],
        precio: [
            { mes: 'Ene', valor: 279.99 },
            { mes: 'Feb', valor: 279.99 },
            { mes: 'Mar', valor: 299.99 },
            { mes: 'Abr', valor: 299.99 },
            { mes: 'May', valor: 299.99 },
            { mes: 'Jun', valor: 299.99 },
            { mes: 'Jul', valor: 299.99 },
            { mes: 'Ago', valor: 319.99 },
            { mes: 'Sep', valor: 329.99 },
            { mes: 'Oct', valor: 329.99 },
            { mes: 'Nov', valor: 349.99 },
            { mes: 'Dic', valor: 349.99 },
        ],
        estacionalidad: [
            { nombre: 'Lun', valor: 65 },
            { nombre: 'Mar', valor: 70 },
            { nombre: 'Mié', valor: 75 },
            { nombre: 'Jue', valor: 80 },
            { nombre: 'Vie', valor: 95 },
            { nombre: 'Sáb', valor: 100 },
            { nombre: 'Dom', valor: 90 },
        ],
        correlaciones: [
            { x: 10, y: 30, z: 200 },
            { x: 20, y: 50, z: 400 },
            { x: 30, y: 40, z: 300 },
            { x: 40, y: 70, z: 600 },
            { x: 50, y: 90, z: 700 },
            { x: 60, y: 85, z: 650 },
            { x: 70, y: 100, z: 800 },
        ],
        competencia: [
            { nombre: 'Competidor A', precio: 319.99, tendencia: 'estable' },
            { nombre: 'Competidor B', precio: 289.99, tendencia: 'subida' },
            { nombre: 'Competidor C', precio: 329.99, tendencia: 'bajada' },
            { nombre: 'Nosotros', precio: 299.99, tendencia: 'estable' },
        ],
        factoresExternos: [
            { nombre: 'Disponibilidad', valor: 85 },
            { nombre: 'Temporada', valor: 90 },
            { nombre: 'Marketing', valor: 70 },
            { nombre: 'Competencia', valor: 65 },
            { nombre: 'Tendencia', valor: 95 },
        ],
        pronosticos: [
            {
                tipo: 'Demanda mensual',
                actual: 260,
                prediccion: 370,
                cambio: '+42%',
                plazo: '3 meses',
            },
            {
                tipo: 'Precio óptimo',
                actual: 299.99,
                prediccion: 329.99,
                cambio: '+10%',
                plazo: '2 meses',
            },
            {
                tipo: 'Nivel stock',
                actual: 234,
                prediccion: 380,
                cambio: '+62%',
                plazo: 'inmediato',
            },
            {
                tipo: 'Ventas Q4',
                actual: '860 unidades',
                prediccion: '1230 unidades',
                cambio: '+43%',
                plazo: '4 meses',
            },
        ],
    },
};

export default function ProductAnalysisDashboard() {
    const [currentDate] = useState(
        new Date().toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    );

    const [selectedProduct] = useState(productoSeleccionadoData);

    function Dashborad() {
        return (
            <>
                <div className="mx-auto px-8 py-4">
                    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div className="flex items-center mb-4 md:mb-0">
                                <h2 className="text-xl font-bold text-gray-800 mr-4">
                                    Análisis Predictivo Avanzado
                                </h2>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    Inteligencia Artificial
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <Search
                                            size={16}
                                            className="text-gray-500"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2"
                                        placeholder="Buscar producto..."
                                    />
                                </div>
                                <div className="flex space-x-2">
                                    <button className="flex items-center justify-center px-3 py-2 bg-blue-50 text-blue-700 rounded-md border border-blue-200">
                                        <Filter size={16} className="mr-2" />
                                        <span>Filtros</span>
                                        <ChevronDown
                                            size={16}
                                            className="ml-2"
                                        />
                                    </button>
                                    <button className="flex items-center justify-center p-2 bg-gray-100 text-gray-700 rounded-md border border-gray-200">
                                        <RefreshCw size={16} />
                                    </button>
                                    <button className="flex items-center justify-center p-2 bg-gray-100 text-gray-700 rounded-md border border-gray-200">
                                        <Download size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Listado de productos con métricas clave */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Producto
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Categoría
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Stock
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Demanda
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Precio
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Tendencia
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {productos.map((producto) => (
                                        <tr
                                            key={producto.id}
                                            className={
                                                producto.nombre ===
                                                selectedProduct.nombre
                                                    ? 'bg-blue-50'
                                                    : 'hover:bg-gray-50'
                                            }
                                        >
                                            <td className="p-4 whitespace-nowrap">
                                                <div className="font-medium text-gray-900">
                                                    {producto.nombre}
                                                </div>
                                            </td>
                                            <td className="p-4 whitespace-nowrap text-sm text-gray-500">
                                                {producto.categoria}
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {producto.stock} unidades
                                                </div>
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                <span
                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                        producto.demanda ===
                                                        'Alta'
                                                            ? 'bg-green-100 text-green-800'
                                                            : producto.demanda ===
                                                                'Media'
                                                              ? 'bg-yellow-100 text-yellow-800'
                                                              : 'bg-red-100 text-red-800'
                                                    }`}
                                                >
                                                    {producto.demanda}
                                                </span>
                                            </td>
                                            <td className="p-4 whitespace-nowrap text-sm text-gray-900">
                                                ${producto.precio.toFixed(2)}
                                            </td>
                                            <td className="p-4 whitespace-nowrap text-sm">
                                                {producto.tendencia === 'up' ? (
                                                    <div className="flex items-center text-green-600">
                                                        <ArrowUp
                                                            size={16}
                                                            className="mr-1"
                                                        />
                                                        <span>Subiendo</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center text-red-600">
                                                        <ArrowDown
                                                            size={16}
                                                            className="mr-1"
                                                        />
                                                        <span>Bajando</span>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Análisis detallado del producto seleccionado */}
                    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div>
                                <div className="flex items-center">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {selectedProduct.nombre}
                                    </h3>
                                    <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                        {selectedProduct.categoria}
                                    </span>
                                    <span className="ml-2 text-sm text-gray-500">
                                        SKU: {selectedProduct.sku}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">
                                    {selectedProduct.descripcion}
                                </p>
                            </div>
                            <div className="flex items-center mt-4 md:mt-0">
                                <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 mr-2">
                                    <Maximize2 size={16} className="mr-2" />
                                    Ver detalles completos
                                </button>
                            </div>
                        </div>

                        {/* Tarjetas de pronósticos clave */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {selectedProduct.predicciones.pronosticos.map(
                                (pronostico, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-500">
                                                    {pronostico.tipo}
                                                </h4>
                                                <div className="flex items-baseline mt-1">
                                                    <p className="text-xl font-bold text-gray-800">
                                                        {pronostico.prediccion}
                                                    </p>
                                                    <span
                                                        className={`ml-2 text-xs font-medium ${
                                                            pronostico.cambio.includes(
                                                                '+'
                                                            )
                                                                ? 'text-green-600'
                                                                : 'text-red-600'
                                                        }`}
                                                    >
                                                        {pronostico.cambio}
                                                    </span>
                                                </div>
                                                <div className="flex items-center mt-1">
                                                    <Clock
                                                        size={14}
                                                        className="text-gray-400"
                                                    />
                                                    <span className="text-xs ml-1 text-gray-500">
                                                        Plazo:{' '}
                                                        {pronostico.plazo}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-2 rounded-full bg-blue-50">
                                                {index === 0 ? (
                                                    <TrendingUp
                                                        size={20}
                                                        className="text-blue-600"
                                                    />
                                                ) : index === 1 ? (
                                                    <DollarSign
                                                        size={20}
                                                        className="text-green-600"
                                                    />
                                                ) : index === 2 ? (
                                                    <Package
                                                        size={20}
                                                        className="text-purple-600"
                                                    />
                                                ) : (
                                                    <ShoppingCart
                                                        size={20}
                                                        className="text-orange-600"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>

                        {/* Gráficos de análisis predictivo */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            {/* Gráfico de demanda con predicción */}
                            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                                <h4 className="text-md font-semibold mb-4 flex items-center">
                                    <Zap
                                        size={18}
                                        className="text-blue-600 mr-2"
                                    />
                                    Predicción de Demanda Futura
                                </h4>
                                <div className="h-72">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <ComposedChart
                                            data={
                                                selectedProduct.predicciones
                                                    .demanda
                                            }
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
                                            <XAxis dataKey="mes" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Area
                                                type="monotone"
                                                dataKey="prediccion"
                                                fill="rgba(129, 140, 248, 0.2)"
                                                stroke="#6366f1"
                                                name="Demanda Prevista"
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="actual"
                                                stroke="#0891b2"
                                                strokeWidth={2}
                                                dot={{ r: 4 }}
                                                name="Demanda Real"
                                            />
                                        </ComposedChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="inline-block h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
                                        <span className="text-xs text-gray-600">
                                            Confianza predicción: 92%
                                        </span>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        Modelo: IA avanzada con aprendizaje
                                        profundo
                                    </div>
                                </div>
                            </div>

                            {/* Gráfico de precio óptimo */}
                            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                                <h4 className="text-md font-semibold mb-4 flex items-center">
                                    <DollarSign
                                        size={18}
                                        className="text-green-600 mr-2"
                                    />
                                    Evolución y Predicción de Precio Óptimo
                                </h4>
                                <div className="h-72">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <LineChart
                                            data={
                                                selectedProduct.predicciones
                                                    .precio
                                            }
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
                                            <XAxis dataKey="mes" />
                                            <YAxis domain={[260, 360]} />
                                            <Tooltip
                                                formatter={(value) => [
                                                    `$${value}`,
                                                    'Precio',
                                                ]}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="valor"
                                                stroke="#059669"
                                                strokeWidth={2}
                                                dot={{ r: 4 }}
                                                name="Precio Óptimo"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="colorUv"
                                                    x1="0"
                                                    y1="0"
                                                    x2="0"
                                                    y2="1"
                                                >
                                                    <stop
                                                        offset="5%"
                                                        stopColor="#059669"
                                                        stopOpacity={0.8}
                                                    />
                                                    <stop
                                                        offset="95%"
                                                        stopColor="#059669"
                                                        stopOpacity={0}
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <Area
                                                type="monotone"
                                                dataKey="valor"
                                                stroke="none"
                                                fillOpacity={0.3}
                                                fill="url(#colorUv)"
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-xs text-gray-600">
                                            Recomendación: Aumentar precio en
                                            agosto
                                        </span>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        Basado en elasticidad de demanda y
                                        comportamiento competitivo
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fila de gráficos adicionales */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Radar chart de factores externos */}
                            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                                <h4 className="text-md font-semibold mb-4 flex items-center">
                                    <Target
                                        size={18}
                                        className="text-purple-600 mr-2"
                                    />
                                    Factores de Influencia Predictiva
                                </h4>
                                <div className="h-64">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <RadarChart
                                            outerRadius={90}
                                            data={
                                                selectedProduct.predicciones
                                                    .factoresExternos
                                            }
                                        >
                                            <PolarGrid />
                                            <PolarAngleAxis dataKey="nombre" />
                                            <PolarRadiusAxis
                                                domain={[0, 100]}
                                            />
                                            <Radar
                                                name="Impacto"
                                                dataKey="valor"
                                                stroke="#8884d8"
                                                fill="#8884d8"
                                                fillOpacity={0.6}
                                            />
                                            <Tooltip
                                                formatter={(value) => [
                                                    `${value}%`,
                                                    'Impacto',
                                                ]}
                                            />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="mt-2 text-center">
                                    <span className="text-xs text-gray-600">
                                        El factor "Tendencia" es el más
                                        influyente en la predicción
                                    </span>
                                </div>
                            </div>

                            {/* Gráfico de estacionalidad */}
                            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                                <h4 className="text-md font-semibold mb-4 flex items-center">
                                    <Calendar
                                        size={18}
                                        className="text-orange-600 mr-2"
                                    />
                                    Patrón de Estacionalidad Semanal
                                </h4>
                                <div className="h-64">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <BarChart
                                            data={
                                                selectedProduct.predicciones
                                                    .estacionalidad
                                            }
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
                                            <XAxis dataKey="nombre" />
                                            <YAxis />
                                            <Tooltip
                                                formatter={(value) => [
                                                    `${value}%`,
                                                    'Demanda',
                                                ]}
                                            />
                                            <Bar
                                                dataKey="valor"
                                                fill="#f97316"
                                                radius={[4, 4, 0, 0]}
                                                name="Intensidad"
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="mt-2 text-center">
                                    <span className="text-xs text-gray-600">
                                        Recomendación: Optimizar stock para
                                        picos de fin de semana
                                    </span>
                                </div>
                            </div>

                            {/* Comparativa competencia */}
                            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                                <h4 className="text-md font-semibold mb-4 flex items-center">
                                    <Award
                                        size={18}
                                        className="text-indigo-600 mr-2"
                                    />
                                    Análisis Competitivo Predictivo
                                </h4>
                                <div className="h-64 flex flex-col justify-center">
                                    <div className="space-y-4">
                                        {selectedProduct.predicciones.competencia.map(
                                            (comp, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center"
                                                >
                                                    <div className="w-24 text-sm text-gray-600">
                                                        {comp.nombre}
                                                    </div>
                                                    <div className="flex-1 mx-2">
                                                        <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                                                            <div
                                                                className={`h-full ${
                                                                    comp.nombre ===
                                                                    'Nosotros'
                                                                        ? 'bg-blue-500'
                                                                        : comp.tendencia ===
                                                                            'subida'
                                                                          ? 'bg-green-500'
                                                                          : comp.tendencia ===
                                                                              'bajada'
                                                                            ? 'bg-red-500'
                                                                            : 'bg-gray-500'
                                                                }`}
                                                                style={{
                                                                    width: `${(comp.precio / 350) * 100}%`,
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className="w-20 text-right text-sm font-medium">
                                                        ${comp.precio}
                                                    </div>
                                                    <div className="w-16 text-right">
                                                        {comp.tendencia ===
                                                        'subida' ? (
                                                            <ArrowUp
                                                                size={16}
                                                                className="ml-auto text-green-500"
                                                            />
                                                        ) : comp.tendencia ===
                                                          'bajada' ? (
                                                            <ArrowDown
                                                                size={16}
                                                                className="ml-auto text-red-500"
                                                            />
                                                        ) : (
                                                            <div className="h-px w-4 bg-gray-400 ml-auto mt-2"></div>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="mt-2 text-center">
                                    <span className="text-xs text-gray-600">
                                        Predicción: Competidor B se acerca a
                                        nuestro precio
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Panel de recomendaciones basadas en IA */}
                        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mt-6">
                            <h4 className="text-md font-semibold mb-3 flex items-center text-indigo-800">
                                <Zap
                                    size={18}
                                    className="text-indigo-600 mr-2"
                                />
                                Recomendaciones Estratégicas basadas en IA
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                    <h5 className="text-sm font-medium text-indigo-700 mb-2">
                                        Gestión de Inventario
                                    </h5>
                                    <p className="text-sm text-gray-600">
                                        Aumentar stock en <strong>62%</strong>{' '}
                                        antes de agosto para satisfacer
                                        incremento de demanda previsto.
                                    </p>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs font-medium text-green-600">
                                            Impacto financiero: Alto
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            Confianza: 92%
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                    <h5 className="text-sm font-medium text-indigo-700 mb-2">
                                        Estrategia de Precios
                                    </h5>
                                    <p className="text-sm text-gray-600">
                                        Incrementar precio a{' '}
                                        <strong>$329.99</strong> en agosto
                                        aprovechando la alta demanda estacional.
                                    </p>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs font-medium text-green-600">
                                            Margen adicional: +15%
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            Confianza: 87%
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                    <h5 className="text-sm font-medium text-indigo-700 mb-2">
                                        Optimización Logística
                                    </h5>
                                    <p className="text-sm text-gray-600">
                                        Priorizar disponibilidad en fines de
                                        semana cuando la demanda aumenta un{' '}
                                        <strong>35%</strong>.
                                    </p>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs font-medium text-green-600">
                                            Reducción roturas: -45%
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            Confianza: 89%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const links = [
        { label: 'Dashboard', path: '/app3' },
        { label: 'IA', path: '/app3/ia' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header principal fijo */}

            <Header links={links}></Header>
            <Routes>
                <Route path="/" element={<Dashborad></Dashborad>} />
                <Route path="ia" element={<IADashboard></IADashboard>} />
            </Routes>

            {/* Panel de control y filtros */}
        </div>
    );
}
