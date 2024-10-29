import React from "react";
import pinch from '../2footer/pinch.png'
const Footer = () => {
  return (
    <footer style={{ width: "100%", marginBottom: "20px", padding: "20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        {/* Main content */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "20px" }}>
          {/* Footer Brand */}
          <h5 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E2E2E" }}>
           <img src ={pinch} />
          </h5>
          {/* Links Section */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {/* Product Links */}
            <ul>
              <p style={{ fontWeight: "bold", color: "rgb(115, 64, 96)" }}>Product</p>
              <li><a href="#" style={linkStyle}>Desert 🎂</a></li>
              <li><a href="#" style={linkStyle}>Spicy 🌶</a></li>
              <li><a href="#" style={linkStyle}>Vegetarian 🥚</a></li>
              <li><a href="#" style={linkStyle}>Non-Vegetarian 🍗</a></li>
            </ul>
            {/* Company Links */}
            <ul>
              <p style={{ fontWeight: "bold", color: "rgb(115, 64, 96)" }}>Company</p>
              <li><a href="#" style={linkStyle}>Buzzfeed</a></li>
              <li><a href="#" style={linkStyle}>Disney</a></li>
              <li><a href="#" style={linkStyle}>Press</a></li>
              <li><a href="#" style={linkStyle}>Cartoons</a></li>
            </ul>
            {/* Resource Links */}
            <ul>
              <p style={{ fontWeight: "bold", color: "rgb(115, 64, 96)" }}>Resource</p>
              <li><a href="#" style={linkStyle}>Blog</a></li>
              <li><a href="#" style={linkStyle}>Newsletter</a></li>
              <li><a href="#" style={linkStyle}>Events</a></li>
              <li><a href="#" style={linkStyle}>Help center</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px", borderTop: "1px solid #E5E5E5", marginTop: "20px" }}>
          <p style={{ fontSize: "0.875rem", color: "#737373" }}>
            © 2024 <a href={pinch} style={linkStyle}>Pinch of Yum</a>. All Rights Reserved.
          </p>
          {/* Social Icons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="#" style={iconStyle}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" style={iconStyle}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" style={iconStyle}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" style={iconStyle}>
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const linkStyle = {
  display: "block",
  padding: "4px 0",
  color: "#737373",
  fontSize: "0.875rem",
  textDecoration: "none",
  transition: "color 0.3s",
};

const iconStyle = {
  color: "#737373",
  fontSize: "1.25rem",
  transition: "color 0.3s, transform 0.3s",
  textDecoration: "none",
  // Hover effect for icons
  ":hover": {
    color: "#FF6347",
    transform: "scale(1.1)",
  },
};

export default Footer;
