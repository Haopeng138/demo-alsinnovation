import React from 'react';

type Step = {
    id: string;
    name: string;
    description?: string;
};

type StepperProps = {
    steps: Step[];
    currentStep: number;
    setCurrentStep: (step: number) => void;
    completedSteps?: number[];
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    orientation?: 'horizontal' | 'vertical';
};

function Stepper({
    steps,
    currentStep,
    setCurrentStep,
    completedSteps = [],
    color = 'primary',
    orientation = 'horizontal',
}: StepperProps) {
    const colorClasses = {
        primary: 'bg-blue-600 text-white',
        secondary: 'bg-gray-600 text-white',
        success: 'bg-green-600 text-white',
        danger: 'bg-red-600 text-white',
        warning: 'bg-yellow-600 text-white',
        info: 'bg-cyan-600 text-white',
    };

    const borderColorClasses = {
        primary: 'border-blue-600',
        secondary: 'border-gray-600',
        success: 'border-green-600',
        danger: 'border-red-600',
        warning: 'border-yellow-600',
        info: 'border-cyan-600',
    };

    const isCompleted = (index: number) => completedSteps.includes(index);
    const isActive = (index: number) => currentStep === index;

    return (
        <div
            className={`flex ${
                orientation === 'vertical' ? 'flex-col' : 'flex-row'
            } w-full`}
        >
            {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                    <div
                        className={`flex ${
                            orientation === 'vertical' ? 'flex-row' : 'flex-col'
                        } items-center cursor-pointer`}
                        onClick={() => setCurrentStep(index)}
                    >
                        <div
                            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                                isActive(index)
                                    ? colorClasses[color]
                                    : isCompleted(index)
                                      ? `${colorClasses[color]} border-transparent`
                                      : `border-gray-300 ${currentStep > index ? 'bg-gray-100' : 'bg-white'}`
                            } ${borderColorClasses[color]}`}
                        >
                            {isCompleted(index) ? (
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            ) : (
                                index + 1
                            )}
                        </div>
                        <div
                            className={`mt-2 ${
                                orientation === 'vertical'
                                    ? 'ml-4'
                                    : 'text-center'
                            }`}
                        >
                            <p
                                className={`text-sm font-medium ${
                                    isActive(index) || isCompleted(index)
                                        ? `text-${color}-600`
                                        : 'text-gray-500'
                                }`}
                            >
                                {step.name}
                            </p>
                            {step.description && (
                                <p className="text-xs text-gray-500">
                                    {step.description}
                                </p>
                            )}
                        </div>
                    </div>
                    {index < steps.length - 1 && (
                        <div
                            className={`flex-auto ${
                                orientation === 'vertical'
                                    ? 'h-16 ml-4'
                                    : 'w-full'
                            }`}
                        >
                            <div
                                className={`w-full ${
                                    orientation === 'vertical'
                                        ? 'h-full'
                                        : 'h-1'
                                } ${
                                    isCompleted(index + 1)
                                        ? `bg-${color}-600`
                                        : 'bg-gray-200'
                                }`}
                            ></div>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Stepper;
