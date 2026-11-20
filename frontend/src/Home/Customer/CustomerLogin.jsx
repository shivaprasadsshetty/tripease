
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CustomerLogin.css";

const CustomerLogin = () => {

  const [credentials, setCredentials] = useState({
    customerEmailId: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login UI completed! Authentication will be implemented later.");
  };

  return (
    <div className="customer-login">

      <div className="login-intro">
        <h1>Welcome Back to <span>Tripease</span></h1>

        <h2>Your next journey awaits.</h2>

        <p>
          Log in to manage your rides, explore available
          cabs and enjoy a convenient travel experience.
        </p>

        <div className="login-icon">🚕</div>
      </div>

      <div className="login-form-section">

        <form className="login-form" onSubmit={handleSubmit}>

          <h2>Customer Login</h2>

          <p className="login-subtitle">
            Enter your credentials to continue.
          </p>

          <div className="login-input-group">
            <label htmlFor="customerEmailId">Email Address</label>

            <input
              type="email"
              id="customerEmailId"
              name="customerEmailId"
              placeholder="Enter your email"
              value={credentials.customerEmailId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-input-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-submit">
            Login
          </button>

          <p className="register-link">
            Don't have an account?{" "}
            <Link to="/customer/register">Register</Link>
          </p>

        </form>

      </div>

    </div>
  );
};

export default CustomerLogin;
