import React from "react";
import "./Largecards.css";
import Chart from 'react-apexcharts'
import { Icon } from '@iconify/react';


const Largecards = ({ chartData }) => {
  return (
    <div>
      <div class="row ">
        <div class="col-sm-6 col-md-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-center">Total attendence summary</h4>
              <div className="chart-section">
              <Chart 
                type="pie"
             width={350}
             height={570}
              series={[23,24]}
            options={{
             labels:["Present","Absent"],
             colors:["#1778F2","#FF0000"]
             
            }} />

              </div>
              
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-3 mb-sm-0 col-md-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-center">Early Bird <Icon icon="bx:info-circle" /></h4>
              <div className="mt-4">
              <ul className="">
                <li className="d-flex justify-content-between align-items-center">
                    <a >
                        <img src="https://www.dropbox.com/s/w84kmkzvx7du57u/PremJi.jpg?raw=1" alt="image"  className="images"></img>
                    </a>
                    <span className="text-end">
                        <b><p>Prem ji</p></b>
                        <br></br>
                        6Times/Week
                    </span>
                </li>
                <li className="d-flex justify-content-between align-items-center mt-4">
                    <a >
                        <img src="https://www.dropbox.com/s/3nxdhbafbn1re7s/Anurag.jpg?raw=1" alt="image"  className="images"></img>
                    </a>
                    <span className="text-end">
                        <b><p>Anurag</p></b>
                        <br></br>
                        6Times/Week
                    </span>
                </li>
              </ul>

              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-3 mb-sm-0 col-md-4">
          <div class="card">
            <div class="card-body text-center">
              <h4 class="card-title">Total Report</h4>
              <div className="mt-4">
                <ul className="unorder-box">
                <li className="d-flex justify-content-between align-items-center mb-2">
                   <span>9</span>
                    <span className="text-end"> 
                        Absent
                    </span>
                </li>
                <li className="d-flex justify-content-between align-items-center  mb-2">
                   <span>9</span>
                    <span className="text-end">
                        {/* <b><p>Prem ji</p></b>
                        <br></br> */}
                        Present
                    </span>
                </li>
                </ul>
                <hr></hr>
                <ul>
                <li className="d-flex justify-content-between align-items-center  mb-2">
                   <span>Business Day of Month</span>
                    <span className="text-end">
                        {/* <b><p>Prem ji</p></b>
                        <br></br> */}
                        <b>Employee</b>
                    </span>
                </li>
                <li className="d-flex justify-content-between align-items-center  mb-2">
                   <span><b>Date</b></span>
                    <span className="text-end">
                      
                        Present
                    </span>
                </li>
                
                </ul>
                <hr></hr>
                <ul>
                <li className="d-flex justify-content-between align-items-center  mb-2">
                   <span>Most Zen of Month</span>
                    <span className="text-end">
                        
                        <b>0</b>
                    </span>
                </li>
                <li className="d-flex justify-content-between align-items-center  mb-2">
                   <span><b>1-07-2022</b></span>
                    <span className="text-end">
                       
                        Present
                    </span>
                </li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Largecards;
