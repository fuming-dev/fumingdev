import React from 'react'
import './footer.css'
import { FaAngleUp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodepen} from "react-icons/si";


const Footer = () => {
    return (
      <div className="footer-Container">
        <div class="link-container">
          <div class="icon">

          </div>
          <div class="icon">
            <a href="https://codepen.io/enfieldxd">
              <SiCodepen
              size={32}/>
            </a>
          </div>
          <div class="icon">
            <a href="https://github.com/fuming-dev">
              <FaGithub
              size={32}/>
            </a>
          </div>
          <div class="icon">
            <a href="#Home">
              <FaAngleUp
              size={32}/>
            </a>
          </div>
          Fuming&copy;2020

        </div>

      </div>
    );
}

export default Footer
