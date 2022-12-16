import React from 'react'
import { ReactComponent as Arcade} from '../assets/images/icon-arcade.svg'
import { ReactComponent as Advanced} from '../assets/images/icon-advanced.svg'
import { ReactComponent as Pro} from '../assets/images/icon-pro.svg'



const logoCollection =  {
  arcade: Arcade,
  advanced: Advanced,
  pro: Pro
}

function PlanSelection({ changeData, planFrequency, defaultValues, selectedPlan }) {
  
  const planIsMontlhy = planFrequency === 'monthly'

  const handlePlanCheck = (e) => {
    if (e.target.checked) {
      changeData({[e.target.name]: 'yearly'})
    } else {
      changeData({[e.target.name]: 'monthly'})
    }
  } 

  return (
    <>
    <div id="header" className='mb-4 md:mb-8 space-y-1'>
        <h2 className='text-2xl md:text-3xl font-bold text-primary-marine'>Plan Selection</h2>
        <p className='text-neutral-coolgray'>Please provide your name, email and phone number</p>
    </div>

    <div id="fields">
      <div id="radios" className='flex flex-col md:flex-row gap-3 md:gap-4 justify-center'>

        {Object.keys(defaultValues.plans).map((planType) => {

        let planObject = defaultValues.plans[planType];
        let PlanLogo = logoCollection[planType];

        return (<div key={planType} data-radio-field className='relative rounded-xl border border-neutral-lightgray hover:border-primary-purplish md:w-1/4 p-4'>
          <label className='sr-only'>
            {planObject.label}
          </label>
          <div data-radio-field-details className='flex md:flex-col gap-4 md:gap-12'>
            <PlanLogo />
            <div className='flex flex-col'>
              <span className='font-bold text-sm text-primary-marine'>{planObject.label}</span>
              <span className='text-sm text-neutral-coolgray'>{planFrequency === 'monthly' ? `$${planObject.monthly}/mo` : `$${planObject.yearly}/y`}</span>
            </div>
          </div>
          <input  onChange={(e) => changeData({ [e.target.name]: planObject })} type="radio" name="selectedPlan" value={planType} id="" className='appearance-none rounded-xl absolute inset-0 cursor-pointer checked:bg-neutral-magnolia/30 checked:border checked:border-primary-purplish' checked={selectedPlan.label === planObject.label} />
        </div>)    
        })}
      </div>

      <div id="planToggle" className='mt-6 p-3 bg-neutral-magnolia rounded-lg flex justify-center gap-6'>
        <label htmlFor="planFrequency" className={`${planIsMontlhy ? 'text-primary-marine' : 'text-neutral-coolgray' } font-semibold text-sm`}>Monthly</label>
        <input data-plan-frequency onChange={handlePlanCheck} type="checkbox" name="planFrequency" id="planFrequency" value={'monthly'} checked={planFrequency !== 'monthly'}/>
        <label htmlFor="planFrequency" className={`${planIsMontlhy ? 'text-neutral-coolgray' : 'text-primary-marine' } font-semibold text-sm`}>Yearly</label>
      </div>
    </div>
    </>
  )
}

export default PlanSelection