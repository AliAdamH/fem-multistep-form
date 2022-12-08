import React from 'react'
import PersonalInfo from './PersonalInfo'
import FormNavigation from './FormNavigation'
function FormContent() {
  return (
    <div className='bg-neutral-white flex-1 p-12 flex flex-col'>
        <PersonalInfo />
        <FormNavigation />
    </div>
  )
}

export default FormContent