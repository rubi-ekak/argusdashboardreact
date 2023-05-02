import React from "react";
import "./LargeCard1.css";
import Chart from "react-apexcharts";
import { Icon } from '@iconify/react';

const LargeCard1 = () => {
  return (
    <div>
      <div class="row p-2">
        <div class="col-sm-6 mb-3 mb-sm-0 col-md-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-center">Thinking of their feet <Icon icon="bx:info-circle" /></h4>
              <div className="mt-4">
                <ul className="">
                  <li className="d-flex justify-content-between align-items-center">
                    <a>
                      <img
                        src="https://www.dropbox.com/s/w84kmkzvx7du57u/PremJi.jpg?raw=1"
                        alt="image"
                        className="images"
                      ></img>
                    </a>
                    <span className="text-end">
                      <b>
                        <p>Prem ji</p>
                      </b>
                      <br></br>
                      18Times/Week
                    </span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center mt-4">
                    <a>
                      <img
                        src="https://www.dropbox.com/s/3nxdhbafbn1re7s/Anurag.jpg?raw=1"
                        alt="image"
                        className="images"
                      ></img>
                    </a>
                    <span className="text-end">
                      <b>
                        <p>Anurag</p>
                      </b>
                      <br></br>
                      12Times/Week
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6 mb-3 mb-sm-0 col-md-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-center">Marathon <Icon icon="bx:info-circle" /></h4>
              <div className="mt-4">
                <ul className="">
                  <li className="d-flex justify-content-between align-items-center">
                    <a>
                      <img
                        src="https://www.dropbox.com/s/w84kmkzvx7du57u/PremJi.jpg?raw=1"
                        alt="image"
                        className="images"
                      ></img>
                    </a>
                    <span className="text-end">
                      <b>
                        <p>Prem ji</p>
                      </b>
                      <br></br>
                      56Times/Week
                    </span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center mt-4">
                    <a>
                      <img
                        src="https://www.dropbox.com/s/3nxdhbafbn1re7s/Anurag.jpg?raw=1"
                        alt="image"
                        className="images"
                      ></img>
                    </a>
                    <span className="text-end">
                      <b>
                        <p>Anurag</p>
                      </b>
                      <br></br>
                      47Times/Week
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
              <h4 class="card-title">Weekly Footfall <Icon icon="bx:info-circle" /></h4>
              <div className="mt-4">
                <Chart
                  series={[
                    {
                      name: "company1",
                      data: [4, 1, 2, 3, 4, 5],
                    },
                    // {
                    //   name: "company2",
                    //   data: [100, 200, 232, 130, 420, 14],
                    // },
                  ]}
                  options={{
                    colors: ["#1778F2"],

                    xaxis: {
                      categories: [
                        "mon",
                        "tue",
                        "wed",
                        "thur",
                        "fri",
                        "sat",
                        "sun",
                      ],
                    },
                  }}
                  type="bar"
                  width={270}
                  height={255}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default LargeCard1;
