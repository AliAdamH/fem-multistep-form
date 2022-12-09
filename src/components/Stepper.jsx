import React, { useState } from 'react';
import desktopSidebar from '../assets/images/bg-sidebar-desktop.svg';
import { ReactComponent as DesktopSidebar } from '../assets/images/bg-sidebar-desktop.svg'
import StepperItem from './StepperItem';




function Stepper({ steps, forwardActiveStep }) {
  const [activeStep, setActiveStep ] = useState(steps[1].stepId)

  const handleStepActivation = (step) => {
    setActiveStep(step.stepId)
    forwardActiveStep(step.stepId)
  }

  return <>
    <div style={{ position: 'relative'}}>
      <DesktopSidebar />
      <div className='absolute inset-0'>
        <div id="steps" className='mt-8 w-2/3 mx-auto flex flex-col gap-8'>
          {Object.keys(steps).map((stepId) => {
            return <StepperItem activate={handleStepActivation} key={stepId} step={steps[stepId]} active={Number(stepId) === activeStep}/>
          })}
        </div>
      </div>
    </div>
  </>;
}

export default Stepper;
