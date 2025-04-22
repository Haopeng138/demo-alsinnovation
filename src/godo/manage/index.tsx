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
    PieChart,
    Pie,
    Cell,
} from 'recharts';
import {
    TrendingUp,
    Search,
    Radio,
    BarChart2,
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
    Mic,
    Headphones,
    MessageCircle,
    Users,
    PieChart as PieChartIcon,
    List,
    MessageSquare,
    ThumbsUp,
    ThumbsDown,
} from 'lucide-react';
import Header from '@/components/header';
import { Route, Routes } from 'react-router';
import IADashboard from './ia';

// Datos simulados de medios
const medios = [
    {
        id: 1,
        nombre: 'RAC1',
        tipo: 'Radio',
        actualizado: '4 min atrás',
        temaActual: 'Política',
        sentimiento: 'Neutral',
        tendencia: 'up',
    },
    {
        id: 2,
        nombre: 'SER',
        tipo: 'Radio',
        actualizado: '2 min atrás',
        temaActual: 'Economía',
        sentimiento: 'Negativo',
        tendencia: 'down',
    },
    {
        id: 3,
        nombre: 'COPE',
        tipo: 'Radio',
        actualizado: '7 min atrás',
        temaActual: 'Deportes',
        sentimiento: 'Positivo',
        tendencia: 'up',
    },
    {
        id: 4,
        nombre: 'Catalunya Ràdio',
        tipo: 'Radio',
        actualizado: '5 min atrás',
        temaActual: 'Internacional',
        sentimiento: 'Neutral',
        tendencia: 'up',
    },
    {
        id: 5,
        nombre: 'Onda Cero',
        tipo: 'Radio',
        actualizado: '10 min atrás',
        temaActual: 'Sociedad',
        sentimiento: 'Negativo',
        tendencia: 'down',
    },
];

