import React from "react";

import {Link} from 'react-router-dom'

const Siderbar = () => {
  return (
    <aside className="left-sidebar" data-sidebarbg="skin6">
      {/* Sidebar scroll*/}
      <div className="scroll-sidebar" data-sidebarbg="skin6">
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav">
        
          <ul id="sidebarnav">
            <li className="sidebar-item">
              {" "}
              <a
                className="sidebar-link"
                href="index.html"
                aria-expanded="false"
              >
                <i data-feather="home" className="feather-icon" />
                <span className="hide-menu">Dashboard</span>
              </a>
            </li>
            <li className="list-divider" />
            <li className="nav-small-cap">
              <span className="hide-menu">Módulos</span>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link sidebar-link"
                // href="empleados.html"
                to="/"

                aria-expanded="false"
              >
                <i data-feather="users" className="feather-icon" />
                <span className="hide-menu">Empleados</span>
              </Link>
            </li>
            
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
  );
};

export default Siderbar;
