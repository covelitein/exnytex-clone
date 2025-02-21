import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "@/types";
import { Loader2 } from "lucide-react";
import { Button } from "./button";

interface FormStepProps {
  children: React.ReactNode;
  form: UseFormReturn<FormData>;
  onNext?: () => void;
  onPrevious?: () => void;
  isLastStep?: boolean;
  isFirstStep?: boolean;
  loading?: boolean;
}

export const FormStep: React.FC<FormStepProps> = ({
  children,
  onNext,
  onPrevious,
  isLastStep,
  isFirstStep,
  loading,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">{children}</div>

      <div className="flex justify-between pt-2">
        {!isFirstStep && (
          <button
            type="button"
            onClick={onPrevious}
            className="px-8 py-2 text-sm font-medium text-white/60 bg-main-green/40 rounded-md hover:bg-main-green/40 focus:outline-none focus:ring-0"
          >
            Previous
          </button>
        )}

        <Button
          type={isLastStep ? "submit" : "button"}
          disabled={loading}
          onClick={!isLastStep ? onNext : undefined}
          className="ml-auto px-8 py-2 text-sm font-medium text-white bg-main-green/60 rounded-md hover:bg-main-green/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center gap-2"
        >
          {loading && <Loader2 className="animate-spin text-2xl" />}
          {isLastStep ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};
