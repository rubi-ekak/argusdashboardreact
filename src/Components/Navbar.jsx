import React from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";

const Navbar = ({ handletoggle }) => {
  return (
    <section>
      <nav class="navbar navbar-expand-lg  bg-nav w-100  navposition">
        <div class="container-fluid d-flex">
          <a class="navbar-brand d-block" onClick={handletoggle}>
            <span className="dashbaord-title">
              <Icon icon="bx:menu" />
            </span>
          </a>
          <a class="navbar-brand d-md-block" href="#">
            <span className="dashbaord-title"> Dashboard</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex align-items-center justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav  px-4 ">
            <li class="nav-item mt-2 mx-2 d-flex align-items-center">
            <div class="btn-group">
            <button class="btn btn-secondary btn-sm" type="button">
              Argus
            </button>            
            <select
                  class="form-select border border-start-0 form-select-sm rounded-end "
                  aria-label="Default select example"
                  type="button"


                >
                
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                 
                </select>
            <ul class="dropdown-menu">...</ul>
          </div>
              </li>

              <li class="nav-item mt-2 mx-2 d-flex align-items-center px-2">
                <span className="bellspan p-1">
                  <Icon icon="mdi:bell" style={{}} />
                </span>
              </li>
              <li class="nav-item mt-2 mx-2">
                <a class="nav-link" href="#">
                  <img src="https://argus-alpha-build.herokuapp.com/static/Ekak-07.png"></img>
                </a>
              </li>
            </ul>
          </div>

          
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
