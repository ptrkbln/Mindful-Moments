import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-flex-wrapper">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <div className="social-media-wrapper">
          <h3>Follow us on</h3>
          <a href="#">
            <i class="fa-brands fa-facebook fa-xl"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram fa-xl"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-x-twitter fa-xl"></i>
          </a>
        </div>
      </div>
      <p className="copyright">
        <small>
          © Copyrights {new Date().getFullYear()} by Mindful Moments. All rights
          reserved.
        </small>
      </p>
    </footer>
  );
}
