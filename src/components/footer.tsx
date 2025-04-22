import { Logo } from './logo';

interface FooterProps {
    title?: string;
}
export function Footer({ title }: FooterProps) {
    return (
        <div className="bg-bland-dark-blue text-bland-white shadow-md flex flex-row items-center justify-center h-16 gap-3">
            <Logo isDarkMode={true} />
            <div className="mt-4 text-center text-xs text-gray-500">
                <p>
                    © 2025 ALS Innovation -{' '}
                    {title ? title : 'AI Mobility Prediction Platform'}
                </p>
            </div>
        </div>
    );
}
