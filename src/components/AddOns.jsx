import React from 'react'

function AddOns() {
  return (
    <>
    <div id="header" className='mb-8'>
      <h2 className='text-3xl font-bold text-primary-marine'>Plan Selection</h2>
      <p className='text-neutral-coolgray'>Please provide your name, email and phone number</p>
    </div>
    <div id="fields" className='flex flex-col gap-4'>
      <div className='p-4 border border-neutral-lightgray rounded-lg flex gap-10 items-center hover:border-primary-purplish'>
        <input type="checkbox" name="onlineService" id="onlineService" value={'true'} className='w-4 h-4' />
        <label htmlFor="onlineService" className='text-primary-marine font-semibold'>
          Online Service <br />
          <span className='text-sm text-neutral-coolgray font-normal'>Access to mulitplayer games</span>
        </label>
        <span className='inline-block ml-auto text-primary-purplish text-sm font-semibold'>+$1/mo</span>
      </div>

      <div className='p-4 border border-neutral-lightgray rounded-lg flex gap-10 items-center hover:border-primary-purplish'>
        <input type="checkbox" name="largerStorage" id="largerStorage" value={'true'}  className='w-4 h-4'/>
        <label htmlFor="largerStorage" className='text-primary-marine font-semibold'>
          Larger Storage <br />
          <span className='text-sm text-neutral-coolgray font-normal'>Extra 1TB of cloud save</span>
        </label>
        <span className='inline-block ml-auto text-primary-purplish text-sm font-semibold'>+$2/mo</span>
      </div>

      <div className='p-4 border border-neutral-lightgray rounded-lg flex gap-10 items-center hover:border-primary-purplish'>
        <input type="checkbox" name="customiZableProfile" id="customiZableProfile" value={'true'} className='w-4 h-4' />
        
        <label htmlFor="customiZableProfile" className='text-primary-marine font-semibold'>
          Customizable Profile <br />
          <span className='text-sm text-neutral-coolgray font-normal'>Custom theme on your profile</span>
        </label>
        <span className='inline-block ml-auto text-primary-purplish text-sm font-semibold'>+$2/mo</span>
      </div>
    </div>
    </>
  )
}

export default AddOns