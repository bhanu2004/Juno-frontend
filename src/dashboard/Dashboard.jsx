import React, { useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import Navigation from '../components/navigation/Navigation';
import CloseAccount from '../components/closeAccount/CloseAccount';
import data from '../data';
import DashboardMonitor from '../components/dashboardTable/DashboardMonitor';
import FilterData from '../components/filterData/FilterData';

function Dashboard() {
    const [closeClicked, setCloseClicked] = useState(false);

    const [currStatus, setCurrStatus] = useState('pending');
    const [navig, setNavig] = useState(false);
    const [currData, setCurrData] = useState(data);
    const handleCloseClick = ()=>{
        setCloseClicked(!closeClicked);
    }
    const handleNav = ()=>{
        setNavig(!navig);
    }
    
  return (
    <div className='container' >
        {closeClicked && <CloseAccount handleCloseClick = {handleCloseClick}/>}
        <Navigation navig={navig} handleNav = {handleNav}/>
        <div className='lineblack' onClick={handleNav}><IoMdMenu /></div>
        



        <div className="right-panel">
          <div className="heading">
            <h1>Monitoring</h1>
          </div>
          <div className="dashboard">
            <div className="dashboard-sections">
              <div className='dashboard-options'>
                
                <div className={`monitor-status ${currStatus=='pending'?'active-dashboard':''}`} onClick={()=>setCurrStatus('pending')}>Pending</div>
                <div className={`monitor-status ${currStatus=='completed'?'active-dashboard':''}`} onClick={()=>setCurrStatus('completed')}>Completed</div>
              </div>
              <button className='dashboard-close' onClick={handleCloseClick}>
              <RxCrossCircled />
                <span>Close account</span>
              </button>
            </div>
            <FilterData data={data} setCurrData={setCurrData}/>
            
            {currStatus=='pending' && <DashboardMonitor data = {currData}/>}
            </div>
        </div>
    </div>
  )
}

export default Dashboard