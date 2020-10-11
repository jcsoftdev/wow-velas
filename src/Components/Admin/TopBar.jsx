import React from "react";

const TopBar = () => {
  return (
    <header className="topbar" data-navbarbg="skin6">
      <nav className="navbar top-navbar navbar-expand-md">
        <div className="navbar-header" data-logobg="skin6">
          {/* This is for the sidebar toggle which is visible on mobile only */}
          <a
            className="nav-toggler waves-effect waves-light d-block d-md-none"
            href="/"
          >
            <i className="ti-menu ti-close" />
          </a>
          {/* ============================================================== */}
          {/* Logo */}
          {/* ============================================================== */}
          <div className="navbar-brand">
            {/* Logo icon */}
            <a href="index.html">
              <b className="logo-icon">
                {/* Dark Logo icon */}
                <img
                  src="../assets/images/logo-icon.png"
                  alt="homepage"
                  className="dark-logo"
                />
                {/* Light Logo icon */}
                <img
                  src="../assets/images/logo-icon.png"
                  alt="homepage"
                  className="light-logo"
                />
              </b>
              {/*End Logo icon */}
              {/* Logo text */}
              <span className="logo-text">
                {/* dark Logo text */}
                <img
                  src="../assets/images/logo-text.png"
                  alt="homepage"
                  className="dark-logo"
                />
                {/* Light Logo text */}
                <img
                  src="../assets/images/logo-light-text.png"
                  className="light-logo"
                  alt="homepage"
                />
              </span>
            </a>
          </div>
          {/* ============================================================== */}
          {/* End Logo */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Toggle which is visible on mobile only */}
          {/* ============================================================== */}
          <a
            className="topbartoggler d-block d-md-none waves-effect waves-light"
            href="/"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ti-more" />
          </a>
        </div>
        {/* ============================================================== */}
        {/* End Logo */}
        {/* ============================================================== */}
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          {/* ============================================================== */}
          {/* toggle and nav items */}
          {/* ============================================================== */}
          <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
            {/* Notification */}
            {/* End Notification */}
            {/* ============================================================== */}
            {/* create new */}
            {/* ============================================================== */}
          </ul>
          {/* ============================================================== */}
          {/* Right side toggle and nav items */}
          {/* ============================================================== */}
          <ul className="navbar-nav float-right">
            {/* ============================================================== */}
            {/* Search */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* User profile and search */}
            {/* ============================================================== */}
            {/* Notification */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle pl-md-3 position-relative"
                href="/"
                id="bell"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>
                  <i data-feather="bell" className="svg-icon" />
                </span>
                <span className="badge badge-primary notify-no rounded-circle">
                  1
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-left mailbox animated bounceInDown">
                <ul className="list-style-none">
                  <li>
                    <div className="message-center notifications position-relative">
                      {/* Message */}
                      <a
                        href="/"
                        className="message-item d-flex align-items-center border-bottom px-3 py-2"
                      >
                        <div className="btn btn-primary rounded-circle btn-circle">
                          <i data-feather="mail" className="text-white" />
                        </div>
                        <div className="w-75 d-inline-block v-middle pl-2">
                          <h6 className="message-title mb-0 mt-1">Cliente</h6>
                          <span className="font-12 text-nowrap d-block text-muted">
                            Lorem ipsum dolor sit amet.{" "}
                          </span>
                          <span className="font-12 text-nowrap d-block text-muted">
                            9:30 AM
                          </span>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link pt-3 text-center text-dark"
                      href="/;"
                    >
                      <strong>Ver notificaciones</strong>
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* End Notification */}
            {/* ============================================================== */}
            {/* User profile and search */}
            {/* ============================================================== */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="../assets/images/users/profile-pic.jpg"
                  alt="user"
                  className="rounded-circle"
                  width={40}
                />
                <span className="ml-2 d-none d-lg-inline-block">
                  <span>Hola,</span>{" "}
                  <span className="text-dark">Jason Doe</span>{" "}
                  <i data-feather="chevron-down" className="svg-icon" />
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                <a className="dropdown-item" href="/">
                  <i data-feather="user" className="svg-icon mr-2 ml-1" />
                  Mi perfil
                </a>
                <a className="dropdown-item" href="/">
                  <i data-feather="power" className="svg-icon mr-2 ml-1" />
                  Cerrar sesión
                </a>
              </div>
            </li>
            {/* ============================================================== */}
            {/* User profile and search */}
            {/* ============================================================== */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
