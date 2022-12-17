import React from 'react'

function Summary({ selectedPlan, planFrequency, selectedAddons, changePlan }) {

  const periodFormatter = planFrequency === 'monthly' ? 'month' : 'year';

  const TotalPrice = () => {
    return [selectedPlan, ...Object.values(selectedAddons)].reduce((accumulator, currentObject) => {
      return accumulator += currentObject[planFrequency]
    }, 0)
  }

  const displayPriceHelper = (pricedItem) => {
    return planFrequency === 'monthly' ? `$${pricedItem.monthly}/mo` : `$${pricedItem.yearly}/yr`;
  }

  return (
    <>
    <div id="header" className='mb-4 md:mb-8 space-y-1'>
      <h2 className='text-2xl md:text-3xl font-bold text-primary-marine'>Finishing up</h2>
      <p className='text-neutral-coolgray'>Double-check everything before confirming</p>
    </div>
     <div data-summary className='bg-neutral-magnolia p-5 rounded space-y-4'>
        <div data-plan-summary className='border-b-2 border-neutral-lightgray flex items-center pb-6'>
          <div>
            <h3 className='font-bold text-primary-marine capitalize'>{selectedPlan.label} ({planFrequency})</h3>
            <a onClick={changePlan} href="#" className='text-sm text-neutral-coolgray underline hover:text-primary-purplish' >Change</a>
          </div>
          <span className='font-bold text-primary-marine text-sm ml-auto'>{displayPriceHelper(selectedPlan)}</span>
        </div>
        <div data-addon-summary className='flex flex-col gap-4'>
            {
              Object.keys(selectedAddons).map((addOn) => {
                return (
                  <div  key={addOn} className='flex justify-between items-center text-sm'>
                    <span className='text-neutral-coolgray'> {selectedAddons[addOn].label}</span>
                    <span className='text-primary-marine'> +{displayPriceHelper(selectedAddons[addOn])}</span>
                  </div>
                )
              })
            }
        </div>
     </div>
    <div data-total className='flex justify-between items-center mt-8 px-4 md:px-6'>
      <span className='text-sm text-neutral-coolgray'>Total (per {periodFormatter})</span>
      <span className='md:text-lg text-primary-purplish font-bold capitalize'>${TotalPrice()}/{periodFormatter}</span>
    </div>
    </>
  )
}

export default Summary