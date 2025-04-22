import { useState } from 'react';
import { SelectDropdown } from '../forestcast';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

// Primero creamos los datos para este nuevo componente

interface RegionalClimateData {
    region: string;
    temp: number;
    humidity: number;
    precipitation: number;
    productionRisk: number;
    logisticsRisk: number;
    marketImpact: number;
}
interface ForecastScenario {
    scenario: string;
    production: number;
    logistics: number;
    sales: number;
    carbonReduction: number;
}

const regionalClimateData: RegionalClimateData[] = [
    {
        region: 'Norte',
        temp: 24.5,
        humidity: 65,
        precipitation: 82,
        productionRisk: 12,
        logisticsRisk: 25,
        marketImpact: 8,
    },
    {
        region: 'Centro',
        temp: 28.2,
        humidity: 55,
        precipitation: 43,
        productionRisk: 18,
        logisticsRisk: 10,
        marketImpact: 15,
    },
    {
        region: 'Sur',
        temp: 26.8,
        humidity: 75,
        precipitation: 120,
        productionRisk: 32,
        logisticsRisk: 28,
        marketImpact: 22,
    },
    {
        region: 'Este',
        temp: 22.6,
        humidity: 62,
        precipitation: 95,
        productionRisk: 15,
        logisticsRisk: 18,
        marketImpact: 13,
    },
    {
        region: 'Oeste',
        temp: 27.9,
        humidity: 45,
        precipitation: 30,
        productionRisk: 27,
        logisticsRisk: 12,
        marketImpact: 19,
    },
];

const forecastScenarios: ForecastScenario[] = [
    {
        scenario: 'Optimista',
        production: +5,
        logistics: +3,
        sales: +8,
        carbonReduction: 12,
    },
    {
        scenario: 'Base',
        production: 0,
        logistics: 0,
        sales: +1,
        carbonReduction: 7,
    },
    {
        scenario: 'Pesimista',
        production: -7,
        logistics: -5,
        sales: -3,
        carbonReduction: 2,
    },
];

