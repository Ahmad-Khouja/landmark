import React, { useContext, useEffect } from 'react'
import Safety from './Safety'
import Sustainability from './Sustainability'
import Landmark from './Landmark'
import { NavigationContext } from '../../helper/context';
function SafetyPage() {
  const { tabIndex, setTabIndex } = useContext(NavigationContext);
  useEffect(()=>{
    setTabIndex(4);
  });
  return (
    <div>
        <Safety/>
        <Sustainability/>
        <Landmark/>
    </div>
  )
}

export default SafetyPage
