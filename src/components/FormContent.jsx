import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import FormNavigation from './FormNavigation'
import Thanks from './Thanks'
function FormContent({ data, activeStep,  changeStep, changeData, defaultValues }) {
  const [ completed,  setCompleted ] = useState(false)
  const ToRender = activeStep?.view

  return (
    <>
   {!completed ? 
    <div className='bg-neutral-white flex-1 p-12 flex flex-col'>
        <form noValidate>
          {activeStep !== null ? <ToRender {...data} changeData={changeData} defaultValues={defaultValues} /> : <PersonalInfo /> }
        </form>
        <FormNavigation changeStep={changeStep} currentStep={activeStep} setCompleted={() => setCompleted(true)}/>
    </div>
    :
    <Thanks />
    }
    </>
  )
}

export default FormContent