import React, { useState } from 'react'

function FormNavigation({ currentStep, changeStep, setCompleted }) {

  // These hardcoded values are bad ofc.
  const canNavigateBack = currentStep?.stepId > 1;
  const nextStep = currentStep?.stepId < 4;

  const navigateNext = () => {
    changeStep(currentStep.stepId + 1)
  }

  const navigateBack = () => {
    changeStep(currentStep.stepId - 1)
  }

  const confirm = () => {
    setCompleted()
  }

  return (
 
      <div className='mt-auto flex absolute bottom-0 px-3 md:px-0 py-4 md:py-0 md:static bg-neutral-white md:bg-transparent w-full'>
          {
          canNavigateBack ?
          <button onClick={() => navigateBack()} className='rounded-lg bg-primary-marine text-neutral-white font-semibold px-6 py-3'>Go back</button>
          : null
          }
          {
          nextStep ? 
          <button onClick={() => navigateNext()} className='ml-auto rounded-lg bg-primary-marine text-neutral-white font-semibold px-6 py-3'>Next Step</button>
          :           
          <button onClick={() => confirm()} className='ml-auto rounded-lg bg-primary-marine text-neutral-white font-semibold px-6 py-3'>confirm</button>
          }
      </div>
  )
}

export default FormNavigation