const medioSeleccionadoData = {
    nombre: 'RAC1',
    tipo: 'Radio',
    programa: 'El Món a RAC1',
    horario: '06:00 - 12:00',
    presentador: 'Jordi Basté',
    descripcion:
        'Programa matinal de información general con entrevistas, tertulias y reportajes',
    transcripcion: {
        actual: `...el presidente ha anunciado esta mañana nuevas medidas económicas que entrarán en vigor a partir del próximo mes. Según ha explicado, estas medidas buscan paliar los efectos de la inflación en las familias más vulnerables. En otros temas, el FC Barcelona prepara su próximo partido de Champions mientras continúa la polémica por las declaraciones del entrenador...`,
        hora: '08:47',
    },
    analisis: {
        distribucionTemas: [
            { nombre: 'Política', valor: 45 },
            { nombre: 'Economía', valor: 25 },
            { nombre: 'Deportes', valor: 20 },
            { nombre: 'Internacional', valor: 5 },
            { nombre: 'Sociedad', valor: 5 },
        ],
        evolucionTemporal: [
            {
                hora: '06:00',
                politica: 30,
                economia: 40,
                deportes: 10,
                internacional: 15,
                sociedad: 5,
            },
            {
                hora: '07:00',
                politica: 35,
                economia: 35,
                deportes: 15,
                internacional: 10,
                sociedad: 5,
            },
            {
                hora: '08:00',
                politica: 45,
                economia: 25,
                deportes: 20,
                internacional: 5,
                sociedad: 5,
            },
            {
                hora: '09:00',
                politica: 40,
                economia: 20,
                deportes: 25,
                internacional: 5,
                sociedad: 10,
            },
            {
                hora: '10:00',
                politica: 35,
                economia: 30,
                deportes: 20,
                internacional: 5,
                sociedad: 10,
            },
            {
                hora: '11:00',
                politica: 30,
                economia: 30,
                deportes: 25,
                internacional: 5,
                sociedad: 10,
            },
        ],
        sentimiento: [
            { tema: 'Gobierno', positivo: 15, neutral: 55, negativo: 30 },
            { tema: 'Oposición', positivo: 20, neutral: 50, negativo: 30 },
            { tema: 'FC Barcelona', positivo: 60, neutral: 30, negativo: 10 },
            { tema: 'Economía', positivo: 10, neutral: 40, negativo: 50 },
        ],
        personajesMencionados: [
            { nombre: 'Presidente del Gobierno', menciones: 24 },
            { nombre: 'Líder Oposición', menciones: 18 },
            { nombre: 'Entrenador Barça', menciones: 15 },
            { nombre: 'Ministro Economía', menciones: 12 },
            { nombre: 'Alcalde Barcelona', menciones: 9 },
        ],
        comparativaCompetencia: [
            {
                medio: 'RAC1',
                politica: 45,
                economia: 25,
                deportes: 20,
                internacional: 5,
                sociedad: 5,
            },
            {
                medio: 'SER',
                politica: 40,
                economia: 30,
                deportes: 10,
                internacional: 15,
                sociedad: 5,
            },
            {
                medio: 'COPE',
                politica: 30,
                economia: 20,
                deportes: 40,
                internacional: 5,
                sociedad: 5,
            },
            {
                medio: 'Catalunya Ràdio',
                politica: 35,
                economia: 25,
                deportes: 15,
                internacional: 20,
                sociedad: 5,
            },
            {
                medio: 'Onda Cero',
                politica: 40,
                economia: 30,
                deportes: 15,
                internacional: 5,
                sociedad: 10,
            },
        ],
        palabrasClave: [
            { palabra: 'inflación', frecuencia: 27 },
            { palabra: 'crisis', frecuencia: 23 },
            { palabra: 'gobierno', frecuencia: 21 },
            { palabra: 'subida', frecuencia: 18 },
            { palabra: 'Barça', frecuencia: 16 },
            { palabra: 'Champions', frecuencia: 14 },
            { palabra: 'medidas', frecuencia: 13 },
            { palabra: 'reforma', frecuencia: 12 },
        ],
    },
    predicciones: {
        proximosTemas: [
            { tema: 'Debate parlamentario', probabilidad: 85 },
            { tema: 'Previa partido Champions', probabilidad: 75 },
            { tema: 'Datos de inflación', probabilidad: 65 },
            { tema: 'Crisis internacional', probabilidad: 45 },
        ],
    },
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function GodoObservatorioCompetitivoDashboard() {
    const [selectedMedio] = useState(medioSeleccionadoData);

    function Dashboard() {
        return (
            <div className="mx-auto px-8 py-4">
                <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center mb-4 md:mb-0">
                            <h2 className="text-xl font-bold text-gray-800 mr-4">
                                Observatorio Competitivo de Contenidos en Tiempo
                                Real
                            </h2>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                Powered by IA
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
                                    placeholder="Buscar medio o tema..."
                                />
                            </div>
                            <div className="flex space-x-2">
                                <button className="flex items-center justify-center px-3 py-2 bg-blue-50 text-blue-700 rounded-md border border-blue-200">
                                    <Filter size={16} className="mr-2" />
                                    <span>Filtros</span>
                                    <ChevronDown size={16} className="ml-2" />
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

                    {/* Lista de medios monitorizados */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 table-fixed">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Medio
                                    </th>
                                    <th
                                        scope="col"
                                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Tipo
                                    </th>
                                    <th
                                        scope="col"
                                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Última actualización
                                    </th>
                                    <th
                                        scope="col"
                                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Tema actual
                                    </th>
                                    <th
                                        scope="col"
                                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Sentimiento
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
                                {medios.map((medio) => (
                                    <tr
                                        key={medio.id}
                                        className={
                                            medio.nombre ===
                                            selectedMedio.nombre
                                                ? 'bg-blue-50'
                                                : 'hover:bg-gray-50'
                                        }
                                    >
                                        <td className="p-4 whitespace-nowrap">
                                            <div className="font-medium text-gray-900">
                                                {medio.nombre}
                                            </div>
                                        </td>
                                        <td className="p-4 whitespace-nowrap text-sm text-gray-500">
                                            {medio.tipo}
                                        </td>
                                        <td className="p-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {medio.actualizado}
                                            </div>
                                        </td>
                                        <td className="p-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                {medio.temaActual}
                                            </span>
                                        </td>
                                        <td className="p-4 whitespace-nowrap">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    medio.sentimiento ===
                                                    'Positivo'
                                                        ? 'bg-green-100 text-green-800'
                                                        : medio.sentimiento ===
                                                            'Neutral'
                                                          ? 'bg-yellow-100 text-yellow-800'
                                                          : 'bg-red-100 text-red-800'
                                                }`}
                                            >
                                                {medio.sentimiento}
                                            </span>
                                        </td>
                                        <td className="p-4 whitespace-nowrap text-sm">
                                            {medio.tendencia === 'up' ? (
                                                <div className="flex items-center text-green-600">
                                                    <ArrowUp
                                                        size={16}
                                                        className="mr-1"
                                                    />
                                                    <span>En alza</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center text-red-600">
                                                    <ArrowDown
                                                        size={16}
                                                        className="mr-1"
                                                    />
                                                    <span>En baja</span>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Análisis detallado del medio seleccionado */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                            <div className="flex items-center">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {selectedMedio.nombre}
                                </h3>
                                <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    {selectedMedio.tipo}
                                </span>
                                <span className="ml-2 text-sm text-gray-500">
                                    Programa: {selectedMedio.programa}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                                {selectedMedio.descripcion}
                            </p>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                            <button className="flex items-center justify-center px-4 py-2 bg-bland-dark-blue text-white rounded-md hover:bg-bland-blue mr-2">
                                <Maximize2 size={16} className="mr-2" />
                                Ver análisis completo
                            </button>
                        </div>
                    </div>

                    {/* Transcripción en tiempo real */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                                <Mic size={18} className="text-red-600 mr-2" />
                                <h4 className="text-md font-semibold text-gray-800">
                                    Transcripción en Tiempo Real
                                </h4>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <Clock size={14} className="mr-1" />
                                <span>
                                    Hora: {selectedMedio.transcripcion.hora}
                                </span>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-3 text-sm text-gray-700">
                            {selectedMedio.transcripcion.actual}
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                            <span className="text-xs text-gray-500">
                                Actualizado constantemente con Speech-to-Text
                            </span>
                            <div className="flex space-x-2">
                                <button className="text-xs flex items-center text-bland-dark-blue hover:text-bland-blue">
                                    <Headphones size={14} className="mr-1" />
                                    <span>Escuchar original</span>
                                </button>
                                <button className="text-xs flex items-center text-bland-dark-blue hover:text-bland-blue">
                                    <MessageCircle size={14} className="mr-1" />
                                    <span>Ver transcripción completa</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tarjetas de análisis clave */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">
                                        Tema Principal
                                    </h4>
                                    <div className="flex items-baseline mt-1">
                                        <p className="text-xl font-bold text-gray-800">
                                            Política
                                        </p>
                                        <span className="ml-2 text-xs font-medium text-gray-500">
                                            45% del contenido
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-1">
                                        <ArrowUp
                                            size={14}
                                            className="text-green-500"
                                        />
                                        <span className="text-xs ml-1 text-green-500">
                                            +10% vs hora anterior
                                        </span>
                                    </div>
                                </div>
                                <div className="p-2 rounded-full bg-blue-50">
                                    <Users
                                        size={20}
                                        className="text-blue-600"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">
                                        Sentimiento General
                                    </h4>
                                    <div className="flex items-baseline mt-1">
                                        <p className="text-xl font-bold text-gray-800">
                                            Neutral
                                        </p>
                                        <span className="ml-2 text-xs font-medium text-gray-500">
                                            55% del discurso
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-1">
                                        <span className="text-xs text-yellow-500">
                                            Sin cambios significativos
                                        </span>
                                    </div>
                                </div>
                                <div className="p-2 rounded-full bg-yellow-50">
                                    <MessageSquare
                                        size={20}
                                        className="text-yellow-600"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">
                                        Personaje Más Mencionado
                                    </h4>
                                    <div className="flex items-baseline mt-1">
                                        <p className="text-xl font-bold text-gray-800">
                                            Presidente
                                        </p>
                                        <span className="ml-2 text-xs font-medium text-gray-500">
                                            24 menciones
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-1">
                                        <ArrowUp
                                            size={14}
                                            className="text-green-500"
                                        />
                                        <span className="text-xs ml-1 text-green-500">
                                            +6 vs media diaria
                                        </span>
                                    </div>
                                </div>
                                <div className="p-2 rounded-full bg-green-50">
                                    <Award
                                        size={20}
                                        className="text-green-600"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">
                                        Próximo Tema Previsto
                                    </h4>
                                    <div className="flex items-baseline mt-1">
                                        <p className="text-xl font-bold text-gray-800">
                                            Debate Parl.
                                        </p>
                                        <span className="ml-2 text-xs font-medium text-gray-500">
                                            85% probabilidad
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-1">
                                        <Clock
                                            size={14}
                                            className="text-gray-400"
                                        />
                                        <span className="text-xs ml-1 text-gray-500">
                                            Estimado: 09:15
                                        </span>
                                    </div>
                                </div>
                                <div className="p-2 rounded-full bg-purple-50">
                                    <Calendar
                                        size={20}
                                        className="text-purple-600"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gráficos de análisis principales */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Gráfico de distribución de temas */}
                        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                            <h4 className="text-md font-semibold mb-4 flex items-center">
                                <PieChartIcon
                                    size={18}
                                    className="text-blue-600 mr-2"
                                />
                                Distribución de Temas del Programa
                            </h4>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={
                                                selectedMedio.analisis
                                                    .distribucionTemas
                                            }
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="valor"
                                            nameKey="nombre"
                                            label={({ nombre, percent }) =>
                                                `${nombre}: ${(percent * 100).toFixed(0)}%`
                                            }
                                        >
                                            {selectedMedio.analisis.distribucionTemas.map(
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
                                                'Porcentaje',
                                            ]}
                                        />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="mt-2 flex items-center justify-center">
                                <span className="text-xs text-gray-600">
                                    Análisis basado en transcripción completa
                                    del programa
                                </span>
                            </div>
                        </div>

                        {/* Gráfico de evolución temporal de temas */}
                        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                            <h4 className="text-md font-semibold mb-4 flex items-center">
                                <BarChart2
                                    size={18}
                                    className="text-indigo-600 mr-2"
                                />
                                Evolución Temporal de Temas
                            </h4>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={
                                            selectedMedio.analisis
                                                .evolucionTemporal
                                        }
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="hora" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar
                                            dataKey="politica"
                                            name="Política"
                                            fill="#0088FE"
                                            stackId="a"
                                        />
                                        <Bar
                                            dataKey="economia"
                                            name="Economía"
                                            fill="#00C49F"
                                            stackId="a"
                                        />
                                        <Bar
                                            dataKey="deportes"
                                            name="Deportes"
                                            fill="#FFBB28"
                                            stackId="a"
                                        />
                                        <Bar
                                            dataKey="internacional"
                                            name="Internacional"
                                            fill="#FF8042"
                                            stackId="a"
                                        />
                                        <Bar
                                            dataKey="sociedad"
                                            name="Sociedad"
                                            fill="#8884d8"
                                            stackId="a"
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="mt-2 flex items-center justify-center">
                                <span className="text-xs text-gray-600">
                                    Evolución temática desde el inicio del
                                    programa (06:00)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Fila de gráficos adicionales */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Análisis de sentimiento por tema */}
                        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                            <h4 className="text-md font-semibold mb-4 flex items-center">
                                <ThumbsUp
                                    size={18}
                                    className="text-green-600 mr-2"
                                />
                                Análisis de Sentimiento por Tema
                            </h4>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={
                                            selectedMedio.analisis.sentimiento
                                        }
                                        layout="vertical"
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 60,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type="number" />
                                        <YAxis dataKey="tema" type="category" />
                                        <Tooltip />
                                        <Legend />
                                        <Bar
                                            dataKey="positivo"
                                            name="Positivo"
                                            fill="#4ade80"
                                            stackId="a"
                                        />
                                        <Bar
                                            dataKey="neutral"
                                            name="Neutral"
                                            fill="#facc15"
                                            stackId="a"
                                        />
                                        <Bar
                                            dataKey="negativo"
                                            name="Negativo"
                                            fill="#f87171"
                                            stackId="a"
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="mt-2 text-center">
                                <span className="text-xs text-gray-600">
                                    Basado en análisis de tonalidad y contexto
                                </span>
                            </div>
                        </div>
                        {/* Comparativa con la competencia */}
                        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                            <h4 className="text-md font-semibold mb-4 flex items-center">
                                <TrendingUp
                                    size={18}
                                    className="text-orange-600 mr-2"
                                />
                                Comparativa de Temas con la Competencia
                            </h4>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart
                                        outerRadius={90}
                                        data={
                                            selectedMedio.analisis
                                                .comparativaCompetencia
                                        }
                                    >
                                        <PolarGrid />
                                        <PolarAngleAxis dataKey="medio" />
                                        <PolarRadiusAxis
                                            angle={30}
                                            domain={[0, 50]}
                                        />
                                        <Radar
                                            name="Política"
                                            dataKey="politica"
                                            stroke="#0088FE"
                                            fill="#0088FE"
                                            fillOpacity={0.6}
                                        />
                                        <Radar
                                            name="Economía"
                                            dataKey="economia"
                                            stroke="#00C49F"
                                            fill="#00C49F"
                                            fillOpacity={0.6}
                                        />
                                        <Radar
                                            name="Deportes"
                                            dataKey="deportes"
                                            stroke="#FFBB28"
                                            fill="#FFBB28"
                                            fillOpacity={0.6}
                                        />
                                        <Radar
                                            name="Internacional"
                                            dataKey="internacional"
                                            stroke="#FF8042"
                                            fill="#FF8042"
                                            fillOpacity={0.6}
                                        />
                                        <Radar
                                            name="Sociedad"
                                            dataKey="sociedad"
                                            stroke="#8884d8"
                                            fill="#8884d8"
                                            fillOpacity={0.6}
                                        />
                                        <Legend />
                                        <Tooltip />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="mt-2 flex justify-center">
                                <span className="text-xs text-gray-600">
                                    Comparativa de distribución temática entre
                                    los principales medios
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Predicciones de próximos temas */}
                    <div className="mt-6 bg-gray-50 rounded-lg p-4 shadow-sm">
                        <h4 className="text-md font-semibold mb-4 flex items-center">
                            <Zap size={18} className="text-yellow-500 mr-2" />
                            Predicción de Próximos Temas
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <div className="h-52">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <ComposedChart
                                            data={
                                                selectedMedio.predicciones
                                                    .proximosTemas
                                            }
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="tema" />
                                            <YAxis domain={[0, 100]} />
                                            <Tooltip />
                                            <Legend />
                                            <Bar
                                                dataKey="probabilidad"
                                                name="Probabilidad (%)"
                                                fill="#8884d8"
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="probabilidad"
                                                stroke="#ff7300"
                                                strokeWidth={2}
                                            />
                                        </ComposedChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <h5 className="font-medium text-gray-800 mb-2 flex items-center">
                                        <Target
                                            size={16}
                                            className="text-purple-600 mr-2"
                                        />
                                        Análisis Predictivo
                                    </h5>
                                    <p className="text-sm text-gray-600">
                                        El sistema predice con un{' '}
                                        <span className="font-bold">
                                            85% de probabilidad
                                        </span>{' '}
                                        que en los próximos 15 minutos el
                                        programa tratará el tema del debate
                                        parlamentario, según los patrones
                                        históricos, la agenda del día y las
                                        menciones previas.
                                    </p>
                                    <div className="mt-3 pt-3 border-t border-gray-100">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-500">
                                                Precisión histórica del modelo
                                            </span>
                                            <span className="font-medium text-green-600">
                                                92% de acierto
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                <Route path="/" element={<Dashboard />} />
                <Route path="ia" element={<IADashboard />} />
            </Routes>
            {/* Panel de control y filtros */}
        </div>
    );
}
