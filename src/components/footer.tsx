import { Logo } from './logo';

export function Footer() {
    return (
        <div className="bg-bland-dark-blue text-bland-white shadow-md ">
            <div className="mt-10 flex justify-center">
                <div className="flex items-center">
                    <Logo />
                </div>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500">
                <p>© 2025 ALS Innovation - AI Mobility Prediction Platform</p>
            </div>
        </div>
    );
}
