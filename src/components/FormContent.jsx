import React from 'react'
import PersonalInfo from './PersonalInfo'
import FormNavigation from './FormNavigation'
function FormContent({ activeStep,  changeStep }) {

  const ToRender = activeStep?.view

  return (
    <div className='bg-neutral-white flex-1 p-12 flex flex-col'>
        {/* Temporary */}
        {activeStep !== null ? <ToRender /> : <PersonalInfo /> }
        <FormNavigation changeStep={changeStep} currentStep={activeStep}/>
    </div>
  )
}

export default FormContent