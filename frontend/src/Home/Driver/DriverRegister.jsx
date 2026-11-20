
import { useState } from "react";
import "./DriverRegister.css";
import api from "../../api/axiosConfig";

const DriverRegister = () => {
  const [driver, setDriver] = useState({
    driverName: "",
    driverAge: "",
    driverEmailId: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDriver({
      ...driver,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!driver.driverName.trim() || !driver.driverEmailId.trim()) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (
      !driver.driverAge ||
      Number(driver.driverAge) <= 0 ||
      !Number.isInteger(Number(driver.driverAge))
    ) {
      setMessage("Please enter a valid age.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const driverRequest = {
        ...driver,
        driverAge: Number(driver.driverAge)
      };

      const response = await api.post(
        "/driver/add",
        driverRequest
      );

      console.log("Driver Response:", response.data);

      setMessage("Driver registered successfully!");

      setDriver({
        driverName: "",
        driverAge: "",
        driverEmailId: ""
      });

    } catch (error) {
      console.error("Driver Registration Error:", error);

      if (error.response) {
        setMessage(
          error.response.data?.message ||
          "Driver registration failed. Please try again."
        );
      } else if (error.request) {
        setMessage(
          "Unable to connect to the server. Please check Spring Boot."
        );
      } else {
        setMessage("Something went wrong. Please try again.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="driver-register-page">

      <div className="driver-register-info">
        <p className="driver-register-tag">JOIN OUR DRIVER COMMUNITY</p>

        <h1>Drive with Tripease.</h1>

        <p>
          Turn your driving skills into opportunities.
          Register with Tripease and become part of our
          growing driver community.
        </p>
      </div>

      <div className="driver-register-container">
        <h2>Driver Registration</h2>

        <p className="driver-register-subtitle">
          Enter your details to get started.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="driver-form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="driverName"
              placeholder="Enter your full name"
              value={driver.driverName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="driver-form-group">
            <label>Age</label>
            <input
              type="number"
              name="driverAge"
              placeholder="Enter your age"
              min="18"
              max="100"
              value={driver.driverAge}
              onChange={handleChange}
              required
            />
          </div>

          <div className="driver-form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="driverEmailId"
              placeholder="Enter your email"
              value={driver.driverEmailId}
              onChange={handleChange}
              required
            />
          </div>

          {message && (
            <p className="driver-register-message">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="driver-register-btn"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register as Driver"}
          </button>

        </form>
      </div>

    </div>
  );
};

export default DriverRegister;
