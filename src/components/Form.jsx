import React from 'react';
import FormContent from './FormContent';
import Stepper from './Stepper';

function Form() {
  return (
    <>
      <div className="max-w-4xl bg-gray-500 p-3 rounded-lg flex gap-3">
        <Stepper />
        <FormContent />
      </div>
    </>
  );
}

export default Form;
