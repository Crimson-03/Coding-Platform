import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Code Your Way</span>
        </a>

        <ul className="nav nav-pills">
          {!localStorage.getItem("token") ? (
            <>
              <li className="nav-item mx-1">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink to="/signup" className="nav-link">
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink to="/login" className="nav-link">
                  Log In
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item mx-1">
                <NavLink to="/problems" className="nav-link">
                  Problems
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink to="/codes" className="nav-link">
                  Codes
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <button
                  to="/"
                  className="nav-link btn btn-primary"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </li>
            </>
          )}
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
