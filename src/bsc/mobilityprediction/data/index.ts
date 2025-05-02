
export interface Zona {
    id: number;
    name: string;
    visitors: number;
    peak: number;
    dwellTime: number;
    entering: number;
    color: string;
    colorPrediction: string;
    position: { x: number; y: number };
    radius: number;
}

export const zonasData: Zona[] = [
    {
        id: 1,
        name: 'Centro Comercial',
        visitors: 580,
        peak: 650,
        dwellTime: 24,
        entering: 98,
        color: '#FF9966',
        colorPrediction: '#FFCC99',
        position: { x: 120, y: 150 },
        radius: 30,
    },
    {
        id: 2,
        name: 'Zona Empresarial',
        visitors: 1120,
        peak: 1280,
        dwellTime: 34,
        entering: 98,
        color: '#6699FF',
        colorPrediction: '#99CCFF',
        position: { x: 320, y: 180 },
        radius: 40,
    },
    {
        id: 3,
        name: 'Parque Central',
        visitors: 435,
        peak: 510,
        dwellTime: 18,
        entering: 47,
        color: '#9966FF',
        colorPrediction: '#CC99FF',
        position: { x: 180, y: 320 },
        radius: 25,
    },
    {
        id: 4,
        name: 'Estación de Transporte',
        visitors: 890,
        peak: 950,
        dwellTime: 31,
        entering: 98,
        color: '#66D9C8',
        colorPrediction: '#99FFF0',
        position: { x: 400, y: 300 },
        radius: 35,
    },
];

export interface TrendData {
    time: number;
    zone1: number;
    zone2: number;
    zone3: number;
    zone4: number;
}

// Datos para el gráfico de tendencia
export const trendData: TrendData[] = [
    { time: 6, zone1: 85, zone2: 210, zone3: 120, zone4: 150 },
    { time: 8, zone1: 230, zone2: 390, zone3: 250, zone4: 320 },
    { time: 10, zone1: 420, zone2: 760, zone3: 380, zone4: 490 },
    { time: 12, zone1: 610, zone2: 1050, zone3: 470, zone4: 840 },
    { time: 14, zone1: 680, zone2: 1320, zone3: 580, zone4: 920 },
    { time: 16, zone1: 590, zone2: 1140, zone3: 520, zone4: 850 },
    { time: 18, zone1: 480, zone2: 870, zone3: 430, zone4: 720 },
];

export interface DateTime {
    time: string;
}

export interface PredictionData {
    time: number;
    zone1: number;
    zone2: number;
    zone3: number;
    zone4: number;
}
// Datos para la predicción
export const predictionData: PredictionData[] = [
    { time: 6, zone1: 80, zone2: 215, zone3: 118, zone4: 155 },
    { time: 8, zone1: 225, zone2: 400, zone3: 245, zone4: 330 },
    { time: 10, zone1: 430, zone2: 750, zone3: 390, zone4: 480 },
    { time: 12, zone1: 620, zone2: 1065, zone3: 465, zone4: 830 },
    { time: 14, zone1: 670, zone2: 1300, zone3: 590, zone4: 935 },
    { time: 16, zone1: 580, zone2: 1120, zone3: 525, zone4: 860 },
    { time: 18, zone1: 490, zone2: 880, zone3: 425, zone4: 710 },
    { time: 20, zone1: 410, zone2: 755, zone3: 370, zone4: 660 },
    { time: 22, zone1: 330, zone2: 600, zone3: 315, zone4: 530 },
    { time: 24, zone1: 190, zone2: 440, zone3: 225, zone4: 390 },
];