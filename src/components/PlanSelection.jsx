import React from 'react'
import { ReactComponent as Arcade} from '../assets/images/icon-arcade.svg'
import { ReactComponent as Advanced} from '../assets/images/icon-advanced.svg'
import { ReactComponent as Pro} from '../assets/images/icon-pro.svg'
function PlanSelection({ planType, changeData }) {
  return (
    <>
    <div id="header" className='mb-8'>
        <h2 className='text-3xl font-bold text-primary-marine'>Plan Selection</h2>
        <p className='text-neutral-coolgray'>Please provide your name, email and phone number</p>
    </div>
    <div id="fields">
      <div id="radios" className='flex gap-4 justify-center'>
        <div data-radio-field className='relative rounded-xl border border-neutral-lightgray hover:border-primary-purplish w-1/4 p-4'>
          <label className='sr-only'>
            Arcade
          </label>
          <div data-radio-field-details className='flex flex-col gap-12'>
            <Arcade />
            <div className='flex flex-col'>
              <span className='font-bold text-sm text-primary-marine'>Arcade</span>
              <span className='text-sm text-neutral-coolgray'>$9/mo</span>
            </div>
          </div>
          <input  onChange={(e) => changeData({[e.target.name]: e.target.value})} type="radio" name="planType" value="arcade" id="" className='appearance-none rounded-xl absolute inset-0 cursor-pointer checked:bg-neutral-magnolia/30 checked:border checked:border-primary-purplish' checked={planType === 'arcade'} />
        </div>

        <div data-radio-field className='relative rounded-xl border border-neutral-lightgray hover:border-primary-purplish w-1/4 p-4'>
          <label className='sr-only'>
            Advanced
          </label>
          <div data-radio-field-details className='flex flex-col gap-12'>
            <Advanced />
            <div className='flex flex-col'>
              <span className='font-bold text-sm text-primary-marine'>Advanced</span>
              <span className='text-sm text-neutral-coolgray'>$12/mo</span>
            </div>
          </div>
          <input  onChange={(e) => changeData({[e.target.name]: e.target.value})} type="radio" name="planType" value="advanced" id="" className='appearance-none rounded-xl absolute inset-0 cursor-pointer checked:bg-neutral-magnolia/30 checked:border checked:border-primary-purplish' checked={planType === 'advanced'} />
        </div>


        <div data-radio-field className='relative rounded-xl border border-neutral-lightgray hover:border-primary-purplish w-1/4 p-4'>
          <label className='sr-only'>
            Pro
          </label>
          <div data-radio-field-details className='flex flex-col gap-12'>
            <Pro />
            <div className='flex flex-col'>
              <span className='font-bold text-sm text-primary-marine'>Pro</span>
              <span className='text-sm text-neutral-coolgray'>$15/mo</span>
            </div>
          </div>
          <input onChange={(e) => changeData({[e.target.name]: e.target.value})}  type="radio" name="planType" value="pro" id="" className='appearance-none rounded-xl absolute inset-0 cursor-pointer checked:bg-neutral-magnolia/30 checked:border checked:border-primary-purplish' checked={planType === 'pro'} />
        </div>



      </div>
    </div>
    </>
  )
}

export default PlanSelection