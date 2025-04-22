import { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { Download, Maximize2, MapPin, ChevronDown } from 'lucide-react';
import Header from '@/components/header';
import { Route, Routes } from 'react-router';
import ClimateForecasts from './forestcast';
import { Footer } from '@/components/footer';

// Dummy data for charts
const temperatureData = [
    { name: 'Apr 29', actual: 52, forecast: 50 },
    { name: 'Apr 30', actual: 60, forecast: 54 },
    { name: 'May 1', actual: 57, forecast: 62 },
    { name: 'May 2', actual: 63, forecast: 71 },
];

const precipitationData = [
    { name: 'Apr 29', actual: 0.25, forecast: 0.0 },
    { name: 'Apr 30', actual: 0.18, forecast: 0.0 },
    { name: 'May 1', actual: 0.38, forecast: 0.22 },
    { name: 'Apr 2', actual: 0.42, forecast: 0.58 },
];

const windData = [
    { name: 'Apr 29', actual: 8, forecast: 1 },
    { name: 'Apr 30', actual: 10, forecast: 0 },
    { name: 'May 1', actual: 5, forecast: 7 },
    { name: 'May 2', actual: 7, forecast: 10 },
];

const sparklineData = {
    temperature: [22, 23, 25, 26, 27, 28, 29, 29, 28, 26, 24, 23],
    precipitation: [120, 90, 70, 65, 60, 50, 55, 65, 75, 85, 95, 110],
    wind: [9, 8, 10, 11, 12, 10, 9, 8, 9, 10, 11, 12],
    humidity: [65, 60, 55, 58, 62, 68, 72, 70, 65, 63, 67, 70],
};

// Convert sparkline data to chart format
const formatSparklineData = (data: number[]) => {
    return data.map((value, index) => ({
        name: `M${index + 1}`,
        value,
    }));
};

// Main App Component
export default function ClimateAnalyticsDashboard() {
    const [activeMapLayer, setActiveMapLayer] = useState('temperature');
    const [selectedCountry, setSelectedCountry] = useState('Brazil');
    const links = [
        { label: 'Climate Analytics', path: '/app1' },
        { label: 'Forecast', path: '/app1/forecast' },
    ];
    return (
        <div className="min-h-screen bg-gray-50 text-bland-dark-blue flex flex-col">
            <Header links={links}></Header>

            <Routes>
                <Route
                    path="/"
                    element={
                        <main className="flex-grow p-6">
                            <div className="mx-auto">
                                <DashboardHeader />
                                <KeyMetrics />
                                <ForecastCharts />
                                <WorldMapSection
                                    activeMapLayer={activeMapLayer}
                                    setActiveMapLayer={setActiveMapLayer}
                                    selectedCountry={selectedCountry}
                                    setSelectedCountry={setSelectedCountry}
                                />
                            </div>
                        </main>
                    }
                ></Route>
                <Route
                    path="/forecast"
                    element={<ClimateForecasts></ClimateForecasts>}
                ></Route>
            </Routes>
            <Footer title="AI-powered trend analysis and forecasting tools"></Footer>
        </div>
    );
}

// Dashboard Header Component
function DashboardHeader() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-3xl font-bold text-bland-dark-blue mb-4 md:mb-0">
                Climate Analytics
            </h1>
            <div className="flex space-x-3">
                <SelectDropdown
                    options={['Global View', 'By Continent', 'By Country']}
                    defaultValue="Global View"
                />
                <SelectDropdown
                    options={['2025', '2024', '2023', '2022']}
                    defaultValue="2025"
                />
                <SelectDropdown
                    options={['Yearly', 'Quarterly', 'Monthly']}
                    defaultValue="Monthly"
                />
            </div>
        </div>
    );
}

interface SelectDropdownProps {
    options: string[];
    defaultValue: string;
}

// Select Dropdown Component
function SelectDropdown({ options, defaultValue }: SelectDropdownProps) {
    return (
        <div className="relative">
            <select
                className="appearance-none bg-white border border-gray-200 rounded-md py-2 pl-3 pr-8 leading-tight focus:outline-none focus:ring-bland-dark-blue  focus:border-blue-900 text-sm"
                defaultValue={defaultValue}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-bland-dark-blue">
                <ChevronDown size={16} />
            </div>
        </div>
    );
}

