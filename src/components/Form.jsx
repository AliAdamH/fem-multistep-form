import React, { useState, useEffect } from 'react';
import FormContent from './FormContent';
import Stepper from './Stepper';
import AddOns from './AddOns';
import PlanSelection from './PlanSelection';
import Summary from './Summary';
import PersonalInfo from './PersonalInfo';


const defaultValues = {
  plans: {
    arcade: {
      monthly: 9,
      yearly: 90
    },
    advanced: {
      monthly: 12,
      yearly: 120
    },
    pro: {
      monthly: 15,
      yearly: 150
    }
  },
  addOns: {
    onlineService: {
      monthly: 1,
      yearly: 10
    },
    largerStorage: {
      monthly: 2,
      yearly: 20
    },
    customizableProfile: {
      monthly: 2,
      yearly: 20
    }
  }
}

const betterInitialState = {
  name: '',
  email: '',
  phone: '',
  selectedPlan: defaultValues.plans['arcade'],
  planFrequency: 'monthly',
  selectedAddons: {}
}

const initialState = {
  name: '',
  email: '',
  phone: '',
  planType: 'arcade',
  planAmount: '',
  planFrequency: 'monthly',
  onlineServiceAddon: false,
  largerStorageAddon: false,
  customizableProfileAddon: false,
}


const STEPS = {
  1: {
    stepId: 1,
    stepLabel: 'YOUR INFO',
    view: PersonalInfo
  },
  2: {
    stepId: 2,
    stepLabel: 'SELECT PLAN',
    view: PlanSelection
  },
  3:{
    stepId: 3,
    stepLabel: 'ADD-ONS',
    view: AddOns
  },
  4: {
    stepId: 4,
    stepLabel: 'SUMMARY',
    view: Summary
  }
}

function Form() {
  const [activeStep, setActiveStep] = useState(STEPS[1])
  const [data, setData] = useState(initialState)
  const handleStepChange = (id) => {
    setActiveStep(STEPS[id])
  }
  
  const handleDataChange = (fields) => {
    setData((previousData) => {
      return {...previousData, ...fields}
    })
  }

  return (
    <>
      <div className="max-w-4xl bg-gray-500 p-3 rounded-lg flex gap-3">
        <Stepper  activeStep={activeStep} steps={STEPS} forwardActiveStep={handleStepChange} />
        <FormContent changeData={handleDataChange} data={data} activeStep={activeStep} changeStep={handleStepChange} />
      </div>
    </>
  );
}

export default Form;
