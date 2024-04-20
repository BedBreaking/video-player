import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    height: "80px",
    display: "flex",
    justifyContent: "Center",
    alignItems: "center",
    gap: "25px",
    cursor: "pointer",
    fontSize: "18px",
    background: "black",
    color: "#fff",
  };
  return (
    <div className="app-header" style={headerStyle}>
      <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
        <spna>Home</spna>
      </Link>
      <Link to="/mega" style={{ textDecoration: "none", color: "#fff" }}>
        <spna>Mega</spna>
      </Link>
      <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
        <spna>About</spna>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none", color: "#fff" }}>
        <spna>Contact</spna>
      </Link>
    </div>
  );
};

export default Header;
