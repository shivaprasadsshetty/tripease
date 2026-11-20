
import { useState } from "react";
import "./CustomerRegister.css";
import api from "../../api/axiosConfig";

const CustomerRegister = () => {
  const [customer, setCustomer] = useState({
    customerName: "",
    customerEmailId: "",
    customerAge: "",
    customerGender: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCustomer({
      ...customer,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const customerRequest = {
        ...customer,
        customerAge: Number(customer.customerAge)
      };

      const response = await api.post(
        "/customer/add",
        customerRequest
      );

      setMessage(
        `Registration successful! Welcome, ${response.data.customerName}.`
      );

      setCustomer({
        customerName: "",
        customerEmailId: "",
        customerAge: "",
        customerGender: ""
      });

    } catch (error) {
      console.error("Registration error:", error);

      setMessage(
        error.response?.data?.message ||
        "Registration failed. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="customer-register-page">

      <div className="customer-register-info">
        <p className="customer-register-tag">
          START YOUR JOURNEY
        </p>

        <h1>Join Tripease today.</h1>

        <p>
          Create your account and enjoy convenient
          rides with Tripease.
        </p>
      </div>

      <div className="customer-register-container">
        <h2>Customer Registration</h2>

        <p className="customer-register-subtitle">
          Enter your details to get started.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="customer-form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="customerName"
              value={customer.customerName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="customer-form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="customerEmailId"
              value={customer.customerEmailId}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="customer-form-group">
            <label>Age</label>
            <input
              type="number"
              name="customerAge"
              value={customer.customerAge}
              onChange={handleChange}
              min="1"
              max="120"
              placeholder="Enter your age"
              required
            />
          </div>

          <div className="customer-form-group">
            <label>Gender</label>
            <select
              name="customerGender"
              value={customer.customerGender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          {message && (
            <p>{message}</p>
          )}

          <button
            type="submit"
            className="customer-register-btn"
            disabled={loading}
          >
            {loading ? "Registering..." : "Create Account"}
          </button>

        </form>
      </div>

    </div>
  );
};

export default CustomerRegister;
