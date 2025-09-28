import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-col footer-about">
          <h2>CS — Ticket System</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Section */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Sales</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Products & Services</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Download Apps</a></li>
          </ul>
        </div>

        {/* Information Section */}
        <div className="footer-col">
          <h3>Information</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-col">
          <h3>Social Links</h3>
          <ul>
            <li><i class="fa-brands fa-x-twitter"></i> @CS — Ticket System</li>
            <li><i className="fa-brands fa-linkedin"></i> @CS — Ticket System</li>
            <li><i className="fa-brands fa-facebook"></i> @CS — Ticket System</li>
            <li><i className="fa-solid fa-envelope"></i> support@cst.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
