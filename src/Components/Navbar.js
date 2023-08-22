import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a className="navbar-brand mx-2 " href="#">
        {props.title}
      </a>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              aria-checked="true"
              onClick={props.toggleMode2}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label text-gray"
              htmlFor="flexSwitchCheckDefault"
            >
              Change Mode
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              aria-checked="true"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label text-gray"
              htmlFor="flexSwitchCheckDefault"
            >
              Change Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string,
//   aboutText: PropTypes.string,
//   search: PropTypes.string,
// };
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  search: PropTypes.string,
};

// Navbar.defaultProps = {
//   title: "Title",
//   aboutText: " About Text here ",
// };
