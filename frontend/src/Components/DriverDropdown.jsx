
import { useState } from "react";
import { Link } from "react-router-dom";

const DriverDropdown=()=> {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">

      <button
        className="dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        Driver
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">

          <Link
            to="/driver/register"
            onClick={() => setIsOpen(false)}
          >
            Register as Driver
          </Link>

          <Link
            to="/cab/register"
            onClick={() => setIsOpen(false)}
          >
            Register a Cab
          </Link>

          <Link
            to="/driver/login"
            onClick={() => setIsOpen(false)}
          >
            Driver Login
          </Link>

        </div>
      )}

    </div>
  );
}

export default DriverDropdown;
