import React, { useContext, useEffect } from 'react'
import Time from './Timeline'
import Destination from './Destination'
import Cadre from './Cadre'
import { NavigationContext } from '../../helper/context';

function Home() {
  const { tabIndex, setTabIndex } = useContext(NavigationContext);
  useEffect(()=>{
    setTabIndex(0);
  });
  return (
    <div>
        <Time/>
     
        <Cadre/>
    <Destination/>

    </div>
  )
}

export default Home;