import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar(props) {
  let color =
    props.mode === "Black"
      ? "White"
      : props.mode === "Green"
      ? "#62f734"
      : props.mode === "Red"
      ? "#ff3333"
      : props.mode === "Blue"
      ? "#497af5"
      : "Black";
  return (
    <>
    <nav
      className="navbar navbar-expand-lg "
      style={{
        backgroundColor:
          props.mode === "Black"
            ? "black"
            : props.mode === "Green"
            ? "#012102"
            : props.mode === "Red"
            ? "#540606"
            : props.mode === "Blue"
            ? "#02013b"
            : "grey",
      }}
    >
      <div className="container-fluid">
        <div className="navbar-brand" style={{ color: color }}>
          <strong>{props.heading}</strong>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{backgroundColor:"darkgray"}}
        >
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: color }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: color }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ color: color }}>
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="form-check form-switch">
              <input
                className="form-control form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={{ color: color }}
              >
                Dark Mode : <b>{props.mode==="Black"?"On":"Off"}</b>
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}
