import React from "react";
import LargeCard1 from "./LargeCard1";
import Largecards from "./Largecards";
import Metricards from "./Metricards";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react";
import "./Sidebar.css";
import { useState } from "react";

const Dashboard = () => {
    const [toggle,setToggle]=useState(false)

    const handletoggle=()=>{
         setToggle(!toggle)

    }
  return (
    <div>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2  px-0 bg-primary sidenav">
            <div class="d-flex flex-column align-items-center align-items-sm-start  pt-2 text-white min-vh-100 w-100">
              <a
                href="/"
                class="d-flex justify-content-center align-items-center  pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span class="fs-3 d-none d-sm-inline  text-center p-4 mx-4 text-white ml-4">
                  Argus
                </span>
              </a>
              <ul
                class="nav sidebar-item nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-white w-100"
                id="menu"
              >
                <li class="py-2 list-item ">
                  <a href="#" class="nav-link align-middle px-0 text-white">
                    <Icon icon="bx:grid-alt" />
                    <span class="ms-1 d-none d-sm-inline text-white p-4">
                      Dashboard
                    </span>
                  </a>
                </li>
                <li class="py-2 list-item">
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle text-white"
                  >
                    <Icon icon="bx:grid-alt" />{" "}
                    <span class="ms-1 d-none d-sm-inline p-4">Dashboard2</span>{" "}
                  </a>
                </li>
                <li class="py-2 list-item">
                  <a href="#" class="nav-link px-0 align-middle text-white">
                    <Icon icon="bx:coin-stack" />{" "}
                    <span class="ms-1 d-none d-sm-inline p-4">Orders</span>
                  </a>
                </li>
                <li class="py-2 list-item">
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle text-white"
                  >
                    <Icon icon="bx:user" />{" "}
                    <span class="ms-1 d-none d-sm-inline p-4">All Unknown</span>
                  </a>
                </li>
                <li class="py-2 list-item">
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle text-white"
                  >
                    <Icon icon="bx:user-pin" />{" "}
                    <span class="ms-1 d-none d-sm-inline p-4">User</span>
                  </a>
                </li>
                <li class="py-2 list-item">
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle text-white "
                  >
                    <Icon icon="bx:message-alt" />{" "}
                    <span class="ms-1 d-none d-sm-inline p-4">Messages</span>
                  </a>
                </li>
                <li class="py-2 list-item">
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle text-white "
                  >
                    <Icon icon="mdi:cog-outline" />{" "}
                    <span class="ms-1 d-none d-sm-inline p-4">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col p-0 home-content overflow-hidden">
            <Navbar handletoggle={ handletoggle }/>
            <div className="home-section bg-light ">
              <div>
                <div>
                  <Metricards />
                </div>
                <div>
                  <Largecards />
                </div>
                <div>
                  <LargeCard1 />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
