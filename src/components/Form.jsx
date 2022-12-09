import React, { useState, useEffect } from 'react';
import FormContent from './FormContent';
import Stepper from './Stepper';
import AddOns from './AddOns';
import PlanSelection from './PlanSelection';
import Summary from './Summary';
import PersonalInfo from './PersonalInfo';

const STEPS = {
  1: {
    stepId: 1,
    stepLabel: 'YOUR INFO',
    view: PersonalInfo
  },
  2: {
    stepId: 2,
    stepLabel: 'SELECT PLAN',
    view: PlanSelection
  },
  3:{
    stepId: 3,
    stepLabel: 'ADD-ONS',
    view: AddOns
  },
  4: {
    stepId: 4,
    stepLabel: 'SUMMARY',
    view: Summary
  }
}

function Form() {
  const [activeStep, setActiveStep] = useState(STEPS[1])

  const handleStepChange = (id) => {
    setActiveStep(STEPS[id])
  }
  
  return (
    <>
      <div className="max-w-4xl bg-gray-500 p-3 rounded-lg flex gap-3">
        <Stepper steps={STEPS} forwardActiveStep={handleStepChange} />
        <FormContent activeStep={activeStep} changeStep={handleStepChange} />
      </div>
    </>
  );
}

export default Form;
