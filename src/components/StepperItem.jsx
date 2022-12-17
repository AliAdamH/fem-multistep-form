import React from 'react';

const ACTIVE_CLASSES = 'bg-primary-light text-gray-900';
const INACTIVE_CLASSES = 'bg-transparent border border-slate-100 text-white';
function StepperItem({ step, active, activate }) {
  const activeSelf = () => {
    activate(step);
  };

  return (
    <div className="flex gap-5 items-center">
      <button
        onClick={activeSelf}
        className={`${
          active ? ACTIVE_CLASSES : INACTIVE_CLASSES
        } transition-colors font-bold rounded-full w-10 h-10 flex-shrink-0 hover:text-gray-900 hover:bg-primary-light`}
      >
        {step.stepId}
      </button>
      <div className="hidden md:flex md:flex-col ">
        <span className="text-neutral-lightgray">STEP {step.stepId}</span>
        <span className="text-neutral-magnolia font-bold">
          {step.stepLabel}
        </span>
      </div>
    </div>
  );
}

export default StepperItem;
