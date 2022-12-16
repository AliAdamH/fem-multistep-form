import React from 'react'

function AddOns({ changeData, defaultValues, selectedAddons, planFrequency}) {


  const updateSelectedAddOns = (addOnKey, addOn) => {
    if(isChecked(addOnKey)) {
      let {[addOnKey]: _discard, ...rest} = selectedAddons;
      changeData({
        selectedAddons: {
          ...rest
        }
      }) 
    } else {
      changeData({
        selectedAddons: {
          ...selectedAddons,
          [addOnKey]: addOn
        }
      })  
    }
  }

  const isChecked = (addOnKey) => {
    return Object.hasOwn(selectedAddons, addOnKey);
  }

  const renderClassesIfChecked = (addOn) => {
    return isChecked(addOn) ? 'bg-neutral-magnolia border-primary-purplish' : '';
  }

  return (
    <>
    <div id="header" className='mb-4 md:mb-8 space-y-1'>
      <h2 className='text-3xl font-bold text-primary-marine'>Pick add-ons</h2>
      <p className='text-neutral-coolgray'>Add-ons help enhance your gaming experience</p>
    </div>


   

    <div id="fields" className='flex flex-col gap-4'>
{
      Object.keys(defaultValues.addOns).map((addOn) => {

        let addOnToRender = defaultValues.addOns[addOn];
        let displayedPrice = planFrequency === 'monthly' ? `+$${addOnToRender.monthly}/mo`: `+$${addOnToRender.yearly}/y`;

      return (<div  key={addOn} className={`${renderClassesIfChecked(addOn)} p-3 md:p-4 border border-neutral-lightgray rounded-lg flex md:gap-10 items-center hover:border-primary-purplish`}>
        <input onChange={() => updateSelectedAddOns(addOn, addOnToRender)} type="checkbox" name={addOn} id={addOn} checked={isChecked(addOn)} className='w-4 h-4 mr-4 md:mr-0' />
        <label htmlFor={addOn} className='text-primary-marine font-semibold'>
          {addOnToRender.label} <br />
          <span className='text-sm text-neutral-coolgray font-normal'>{addOnToRender.details}</span>
        </label>
        <span className='inline-block ml-auto text-primary-purplish  text-sm font-semibold'>{displayedPrice}</span>
      </div>)

      })
    }
    </div>
    </>
  )
}

export default AddOns