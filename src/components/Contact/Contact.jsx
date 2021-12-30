import React from "react";
import "./contact.css";

import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact-container" id="Contact">
      <h1>Contact Me</h1>
      <div className="border-top"></div>
      <p>Currently available for work</p>
      <div className="btn">
        <button>
          <FiMail size={24} />
          <a href="mailto: fuming.dev@gmail.com">Email Here</a>
        </button>

      </div>
      
    </div>

  );
};

export default Contact;
