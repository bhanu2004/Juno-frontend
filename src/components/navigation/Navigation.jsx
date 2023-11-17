import React from 'react'
import { NavLink } from 'react-router-dom'
import { RxCrossCircled } from "react-icons/rx";
import './navigation.css'
function Navigation({navig,handleNav}) {
  return (
    <div className={`left-panel ${navig?"nav-active":""}`}>
      {navig && <div className='cross-nav' onClick={handleNav}><RxCrossCircled /></div>}
            <div className="logo">
              LOGO HERE
            </div>
            <nav className="nav-options">
              <ul>
                <li><NavLink to="/overview">Overview</NavLink></li>
                <li><NavLink to="/onboarding">Onboarding</NavLink></li>
                <li><NavLink to="/monitoring">Monitoring</NavLink></li>
                <li><NavLink to="/flagging">Flagging</NavLink></li>
                <li><NavLink to="/source-of-income">Source of Income</NavLink></li>
                <li><NavLink to="/uar">UAR</NavLink></li>
                {/* <li className='active'>Onboarding</li> */}
                
              </ul>
            </nav>
        </div>
  )
}

export default Navigation