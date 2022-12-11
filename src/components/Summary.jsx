import React from 'react'

function Summary({ selectedPlan, planFrequency }) {
  return (
    <>
    <div id="header" className='mb-8'>
      <h2 className='tex  t-3xl font-bold text-primary-marine'>Finishing up</h2>
      <p className='text-neutral-coolgray'>Double-check everything before confirming</p>
    </div>
     <div data-summary className='bg-neutral-magnolia p-5 rounded space-y-4'>
        <div data-plan-summary className='border-b-2 border-neutral-lightgray flex items-center pb-6'>
          <div>
            <h3 className='font-bold text-primary-marine capitalize'>{selectedPlan.label} ({planFrequency})</h3>
            <a href="#" className='text-sm text-neutral-coolgray underline'>Change</a>
          </div>
          <span className='font-bold text-primary-marine text-sm ml-auto'>$9/mo</span>
        </div>
        <div data-addon-summary className='flex flex-col gap-4'>
            {/* Make this dynamic ofcourse. */}
            <div className='flex justify-between items-center text-sm'>
              <span className='text-neutral-coolgray'> Online Service </span>
              <span className='text-primary-marine'> +$1/mo</span>
            </div>

            <div className='flex justify-between items-center text-sm'>
              <span className='text-neutral-coolgray'>Larger storage  </span>
              <span className='text-primary-marine'> +$2/mo</span>
            </div>

        </div>
     </div>
    <div data-total className='flex justify-between items-center mt-8 px-6'>
      <span className='text-sm text-neutral-coolgray'>Total{'(per Month)'}</span>
      <span className='text-lg text-primary-purplish font-bold'>+$12/mo</span>
    </div>
    </>
  )
}

export default Summary