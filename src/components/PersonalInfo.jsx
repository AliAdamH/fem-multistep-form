import React from 'react'

function PersonalInfo({ name, email, phone, changeData }) {
  return (
    <>
       <div id="header" className='mb-8'>
            <h2 className='text-3xl font-bold text-primary-marine'>Personal Info</h2>
            <p className='text-neutral-coolgray'>Please provide your name, email and phone number</p>
       </div>
       <div id="fields" className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <label htmlFor='name' className='text-primary-marine text-sm'>Name</label>
                <input onChange={(e) => changeData({[e.target.name]: e.target.value})} id='name' type="text" name='name' value={name} placeholder='e.g. Stephen King' className='p-3 text-primary-marine font-semibold border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-purplish invalid:border-primary-strawberry'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='email' className='text-primary-marine text-sm'>Email address</label>
                <input onChange={(e) => changeData({[e.target.name]: e.target.value})}  id='email' type="email" name='email' value={email} placeholder='e.g.stephenking@lorem.com'  className='p-3 text-primary-marine font-semibold border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-purplish  invalid:border-primary-strawberry'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='phone' className='text-primary-marine text-sm'>Phone Number</label>
                <input onChange={(e) => changeData({[e.target.name]: e.target.value})} id='phone' type="text" name='phone' value={phone} placeholder='e.g +1 234 567 890' className='p-3 text-primary-marine font-semibold border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-purplish  invalid:border-primary-strawberry'/>
            </div>
       </div>
    </>
  )
}

export default PersonalInfo