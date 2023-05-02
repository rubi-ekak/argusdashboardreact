import React from "react";
import "./Sidebar.css";
import GridViewIcon from "@mui/icons-material/GridView";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  return (
    // <div>
    //     <div className="d-flex align-items-center justify-content-center"><label className="p-4">Argus</label></div>

    //   <ul className="unorder-list">
    //     <li className="navbar-list">
    //       <a className="navbar-items" href="#">
    //         <Icon icon="bx:grid-alt" /> <span className="p-4"> Dashboard</span>
    //       </a>
    //     </li>

    //     <li className="navbar-list ">
    //       <a className="navbar-items" href="#">
    //         <Icon icon="bx:grid-alt" />
    //         <span className="p-4"> Dashboard2</span>
    //       </a>
    //     </li>
    //     <li className="navbar-list">
    //       <a className="navbar-items" href="#">
    //         <Icon icon="bx:coin-stack" />
    //         <span className="p-4">Report</span>
    //       </a>
    //     </li>
    //     <li className="navbar-list">
    //       <a className="navbar-items" href="#">
    //         <Icon icon="bx:user" />
    //         <span className="p-4">Team</span>
    //       </a>
    //     </li>
    //     <li className="navbar-list">
    //       <a className="navbar-items" href="#">
    //         <Icon icon="bx:user-pin" />
    //         <span className="p-4">All Unknown</span>
    //       </a>
    //     </li>

    //     <li className="navbar-list">
    //       <a className="navbar-items" href="#">
    //         <Icon icon="bx:message-alt" />
    //         <span className="p-4">Messages</span>
    //       </a>
    //     </li>
    //     <li className="navbar-list">
    //       <a className="navbar-items" href="#">
    //         <Icon icon="mdi:cog-outline" />
    //         <span className="p-4">Settings</span>
    //       </a>
    //     </li>
    //     <li className="navbar-list">
    //       <a className="navbar-items" href="#">
    //         <Icon icon="bx:user-plus" />
    //         <span className="p-4">OnBoarding</span>
    //       </a>
    //     </li>
    //     <li className="navbar-list">
    //       <a className="navbar-items" href="#">
    //         <Icon icon="bx:log-out" />
    //         <span className="p-4">logout</span>
    //       </a>
    //     </li>
    //   </ul>
    // </div>

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
  );
};

export default Sidebar;
