import React from 'react'

function PersonalInfo() {
  return (
    <>
       <div id="header" className='mb-8'>
            <h2 className='text-3xl font-bold text-primary-marine'>Personal Info</h2>
            <p className='text-neutral-coolgray'>Please provide your name, email and phone number</p>
       </div>
       <div id="fields" className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <label htmlFor='name' className='text-primary-marine text-sm'>Name</label>
                <input id='name' type="text" name='name' className='p-3 text-primary-marine font-semibold border border-slate-300 rounded-md'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='email' className='text-primary-marine text-sm'>Email address</label>
                <input id='email' type="email" name='email' className='p-3 text-primary-marine font-semibold border border-slate-300 rounded-md'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='phone' className='text-primary-marine text-sm'>Phone Number</label>
                <input id='phone' type="tel" name='phone' className='p-3 text-primary-marine font-semibold border border-slate-300 rounded-md'/>
            </div>
       </div>
    </>
  )
}

export default PersonalInfo