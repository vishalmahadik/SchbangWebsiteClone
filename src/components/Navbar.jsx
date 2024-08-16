import React from "react";
import logo from "./../assets/logo.gif";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav   ms-auto align-items-center  mb-2 gap-lg-5 gap-0 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Work
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Solution 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Solution 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Solution 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Resource 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Resource 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Resource 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Resource 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Resource 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Resource 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <form className="d-flex">
                  <button
                    className="btn contact-btn  btn-outline-dark"
                    type="submit"
                  >
                    Contact Us &nbsp; <span className="biggi">→</span>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
