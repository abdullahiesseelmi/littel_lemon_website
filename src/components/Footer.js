import React from "react";
import logo from "../images/littlelemon_logo.png";
const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="" />
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>

        <div>
          <h3>Imortant Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservation</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              Address: <br />
              Mogadishu-Benadir-Somalia
            </li>
            <li>
              Phone: <br />
              +252 615 00 00 00
            </li>
            <li>
              Email: <br />
              cabdulahiise40@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="https://github.com/abdullahiesseelmi">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abdullahi-esse-elmi-a962b42a5/">
                Linkedin
              </a>
            </li>
            <li>
              <a href="  https://www.facebook.com/cabdulahi.ciise.754?mibextid=ZbWKwL">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