export function RegionalClimateAnalysis() {
    const [selectedRegion, setSelectedRegion] = useState('Norte');
    const [selectedScenario, setSelectedScenario] = useState('Base');
    // Filtrar los datos para la región seleccionada
    const regionData = regionalClimateData.find(
        (r) => r.region === selectedRegion
    );
    const scenarioData = forecastScenarios.find(
        (s) => s.scenario === selectedScenario
    );
    // Calcular el índice de riesgo general (promedio ponderado)
    const overallRiskIndex: number = regionData
        ? Number(
              (
                  regionData.productionRisk * 0.5 +
                  regionData.logisticsRisk * 0.3 +
                  regionData.marketImpact * 0.2
              ).toFixed(2)
          )
        : 0;
    // Determinar la clase de color basada en el índice de riesgo
    const getRiskColorClass = (value: number) => {
        if (value < 15) return 'text-green-600';
        if (value < 25) return 'text-yellow-600';
        return 'text-red-600';
    };
    return (
        <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-bland-dark-blue text-lg">
                    Análisis Climático Regional e Impacto en Negocios
                </h2>
                <div className="flex space-x-2">
                    <SelectDropdown
                        options={regionalClimateData.map((r) => r.region)}
                        value={selectedRegion}
                        onChange={setSelectedRegion}
                    />
                    <SelectDropdown
                        options={forecastScenarios.map((s) => s.scenario)}
                        value={selectedScenario}
                        onChange={setSelectedScenario}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                    <h3 className="text-sm font-medium  mb-2">
                        Condiciones Climáticas Actuales
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                            <div className="text-xl font-bold text-bland-blue">
                                {regionData?.temp}°C
                            </div>
                            <div className="text-xs text-bland-blue">
                                Temperatura
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-bland-blue">
                                {regionData?.humidity}%
                            </div>
                            <div className="text-xs text-bland-blue">
                                Humedad
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-bland-blue">
                                {regionData?.precipitation}mm
                            </div>
                            <div className="text-xs text-bland-blue">
                                Precipitación
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                        Índice de Riesgo
                    </h3>
                    <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold">
                            <span
                                className={getRiskColorClass(overallRiskIndex)}
                            >
                                {overallRiskIndex}
                            </span>
                            <span className="text-xs text-gray-500 ml-1">
                                /100
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <span className="text-xs">
                                    Producción: {regionData?.productionRisk}%
                                </span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <span className="text-xs">
                                    Logística: {regionData?.logisticsRisk}%
                                </span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <span className="text-xs">
                                    Mercado: {regionData?.marketImpact}%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                    <h3 className="text-sm font-medium text-green-800 mb-2">
                        Impacto Proyectado ({selectedScenario})
                    </h3>
                    {scenarioData && (
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-xs">Producción:</span>
                                <span
                                    className={`text-sm font-medium ${scenarioData.production >= 0 ? 'text-green-600' : 'text-red-600'}`}
                                >
                                    {scenarioData?.production > 0 ? '+' : ''}
                                    {scenarioData?.production}%
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs">Logística:</span>
                                <span
                                    className={`text-sm font-medium ${scenarioData?.logistics >= 0 ? 'text-green-600' : 'text-red-600'}`}
                                >
                                    {scenarioData?.logistics > 0 ? '+' : ''}
                                    {scenarioData?.logistics}%
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs">Ventas:</span>
                                <span
                                    className={`text-sm font-medium ${scenarioData?.sales >= 0 ? 'text-green-600' : 'text-red-600'}`}
                                >
                                    {scenarioData?.sales > 0 ? '+' : ''}
                                    {scenarioData?.sales}%
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            strokeOpacity={0.1}
                        />
                        <XAxis
                            dataKey="month"
                            type="category"
                            allowDuplicatedCategory={false}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            domain={[0, 100]}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            domain={[-10, 40]}
                        />
                        <Tooltip />
                        <Legend />
                        <Line
                            yAxisId="left"
                            type="monotone"
                            data={[
                                { month: 'May', value: 85 },
                                { month: 'Jun', value: 87 },
                                { month: 'Jul', value: 78 },
                                { month: 'Aug', value: 65 },
                                { month: 'Sep', value: 72 },
                                { month: 'Oct', value: 80 },
                            ]}
                            dataKey="value"
                            name="Eficiencia Operativa"
                            stroke="#0088FE"
                            strokeWidth={2}
                        />
                        <Line
                            yAxisId="right"
                            type="monotone"
                            data={[
                                { month: 'May', value: 23 },
                                { month: 'Jun', value: 26 },
                                { month: 'Jul', value: 32 },
                                { month: 'Aug', value: 30 },
                                { month: 'Sep', value: 28 },
                                { month: 'Oct', value: 25 },
                            ]}
                            dataKey="value"
                            name="Temperatura Promedio (°C)"
                            stroke="#FF8042"
                            strokeWidth={2}
                        />
                        <Line
                            yAxisId="left"
                            type="monotone"
                            data={[
                                { month: 'May', value: 22 },
                                { month: 'Jun', value: 18 },
                                { month: 'Jul', value: 15 },
                                { month: 'Aug', value: 32 },
                                { month: 'Sep', value: 25 },
                                { month: 'Oct', value: 20 },
                            ]}
                            dataKey="value"
                            name="Índice de Riesgo Climático"
                            stroke="#8884d8"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-blue-50 p-3 rounded-lg text-xs">
                <h3 className="font-medium text-blue-900 mb-1">
                    Recomendaciones para {selectedRegion}:
                </h3>
                {regionData && (
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                        <li>
                            {regionData?.temp > 26
                                ? 'Implementar medidas de refrigeración para optimizar procesos productivos'
                                : 'Mantener temperatura estable en instalaciones para máxima eficiencia'}
                        </li>
                        <li>
                            {regionData?.precipitation > 90
                                ? 'Revisar rutas logísticas alternativas durante periodos de alta precipitación'
                                : 'Aprovechar condiciones favorables para maximizar entregas'}
                        </li>
                        <li>
                            Potencial de reducción de emisiones de carbono:{' '}
                            {scenarioData?.carbonReduction}% en escenario{' '}
                            {selectedScenario.toLowerCase()}
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}
