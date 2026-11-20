import React from 'react'
import { useState } from "react";

const CustomerDropdown=()=> {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        Customer
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <a href="/customer/register">Register</a>
          <a href="/customer/login">Login</a>
        </div>
      )}
    </div>
  );
}

export default CustomerDropdown;
