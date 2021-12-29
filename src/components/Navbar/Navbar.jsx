import "./navbar.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";


const Navbar = () => {
  const [showNav, setshowNav] = useState(false);

  return (
    <div id="Home">
      <nav>
        <div className="desktop-view">
          <ul>
            <li>
              <a href="/portfolio/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="mobile-view">
          {
          
          showNav ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setshowNav(false)}
            />
          ) :(
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setshowNav(true)}
            />
          )}
          {showNav ? (
            <ul onClick={() => setshowNav(false)}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          ):''}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
