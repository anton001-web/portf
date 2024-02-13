import React from "react";
import { LinkedInIco } from "../LinkedInIco";
import { InstIco } from "../InstIco";
import { Form } from "../form/Form";

export const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer-body">
          <h1 className="footer-title">Contacts</h1>
          <Form />
          <span className="footer-subTitle">
            Want to know more or just communicate <br />
            You are welcome!
          </span>
          <a className="footer-btn" href="tel:0999096899">
            Phone me !
          </a>
          <div className="footer-socialM__list">
            <a
              className="footer-socialM__list-item"
              href="https://www.instagram.com/anton__reva/"
              target="_blank"
            >
              <InstIco />
            </a>
            <a
              className="footer-socialM__list-item"
              href="https://www.linkedin.com/in/%D0%B0%D0%BD%D1%82%D0%BE%D0%BD-%D1%80%D0%B5%D0%B2%D0%B0-a0a95823b/"
              target="_blank"
            >
              <LinkedInIco />
            </a>
          </div>
          <p className="footer-underSM__text">
            Follow me on Instagram and LinkedIn
          </p>
        </div>
      </div>
    </footer>
  );
};
