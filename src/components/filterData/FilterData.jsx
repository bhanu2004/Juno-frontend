import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

function FilterData({setCurrData, data}) {
    const [triggerClicked, setTriggerClicked] = useState(false);
    const [currTrigger, setCurrTrigger] = useState("Trigger reason");
    const [currRisk, setCurrRisk] = useState('Risk level');
    const [riskClicked, setRiskClicked] = useState(false);

    const handleTrigger = (value)=>{
        setCurrTrigger(value);
        if(value==='Trigger reason'){
            setCurrData(data);
        }else{
            setCurrData(
                data.filter((currItem)=>{return currItem.triggerReason==value;})
           )
        }
        setCurrRisk('Risk level');
        setTriggerClicked(false);
    }
    const handleRisk = (value)=>{
        setCurrRisk(value);
        if(value==='Risk level'){
            setCurrData(data);
        }else{
            setCurrData(
                data.filter((currItem)=>{return currItem.risk==value.toLowerCase();})
           )
        }
        setCurrTrigger('Trigger reason');
        setRiskClicked(false);
        
    }

  return (
    <div className="dashboard-filters">
        <span className='search-container'>
        <div className='search-icon'><IoSearchOutline /></div>
        
        <input  className='search-box' type="text" placeholder='Search' />
        </span>
        <div className="filter-option-container">
        <div className='filter-options' onClick={()=>{setTriggerClicked(!triggerClicked);setRiskClicked(false);}}>{currTrigger} {triggerClicked?<FaChevronUp />:<FaChevronDown />}</div>
        <div className={`filter-reasons ${triggerClicked?"option-active":""}`}>
            <ul>
                <li onClick={()=>handleTrigger('Trigger reason')}>All</li>
                <li onClick={()=>handleTrigger('IP Change')}>IP Change</li>
                <li onClick={()=>handleTrigger('FIFO')}>FIFO</li>
                {/* <li onClick={()=>handleTrigger('Un flag')}>Un flag</li>
                <li onClick={()=>handleTrigger('Reviewed')}>Reviewed</li> */}
            </ul>
        </div>
        </div>
        <div className="filter-option-container">
        <div className='filter-options' onClick={()=>{setRiskClicked(!riskClicked);setTriggerClicked(false);}}>{currRisk} {riskClicked?<FaChevronUp />:<FaChevronDown />}</div>
        <div className={`filter-reasons ${riskClicked?"option-active":""}`}>
            <ul>
                <li onClick={()=>handleRisk('Risk level')}>All</li>
                <li onClick={()=>handleRisk('Low')}>Low</li>
                <li onClick={()=>handleRisk('Medium')}>Medium</li>
                <li onClick={()=>handleRisk('High')}>High</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default FilterData