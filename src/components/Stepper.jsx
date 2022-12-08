import React from 'react';
import desktopSidebar from '../assets/images/bg-sidebar-desktop.svg';
import { ReactComponent as DesktopSidebar } from '../assets/images/bg-sidebar-desktop.svg'
function Stepper() {
  return <>
    <div style={{ position: 'relative'}}>
      <DesktopSidebar />
      <div className='absolute inset-0'>Hello there</div>
    </div>
  </>;
}

export default Stepper;
