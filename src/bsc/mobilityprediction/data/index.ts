
export interface Zona {
    id: number;
    name: string;
    visitors: number;
    peak: number;
    dwellTime: number;
    entering: number;
    color: string;
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
        position: { x: 400, y: 300 },
        radius: 35,
    },
];

export interface TrendData {
    time: string;
    zone1: number;
    zone2: number;
    zone3: number;
    zone4: number;
}

// Datos para el gráfico de tendencia
export const trendData: TrendData[] = [
    { time: '6:00', zone1: 120, zone2: 260, zone3: 100, zone4: 180 },
    { time: '8:00', zone1: 280, zone2: 480, zone3: 220, zone4: 350 },
    { time: '10:00', zone1: 450, zone2: 820, zone3: 330, zone4: 560 },
    { time: '12:00', zone1: 580, zone2: 1120, zone3: 435, zone4: 890 },
    { time: '14:00', zone1: 650, zone2: 1280, zone3: 510, zone4: 950 },
    { time: '16:00', zone1: 610, zone2: 1180, zone3: 470, zone4: 910 },
    { time: '18:00', zone1: 520, zone2: 940, zone3: 380, zone4: 780 },
];