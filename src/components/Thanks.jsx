import React from 'react';
import { ReactComponent as ThanksLogo } from '../assets/images/icon-thank-you.svg';
function Thanks() {
  return (
    <div className="bg-neutral-white mx-5 rounded-xl md:rounded-none md:mx-0 top-24 flex flex-col items-center justify-center px-4 py-20 md:py-0 md:px-10 gap-4 md:gap-6 absolute md:static shadow-md md:shadow-none">
      <ThanksLogo />
      <div id="header" className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary-marine">Thank You!</h2>
        <p className="text-neutral-coolgray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default Thanks;
