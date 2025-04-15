export function Footer() {
    return (
        <>
            <div className="mt-10 flex justify-center">
                <div className="flex items-center">
                    <svg
                        viewBox="0 0 500 120"
                        width="160"
                        height="48"
                        className="mr-3"
                    >
                        <g fill="#0F2B46">
                            {/* A */}
                            <polygon points="20,110 70,10 120,110 95,110 70,60 45,110" />
                            {/* L */}
                            <rect x="140" y="10" width="25" height="100" />
                            {/* S */}
                            <path d="M240,10 L180,10 L180,35 L215,35 L215,60 L180,60 L180,85 L240,85 L240,110 L170,110 L170,10 Z" />
                        </g>
                    </svg>
                    <div>
                        <div className="text-lg font-bold text-gray-900">
                            Arm's Length Services
                        </div>
                        <div className="text-lg font-medium text-gray-700">
                            Innovation
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500">
                <p>© 2025 ALS Innovation - AI Mobility Prediction Platform</p>
            </div>
        </>
    );
}
