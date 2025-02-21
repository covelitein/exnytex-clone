import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-center space-x-3">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            {index > 0 && (
              <div
                className={`flex-1 h-1 ${
                  index <= currentStep ? 'bg-main-green/50' : 'bg-main-green/30'
                }`}
              />
            )}
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index < currentStep
                    ? 'bg-main-green/60 text-white'
                    : index === currentStep
                    ? 'bg-main-green/60 text-white'
                    : 'bg-main-green/10 text-white/70'
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span className="text-sm mt-1">{step}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};