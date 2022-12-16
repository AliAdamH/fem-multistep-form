import React, { useState } from 'react';
import desktopSidebar from '../assets/images/bg-sidebar-desktop.svg';
import { ReactComponent as DesktopSidebar } from '../assets/images/bg-sidebar-desktop.svg'
import { ReactComponent as MobileSidebar } from '../assets/images/bg-sidebar-mobile.svg'
import StepperItem from './StepperItem';




function Stepper({ activeStep, steps, forwardActiveStep }) {

  const handleStepActivation = (step) => {
    forwardActiveStep(step.stepId)
  }

  return <>
    <div className='relative'>
      <MobileSidebar  className='md:hidden'/>
      <DesktopSidebar  className='hidden md:block'/>
      <div className='absolute inset-0'>
        <div id="steps" className='mt-8 w-2/3 mx-auto flex md:flex-col gap-8'>
          {Object.keys(steps).map((stepId) => {
            return <StepperItem activate={handleStepActivation} key={stepId} step={steps[stepId]} active={Number(stepId) === activeStep.stepId}/>
          })}
        </div>
      </div>
    </div>
  </>;
}

export default Stepper;
