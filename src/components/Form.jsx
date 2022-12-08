import React, { useState } from 'react';
import FormContent from './FormContent';
import Stepper from './Stepper';
import AddOns from './AddOns';
import PlanSelection from './PlanSelection';
import Summary from './Summary';
import PersonalInfo from './PersonalInfo';

const STEPS = [
  {
    stepId: 1,
    stepLabel: 'YOUR INFO',
    view: PersonalInfo
  },
  {
    stepId: 2,
    stepLabel: 'SELECT PLAN',
    view: PlanSelection
  },
  {
    stepId: 3,
    stepLabel: 'ADD-ONS',
    view: AddOns
  },
  {
    stepId: 4,
    stepLabel: 'SUMMARY',
    view: Summary
  }
]

function Form() {
  const [activeStep, setActiveStep] = useState(null)

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <>
      <div className="max-w-4xl bg-gray-500 p-3 rounded-lg flex gap-3">
        <Stepper steps={STEPS} forwardActiveStep={handleStepChange} />
        <FormContent activeStep={activeStep} />
      </div>
    </>
  );
}

export default Form;