// Key Metrics Section
function KeyMetrics() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <KeyMetricCard
                title="Average Temperature"
                value="27.4°C"
                trend="+1.2°C"
                trendDirection="up"
                sparklineData={formatSparklineData(sparklineData.temperature)}
                color="#0c2340"
            />
            <KeyMetricCard
                title="Total Precipitation"
                value="78"
                unit="mm/month"
                trend="-3%"
                trendDirection="down"
                sparklineData={formatSparklineData(sparklineData.precipitation)}
                color="#0c2340"
            />
            <KeyMetricCard
                title="Average Wind Speed"
                value="11"
                unit="mph"
                trend="+8%"
                trendDirection="up"
                sparklineData={formatSparklineData(sparklineData.wind)}
                color="#0c2340"
            />
            <KeyMetricCard
                title="Average Humidity"
                value="64%"
                trend="+4%"
                trendDirection="up"
                sparklineData={formatSparklineData(sparklineData.humidity)}
                color="#0c2340"
            />
        </div>
    );
}

interface KeyMetricCardProps {
    title: string;
    value: string;
    unit?: string;
    trend: string;
    trendDirection: 'up' | 'down';
    sparklineData: { name: string; value: number }[];
    color: string;
}

// Key Metric Card Component
function KeyMetricCard({
    title,
    value,
    unit,
    trend,
    trendDirection,
    sparklineData,
    color,
}: KeyMetricCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4 transition-all hover:shadow-md hover:-translate-y-1">
            <div className="text-sm text-gray-500">{title}</div>
            <div className="text-2xl font-bold text-bland-dark-blue">
                {value}
            </div>
            {unit && <div className="text-xs text-gray-500">{unit}</div>}
            <div
                className={`text-xs flex items-center ${
                    trendDirection === 'up' ? 'text-red-500' : 'text-green-500'
                }`}
            >
                {trendDirection === 'up' ? (
                    <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                ) : (
                    <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                )}
                {trend} from last year
            </div>
            <div className="h-12 mt-2">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparklineData}>
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke={color}
                            strokeWidth={2}
                            dot={false}
                            isAnimationActive={false}
                        />
                        <YAxis domain={['dataMin', 'dataMax']} hide />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

// Forecast Charts Section
function ForecastCharts() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <ChartCard
                title="Temperature Forecast"
                data={temperatureData}
                lines={[
                    { dataKey: 'actual', color: '#0c2340', name: 'Actual' },
                    { dataKey: 'forecast', color: '#d1342f', name: 'Forecast' },
                ]}
                yDomain={[40, 80]}
            />
            <ChartCard
                title="Precipitation Forecast"
                data={precipitationData}
                lines={[
                    { dataKey: 'actual', color: '#0c2340', name: 'Actual' },
                    { dataKey: 'forecast', color: '#d1342f', name: 'Forecast' },
                ]}
                yDomain={[0, 1]}
            />
            <ChartCard
                title="Wind Forecast"
                data={windData}
                lines={[
                    { dataKey: 'actual', color: '#0c2340', name: 'Actual' },
                    { dataKey: 'forecast', color: '#d1342f', name: 'Forecast' },
                ]}
                yDomain={[0, 20]}
            />
        </div>
    );
}

interface ChartCardProps {
    title: string;
    data: { name: string; actual: number; forecast: number }[];
    lines: { dataKey: string; color: string; name: string }[];
    yDomain: [number, number];
}

