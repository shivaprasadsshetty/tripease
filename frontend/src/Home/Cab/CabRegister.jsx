
import { useState } from "react";
import "./CabRegister.css";
import api from "../../api/axiosConfig";

const CabRegister = () => {
  const [cab, setCab] = useState({
    driverId: "",
    cabNumber: "",
    cabModel: "",
    perKmRate: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCab({
      ...cab,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate Driver ID
    const driverId = Number(cab.driverId);

    if (
      !cab.driverId ||
      !Number.isInteger(driverId) ||
      driverId <= 0
    ) {
      setMessage("Please enter a valid Driver ID.");
      return;
    }

    // Validate Cab Details
    if (!cab.cabNumber.trim() || !cab.cabModel.trim()) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!cab.perKmRate || Number(cab.perKmRate) <= 0) {
      setMessage("Please enter a valid rate per kilometre.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      // Prepare request body
      const cabRequest = {
        cabNumber: cab.cabNumber,
        cabModel: cab.cabModel,
        perKmRate: Number(cab.perKmRate)
      };

      // Send POST request
      const response = await api.post(
        `/cab/add/driver-id/${driverId}`,
        cabRequest
      );

      console.log("Cab Response:", response.data);

      setMessage("Cab registered successfully!");

      // Clear form after successful registration
      setCab({
        driverId: "",
        cabNumber: "",
        cabModel: "",
        perKmRate: ""
      });

    } catch (error) {
      console.error("Cab Registration Error:", error);

      if (error.response) {
        setMessage(
          error.response.data?.message ||
          "Cab registration failed. Please try again."
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
    <div className="cab-register-page">

      <div className="cab-register-info">
        <p className="cab-register-tag">
          EXPAND YOUR OPPORTUNITIES
        </p>

        <h1>Register your cab with Tripease.</h1>

        <p>
          Add your vehicle to Tripease and make it available
          for customers looking for a comfortable ride.
        </p>
      </div>

      <div className="cab-register-container">

        <h2>Cab Registration</h2>

        <p className="cab-register-subtitle">
          Enter your vehicle details below.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Driver ID */}
          <div className="cab-form-group">
            <label>Driver ID</label>
            <input
              type="number"
              name="driverId"
              placeholder="Enter your Driver ID"
              min="1"
              value={cab.driverId}
              onChange={handleChange}
              required
            />
          </div>

          {/* Cab Registration Number */}
          <div className="cab-form-group">
            <label>Cab Registration Number</label>
            <input
              type="text"
              name="cabNumber"
              placeholder="e.g. KA01AB1234"
              value={cab.cabNumber}
              onChange={handleChange}
              required
            />
          </div>

          {/* Cab Model */}
          <div className="cab-form-group">
            <label>Cab Model</label>
            <input
              type="text"
              name="cabModel"
              placeholder="e.g. Maruti Suzuki Dzire"
              value={cab.cabModel}
              onChange={handleChange}
              required
            />
          </div>

          {/* Rate Per Kilometre */}
          <div className="cab-form-group">
            <label>Rate Per Kilometre (₹)</label>
            <input
              type="number"
              name="perKmRate"
              placeholder="Enter rate per km"
              min="0.01"
              step="0.01"
              value={cab.perKmRate}
              onChange={handleChange}
              required
            />
          </div>

          {message && (
            <p className="cab-register-message">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="cab-register-btn"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register Cab"}
          </button>

        </form>
      </div>

    </div>
  );
};

export default CabRegister;
