import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Live Chat</span>
      <div className="user">
        <img
          src="https://www.edarabia.com/wp-content/uploads/2015/11/7-ways-to-become-the-person-everyone-respects.jpg"
          alt=""
        />
        <span>Mary</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
