import React, { useState } from 'react';
import CloseAccount from '../components/closeAccount/CloseAccount';
import Navigation from '../components/navigation/Navigation';
import { IoMdMenu } from "react-icons/io";

function CommingSoon() {
    const [closeClicked, setCloseClicked] = useState(false);
    const [navig, setNavig] = useState(false);
    const handleCloseClick = ()=>{
        setCloseClicked(!closeClicked);
    }
    const handleNav = ()=>{
        setNavig(!navig);
    }
  return (
    <div className="container">
                {closeClicked && <CloseAccount handleCloseClick = {handleCloseClick}/>}
        <Navigation navig={navig} handleNav = {handleNav}/>
        <div className='lineblack' onClick={handleNav}><IoMdMenu /></div>
        <div className="right-panel">
          <div className="heading">
            <h1>Under Construction</h1>
          </div>
    <div>Comming Soon...</div>
    </div>

    </div>
  )
}

export default CommingSoon