import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import './dashboardMonitor.css';
// import data from '../../data';
function DashboardMonitor({data}) {
  return (
    <div className="dashboard-table">
        <table>
            
        <tr>
            <th>User</th>
            <th>
            <div className='header-updown'>
                <span>Risk level</span>
                <div className='up-down'>
                <IoIosArrowUp />
                <div className='down'><IoIosArrowDown /></div>
                </div>
            </div>
            
            </th>
            <th>Trigger reason</th>
            <th>
            <div className='header-updown'>
                <span>In queue for</span> 
                <div className='up-down'>
                    <IoIosArrowUp />
                    <div className='down'><IoIosArrowDown /></div>
                </div>
            </div>
            
            </th>
            <th>
            <div className='header-updown'>
                <span>Date added on</span> 
                <div className='up-down'>
                    <IoIosArrowUp />
                    <div className='down'><IoIosArrowDown /></div>
                </div>
            </div>
            </th>
            <th>Previously reviewed</th>
        </tr>

        {data?.map((item)=>{
                return <tr>
                <td className='user'>
                <div className='user-detail'>
                    <h2>{item.username}</h2>
                    <p>{item.email}</p>
                </div>
                <td className='user-link'><FaExternalLinkAlt /></td>
                </td>
                <td className={`${item.risk}`} ><FaCircle /><span className='risk-level'>{item.risk}</span></td>
                <td>{item.triggerReason}</td>
                <td>{item.queuefor} Days</td>
                <td className='added-date'>{item.addedDate}</td>
                <td className='reviewed'>
                <div>
                    <p className='review-status'>{item.PrevReviewed?"Yes":"No"}</p>
                    {item.PrevReviewed && <p className='review-date'>{item.PrevReviewDate}</p>}
                </div>
                </td>
            </tr>
            })}
        
        
        </table>
    </div>
  )
}

export default DashboardMonitor