import React from 'react'

function FormNavigation({ currentStep, changeStep }) {

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
    return null;
  }

  return (
    <div className='mt-auto flex'>
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