import React, { useState } from 'react';
import desktopSidebar from '../assets/images/bg-sidebar-desktop.svg';
import { ReactComponent as DesktopSidebar } from '../assets/images/bg-sidebar-desktop.svg'
import StepperItem from './StepperItem';


const STEPS = [
  {
    stepId: 1,
    stepLabel: 'YOUR INFO'
  },
  {
    stepId: 2,
    stepLabel: 'SELECT PLAN'
  },
  {
    stepId: 3,
    stepLabel: 'ADD-ONS'
  },
  {
    stepId: 4,
    stepLabel: 'SUMMARY'
  }
]

function Stepper() {
  const [activeStep, setActiveStep ] = useState(STEPS[0].stepId)

  const handleStepActivation = (step) => {
    setActiveStep(step)
  }

  return <>
    <div style={{ position: 'relative'}}>
      <DesktopSidebar />
      <div className='absolute inset-0'>
        <div id="steps" className='mt-8 w-2/3 mx-auto flex flex-col gap-8'>
          {STEPS.map((step) => {
            return <StepperItem activate={handleStepActivation} key={step.stepId} stepNumber={step.stepId} stepLabel={step.stepLabel} active={step.stepId === activeStep}/>
          })}
        </div>
      </div>
    </div>
  </>;
}

export default Stepper;
