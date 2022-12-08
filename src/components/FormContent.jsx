import React from 'react'
import PersonalInfo from './PersonalInfo'
import FormNavigation from './FormNavigation'
function FormContent({ activeStep }) {

  const ToRender = activeStep?.view

  return (
    <div className='bg-neutral-white flex-1 p-12 flex flex-col'>
        {/* Temporary */}
        {activeStep !== null ? <ToRender /> : <PersonalInfo /> }
        <FormNavigation />
    </div>
  )
}

export default FormContent