// Chart Card Component
function ChartCard({ title, data, lines, yDomain }: ChartCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4 transition-all hover:shadow-md hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-bland-dark-blue">{title}</h3>
                <div className="flex space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                        <Download size={16} className="text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                        <Maximize2 size={16} className="text-gray-500" />
                    </button>
                </div>
            </div>
            <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            strokeOpacity={0.1}
                        />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis domain={yDomain} tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Legend wrapperStyle={{ fontSize: 12 }} />
                        {lines.map((line) => (
                            <Line
                                key={line.dataKey}
                                type="monotone"
                                dataKey={line.dataKey}
                                name={line.name}
                                stroke={line.color}
                                strokeWidth={2}
                                activeDot={{ r: 6 }}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

interface WorldMapSectionProps {
    activeMapLayer: string;
    setActiveMapLayer: (layer: string) => void;
    selectedCountry: string;
    setSelectedCountry: (country: string) => void;
}

// World Map Section Component
function WorldMapSection({
    activeMapLayer,
    setActiveMapLayer,
    selectedCountry,
    setSelectedCountry,
}: WorldMapSectionProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-4 transition-all hover:shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-bland-dark-blue">
                        Global Climate Overview
                    </h3>
                    <div className="flex space-x-2">
                        <MapLayerButton
                            active={activeMapLayer === 'temperature'}
                            onClick={() => setActiveMapLayer('temperature')}
                        >
                            Temperature
                        </MapLayerButton>
                        <MapLayerButton
                            active={activeMapLayer === 'precipitation'}
                            onClick={() => setActiveMapLayer('precipitation')}
                        >
                            Precipitation
                        </MapLayerButton>
                        <MapLayerButton
                            active={activeMapLayer === 'wind'}
                            onClick={() => setActiveMapLayer('wind')}
                        >
                            Wind
                        </MapLayerButton>
                    </div>
                </div>
                <div className="h-80 relative">
                    <WorldMap
                        activeLayer={activeMapLayer}
                        onSelectCountry={setSelectedCountry}
                    />
                </div>
            </div>
            <CountryDetails country={selectedCountry} />
        </div>
    );
}

interface MapLayerButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

// Map Layer Button Component
function MapLayerButton({ active, onClick, children }: MapLayerButtonProps) {
    return (
        <button
            className={`px-3 py-1 rounded text-sm ${
                active
                    ? 'bg-bland-dark-blue text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

interface WorldMapProps {
    activeLayer: string;
    onSelectCountry: (country: string) => void;
}

// World Map Component
function WorldMap({ activeLayer, onSelectCountry }: WorldMapProps) {
    // In a real app, this would be an actual map implementation
    // using a library like react-simple-maps or Mapbox
    return (
        <div className="w-full h-full bg-gray-50 rounded flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <img
                    src="/world.svg"
                    alt="World Map Background"
                    className="w-full h-full"
                />
            </div>

            {/* Brazil highlight */}
            <div
                className="absolute cursor-pointer"
                style={{ left: '33%', top: '75%' }}
                onClick={() => onSelectCountry('Brazil')}
            >
                <div className="relative">
                    <MapPin
                        size={28}
                        className="text-bland-dark-blue -translate-x-1/2 -translate-y-full"
                    />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-bland-dark-blue whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm">
                        Brazil
                    </div>
                </div>
            </div>

            {/* USA point */}
            <div
                className="absolute cursor-pointer"
                style={{ left: '20%', top: '47%' }}
                onClick={() => onSelectCountry('United States')}
            >
                <MapPin
                    size={22}
                    className="text-gray-500 hover:text-bland-dark-blue -translate-x-1/2 -translate-y-full"
                />
            </div>

            {/* Europe point */}
            <div
                className="absolute cursor-pointer"
                style={{ left: '52%', top: '46%' }}
                onClick={() => onSelectCountry('Germany')}
            >
                <MapPin
                    size={22}
                    className="text-gray-500 hover:text-bland-dark-blue -translate-x-1/2 -translate-y-full"
                />
            </div>

            {/* Asia point */}
            <div
                className="absolute cursor-pointer"
                style={{ left: '80%', top: '40%' }}
                onClick={() => onSelectCountry('China')}
            >
                <MapPin
                    size={22}
                    className="text-gray-500 hover:text-bland-dark-blue -translate-x-1/2 -translate-y-full"
                />
            </div>

            {/* Australia point */}
            <div
                className="absolute cursor-pointer"
                style={{ left: '85%', top: '80%' }}
                onClick={() => onSelectCountry('Australia')}
            >
                <MapPin
                    size={22}
                    className="text-gray-500 hover:text-bland-dark-blue -translate-x-1/2 -translate-y-full"
                />
            </div>

            {/* Map layer indicators */}
            <div className="absolute bottom-2 right-2 bg-white bg-opacity-80 p-2 rounded shadow-sm">
                <div className="text-xs font-medium text-bland-dark-blue">
                    {activeLayer === 'temperature' && 'Temperature Map Layer'}
                    {activeLayer === 'precipitation' &&
                        'Precipitation Map Layer'}
                    {activeLayer === 'wind' && 'Wind Map Layer'}
                </div>
            </div>
        </div>
    );
}

interface CountryDetailsProps {
    country: string;
}
// Country Details Component
function CountryDetails({ country }: CountryDetailsProps) {
    // This would normally fetch country-specific data
    interface CountryData {
        solarRadiation: string;
        temperature: string;
        precipitation: string;
        humidity: string;
        windSpeed: string;
        climateZones: string;
        carbonEmissions: string;
        renewableEnergy: string;
        flag?: string;
    }
    const countryData: Record<string, CountryData> = {
        Brazil: {
            solarRadiation: '5.7 kWh',
            temperature: '26.8°C',
            precipitation: '1780 mm',
            humidity: '80%',
            windSpeed: '3.5 m/s',
            climateZones: '5 major zones',
            carbonEmissions: '2.2 tons per capita',
            renewableEnergy: '45% of total',
            flag: '🇧🇷',
        },
        'United States': {
            solarRadiation: '4.8 kWh',
            temperature: '12.4°C',
            precipitation: '760 mm',
            humidity: '55%',
            windSpeed: '4.2 m/s',
            climateZones: '7 major zones',
            carbonEmissions: '15.5 tons per capita',
            renewableEnergy: '20% of total',
            flag: '🇺🇸',
        },
        Germany: {
            solarRadiation: '3.2 kWh',
            temperature: '9.6°C',
            precipitation: '700 mm',
            humidity: '65%',
            windSpeed: '3.8 m/s',
            climateZones: '2 major zones',
            carbonEmissions: '8.4 tons per capita',
            renewableEnergy: '46% of total',
            flag: '🇩🇪',
        },
        China: {
            solarRadiation: '4.6 kWh',
            temperature: '14.7°C',
            precipitation: '640 mm',
            humidity: '60%',
            windSpeed: '3.2 m/s',
            climateZones: '5 major zones',
            carbonEmissions: '7.4 tons per capita',
            renewableEnergy: '29% of total',
            flag: '🇨🇳',
        },
        Australia: {
            solarRadiation: '6.2 kWh',
            temperature: '21.9°C',
            precipitation: '450 mm',
            humidity: '40%',
            windSpeed: '4.5 m/s',
            climateZones: '6 major zones',
            carbonEmissions: '15.2 tons per capita',
            renewableEnergy: '24% of total',
            flag: '🇦🇺',
        },
    };

    const data = countryData[country] || countryData.Brazil;

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-bland-dark-blue text-lg">
                    {country}
                </h3>
                <div className="text-2xl">{data.flag}</div>
            </div>
            <div className="space-y-3">
                <CountryStat
                    label="Annual Solar Radiation:"
                    value={data.solarRadiation}
                />
                <CountryStat
                    label="Average Temperature:"
                    value={data.temperature}
                />
                <CountryStat
                    label="Precipitation:"
                    value={data.precipitation}
                />
                <CountryStat label="Average Humidity:" value={data.humidity} />
                <CountryStat label="Wind Speed:" value={data.windSpeed} />
                <CountryStat label="Climate Zones:" value={data.climateZones} />
                <CountryStat
                    label="Carbon Emissions:"
                    value={data.carbonEmissions}
                />
                <CountryStat
                    label="Renewable Energy:"
                    value={data.renewableEnergy}
                />
            </div>
        </div>
    );
}

interface CountryStatProps {
    label: string;
    value: string;
}

// Country Stat Component
function CountryStat({ label, value }: CountryStatProps) {
    return (
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <div className="text-sm text-gray-600">{label}</div>
            <div className="text-sm font-medium text-bland-dark-blue">
                {value}
            </div>
        </div>
    );
}
