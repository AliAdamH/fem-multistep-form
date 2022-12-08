import React from 'react';
import Stepper from './Stepper';

function Form() {
  return (
    <>
      <div className="max-w-4xl bg-gray-500 p-3 rounded-lg flex gap-3">
        <Stepper />
        <h1 className="text-4xl">Hello there</h1>
      </div>
    </>
  );
}

export default Form;
