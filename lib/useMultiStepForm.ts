import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [stepIndex, setStepIndex] = useState(0);

  function nextStep() {
    return setStepIndex((prevStep) => prevStep + 1);
  }
  function previousStep() {
    return setStepIndex((prevStep) => prevStep - 1);
  }

  function resetStep() {
    return setStepIndex(0);
  }

  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === steps.length - 1;
  const step = steps[stepIndex];

  return {
    steps,
    stepIndex,
    step,
    isFirstStep,
    isLastStep,
    nextStep,
    previousStep,
    resetStep,
  };
}
