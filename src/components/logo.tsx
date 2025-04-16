import svglogo from '@/assets/alslogo.svg';
import svglogowhite from '@/assets/alslog-white.svg';
interface LogoProps {
    isDarkMode?: boolean;
}

export function Logo({ isDarkMode }: LogoProps) {
    return (
        <img
            src={isDarkMode ? svglogowhite : svglogo}
            alt="ALS Logo"
            className="h-10 w-auto" // adjust height/width as needed
        />
    );
}
