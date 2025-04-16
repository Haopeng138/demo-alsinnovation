import svglogo from '@/assets/alslogo.svg';

interface LogoProps {
    isDarkMode?: boolean;
}

export function Logo({ isDarkMode }: LogoProps) {
    return (
        <img
            src={svglogo}
            alt="ALS Logo"
            className="h-10 w-auto" // adjust height/width as needed
        />
    );
}
