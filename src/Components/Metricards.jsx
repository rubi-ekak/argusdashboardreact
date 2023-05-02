import React from "react";
import "./Metricards.css";
import { Icon } from "@iconify/react";

const Metricards = () => {
  return (
    <div className="pt-4 pb-4">
      <div className="small-div ">
        <div className="div active-card1">
          <div>
            <h5 class="card-title">Last Active</h5>
            <h6 class="card-subtitle mb-2 ">0 min ago</h6>
            <h4>Active</h4>
          </div>

          <div className="d-flex  justify-content-between p-2">
            <div className="card-itemactive d-flex align-items-center justify-content-center">
            <Icon icon="bx:wifi" />
            </div>
          </div>
          
        </div>
        <div className="div">
          <div>
            <h5 class="card-title">Total</h5>
            <div>
              <h2>13</h2>
            </div>

            <div className="d-flex">
              <div className="card-check2 d-flex align-items-center">
                <Icon icon="bx:check-double" />
              </div>
              <a href="#" className="text-decoration-none text-card pl-2">
                View Total number of people
              </a>
            </div>
          </div>
          <div className="d-flex  justify-content-between p-2">
            <div className="card-item2 d-flex align-items-center justify-content-center">
              <Icon icon="bxs:group" />
            </div>
          </div>
        </div>
        <div className="div">
          <div>
            <h5 class="card-title">Present</h5>
            <div>
              <h2>2</h2>
            </div>

            <div className="d-flex">
              <div className="card-check4 d-flex align-items-center">
                <Icon icon="bx:check" />
              </div>
              <a href="#" className="text-decoration-none text-card pl-2">
                View Today's Present People
              </a>
            </div>
          </div>
          <div className="d-flex  justify-content-between p-2">
            <div className="card-item3 d-flex align-items-center justify-content-center">
              <Icon icon="bx:smile" fontSize={{}} />
            </div>
          </div>
        </div>
        <div className="div">
          <div>
            <h5 class="card-title">Absent</h5>
            <div>
              <h2>0</h2>
            </div>

            <div className="d-flex">
              <div className="card-check4 d-flex align-items-center">
                <Icon icon="bx:check" />
              </div>
              <a href="#" className="text-decoration-none text-card pl-2">
                View Today's Absent People
              </a>
            </div>
          </div>
          <div className="d-flex  justify-content-between p-2">
            <div className="card-item3 d-flex align-items-center justify-content-center">
              <Icon icon="bx:smile" />
            </div>
          </div>
        </div>
        <div className="div">
          <div>
            <h5 class="card-title">Unknown</h5>
            <div>
              <h2>11</h2>
            </div>

            <div className="d-flex">
              <div className="card-check5 d-flex align-items-center">
                <Icon icon="bx:block" />
              </div>
              {/* <div className="card-check2 d-flex align-items-center">
            <Icon icon="bx:check" />
            </div> */}
              <a href="#" className="text-decoration-none text-card pl-2">
                View Today's Unknown People
              </a>
            </div>
          </div>
          <div className="d-flex  justify-content-between p-2">
            <div className="card-item4 d-flex align-items-center justify-content-center">
              <Icon icon="bx:dizzy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metricards;
