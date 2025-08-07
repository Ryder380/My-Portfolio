import React from "react";

function Navbar() {
  
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar-example",
  });

  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="navbar-example">
      <div className="container-fluid mx-lg-5">
        <p className="navbar-brand text-white fw-bold fs-4 pb-0 mb-0">
          Kalindu. 
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon d-flex align-items-center justify-content-center">
             <i className="fas fa-bars text-white" ></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#scrollspyHeading1"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading2">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading3">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading4">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading5">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading6">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
