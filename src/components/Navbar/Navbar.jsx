import React from "react";
import classes from "./Navbar.module.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // <!-- Navbar -->
    <div style={{ marginBottom: "15px" }}>
      <div className={classes.navbar}>
        <div>
          <img
            src={logo}
            alt=""
            width="50"
            height="50"
            className="Logo"
            style={{ marginTop: "20px", marginLeft: "10px" }}
            onClick
          />
          <Link to="/"></Link>
        </div>
        <h3 style={{ marginTop: "27px", marginLeft: "20px", color: "black" }}>
          eLearn
        </h3>
        <ul className={classes.Links}>
          <li style={{ fontWeight: "bolder", color: "black" }}>
            <Link
              to="/Home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </li>
          <li
            style={{ marginLeft: "15px", fontWeight: "bolder", color: "white" }}
          >
            <Link
              to="/Contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Link>
          </li>
          <li style={{ marginLeft: "15px", fontWeight: "bolder" }}>
            <Link
              to="/Courses"
              style={{ textDecoration: "none", color: "black" }}
            >
              Courses
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
