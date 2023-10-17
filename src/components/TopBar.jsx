import React from "react";
import "./TopBar.css";
import { MdNotificationsActive } from "react-icons/md";
const TopBar = () => {
  return (
    <nav className="navbar">
      <h3 className="toptitle"> TopBar Title</h3>
      <div className="navbar_links">
        <h3 className="lia">Student</h3>
        <MdNotificationsActive
          color="blueviolet"
          fontSize={24}
          className="notify"
        />
        <h3 className="lia profile"> SM </h3>
      </div>
    </nav>
  );
};

export default TopBar;
