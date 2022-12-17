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
    <div className='md:flex-1 md:flex md:flex-col p-0 md:p-12'>
        <form noValidate className='bg-neutral-white flex-1 mx-5 rounded-xl md:rounded-none md:mx-0 top-24 p-7 md:p-0 flex flex-col absolute md:static shadow-md md:shadow-none'>
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