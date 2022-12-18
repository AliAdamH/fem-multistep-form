import React, { useState } from 'react';
import FormContent from './FormContent';
import Stepper from './Stepper';
import AddOns from './AddOns';
import PlanSelection from './PlanSelection';
import Summary from './Summary';
import PersonalInfo from './PersonalInfo';

const defaultValues = {
  plans: {
    arcade: {
      label: 'Arcade',
      monthly: 9,
      yearly: 90,
    },
    advanced: {
      label: 'Advanced',
      monthly: 12,
      yearly: 120,
    },
    pro: {
      label: 'Pro',
      monthly: 15,
      yearly: 150,
    },
  },
  addOns: {
    onlineService: {
      label: 'Online Service',
      details: 'Access to mulitplayer games',
      monthly: 1,
      yearly: 10,
    },
    largerStorage: {
      label: 'Larger Storage',
      details: 'Extra 1TB of cloud save',
      monthly: 2,
      yearly: 20,
    },
    customizableProfile: {
      label: 'Customizable Profile',
      details: 'Custom theme on your profile',
      monthly: 2,
      yearly: 20,
    },
  },
};

const initialState = {
  name: '',
  email: '',
  phone: '',
  selectedPlan: defaultValues.plans['arcade'],
  planFrequency: 'monthly',
  selectedAddons: {},
  planAmount: 0,
};

const STEPS = {
  1: {
    stepId: 1,
    stepLabel: 'YOUR INFO',
    view: PersonalInfo,
  },
  2: {
    stepId: 2,
    stepLabel: 'SELECT PLAN',
    view: PlanSelection,
  },
  3: {
    stepId: 3,
    stepLabel: 'ADD-ONS',
    view: AddOns,
  },
  4: {
    stepId: 4,
    stepLabel: 'SUMMARY',
    view: Summary,
  },
};

function Form() {
  const [activeStep, setActiveStep] = useState(STEPS[1]);
  const [data, setData] = useState(initialState);
  const handleStepChange = (id) => {
    setActiveStep(STEPS[id]);
  };

  const handleDataChange = (fields) => {
    setData((previousData) => {
      return { ...previousData, ...fields };
    });
  };

  return (
    <>
      <div className="custom__container shadow-xl bg-neutral-magnolia md:bg-neutral-white md:p-3 rounded-lg flex flex-col md:flex-row gap-3">
        <Stepper
          activeStep={activeStep}
          steps={STEPS}
          forwardActiveStep={handleStepChange}
        />
        <FormContent
          changeData={handleDataChange}
          data={data}
          activeStep={activeStep}
          changeStep={handleStepChange}
          planStepId={STEPS[2].stepId}
          defaultValues={defaultValues}
        />
      </div>
    </>
  );
}

export default Form;
