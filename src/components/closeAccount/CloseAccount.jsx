import React, { useEffect, useState } from 'react'
import './closeAccount.css';
import { RxCross2 } from "react-icons/rx";

function CloseAccount({handleCloseClick}) {
    const [data, setData] = useState({
        email: "",
        uar:"",
        reason:"",
        note:"",
        closurefee:false
    });
    const [disableBtn, setDisableBtn] = useState(false);
    const handleChange = (e)=>{
        setData(prevData=>({...prevData, [e.target.name]:e.target.value}));
    }
    const handleClose=()=>{
        handleCloseClick(true);
        alert(data.email+ ' is closed, testing!');
        setData({
            email: "",
            uar:"",
            reason:"",
            note:"",
            closurefee:false
        });

    }
    useEffect(()=>{
        console.log(data);
        if(data.email!=="" && data.uar!=="" && data.reason!==""){
            setDisableBtn(false);
        }
        else setDisableBtn(true);
    },[data]);
  return (
    <div className='closeAccount-container'>
        <div className="close-box">
            <div className="header">
                <span>Close Account</span>
                <button onClick={handleCloseClick}><RxCross2 /></button>
            </div>
            <div className="form">
                <span>Email</span>
                <input className='input-email' type="email" name="email" value={data.email} onChange={handleChange}id="" />
                <div className="uar-option">
                    <span>Want to file UAR</span>
                    <div>
                        <input type="radio" name="uar" id="uar" value="yes" onClick={handleChange}/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" name="uar" id="uar" value="no" onClick={handleChange}/>
                        <label for="no">No</label>
                    </div>
                    
                </div>
                <span>Reason</span>
                <input className='input-reason' name='reason' value={data.reason} type="text" onChange={handleChange} />

                <span>Note</span>
                <textarea name="note" id="" cols="30" rows="5" value={data.note} onChange={handleChange}></textarea>

                <div className='form-footer'>
                    <div>
                        <input type="radio" name="closurefee" value={true} id="feeCharge" onClick={handleChange}/>
                        <label for="feeCharge"> Charge Closure fee</label>
                    </div>
                    <button onClick={handleClose} className={`${disableBtn?"":"btn-active"}`} disabled={disableBtn}>Close Account</button>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default CloseAccount