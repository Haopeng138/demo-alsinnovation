import svglogo from '@/assets/alslogo.svg';

export function Logo() {
    return (
        <img
            src={svglogo}
            alt="ALS Logo"
            className="h-10 w-auto" // adjust height/width as needed
        />
    );
}
