import Stepper from '@/components/stepper';
import { useState } from 'react';

export default function GenerateNews() {
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    const steps = [
        { id: '1', name: 'Step 1', description: 'Personal information' },
        { id: '2', name: 'Step 2', description: 'Billing address' },
        { id: '3', name: 'Step 3', description: 'Payment method' },
        { id: '4', name: 'Step 4', description: 'Confirmation' },
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            setCompletedSteps([...completedSteps, currentStep]);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-8">Multi-step Form</h1>

            <Stepper
                steps={steps}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                completedSteps={completedSteps}
                color="primary"
                orientation="horizontal"
            />

            <div className="mt-8 p-6 border rounded-lg">
                <h2 className="text-xl font-semibold mb-4">
                    {steps[currentStep].name}
                </h2>
                <p className="mb-6">{steps[currentStep].description}</p>

                {/* Your form content for each step would go here */}
                <div className="min-h-32 flex items-center justify-center bg-gray-50 rounded">
                    <p>Step {currentStep + 1} content</p>
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        onClick={handlePrev}
                        disabled={currentStep === 0}
                        className={`px-4 py-2 rounded ${
                            currentStep === 0
                                ? 'bg-gray-300 cursor-not-allowed'
                                : 'bg-gray-600 text-white hover:bg-gray-700'
                        }`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
}
