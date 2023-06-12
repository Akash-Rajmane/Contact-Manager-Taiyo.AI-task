import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import "./sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <span>
        <GiHamburgerMenu
          className="absolute left-3.5 top-3.5 text-3xl"
          onClick={showSidebar}
        />
      </span>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className={"closeIcon"}>
          <AiFillCloseCircle onClick={showSidebar} />
        </div>
        <ul className={"nav-menu-items"}>
          <li className="nav-text">
            <NavLink to={"/"}>Contacts</NavLink>
          </li>
          <li className="nav-text">
            <NavLink to={"/charts"}>Charts & Maps</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
