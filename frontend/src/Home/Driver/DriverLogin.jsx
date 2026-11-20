
import { useState } from "react";
import { Link } from "react-router-dom";
import "./DriverLogin.css";

const DriverLogin = () => {
  const [credentials, setCredentials] = useState({
    driverEmailId: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Login UI completed! Authentication will be implemented later.");
  };

  return (
    <div className="driver-login-page">

      <div className="driver-login-info">
        <p className="driver-login-tag">WELCOME BACK, DRIVER</p>

        <h1>Your next ride starts here.</h1>

        <p>
          Log in to your Tripease account and get ready
          to connect with customers and manage your rides.
        </p>
      </div>

      <div className="driver-login-container">
        <h2>Driver Login</h2>

        <p className="driver-login-subtitle">
          Enter your credentials to continue.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="driver-login-form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="driverEmailId"
              placeholder="Enter your email"
              value={credentials.driverEmailId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="driver-login-form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          {message && (
            <p className="driver-login-message">{message}</p>
          )}

          <button type="submit" className="driver-login-btn">
            Login
          </button>

        </form>

        <p className="driver-login-register">
          Don't have an account?{" "}
          <Link to="/driver/register">Register as a driver</Link>
        </p>

      </div>

    </div>
  );
};

export default DriverLogin;
