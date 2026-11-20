
import { useState } from "react";
import "./Booking.css";
import api from "../../api/axiosConfig";
const Booking = () => {
  const [booking, setBooking] = useState({
    customerId: "",
    pickUp: "",
    destination: "",
    tripDistanceInKm: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBooking({
      ...booking,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate Customer ID
    const customerId = Number(booking.customerId);

    if (
      !booking.customerId ||
      !Number.isInteger(customerId) ||
      customerId <= 0
    ) {
      setMessage("Please enter a valid Customer ID.");
      return;
    }

    // Validate Pickup and Destination
    if (!booking.pickUp.trim() || !booking.destination.trim()) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (
      booking.pickUp.trim().toLowerCase() ===
      booking.destination.trim().toLowerCase()
    ) {
      setMessage("Pickup and destination cannot be the same.");
      return;
    }

    // Validate Distance
    const distance = Number(booking.tripDistanceInKm);

    if (!booking.tripDistanceInKm || !Number.isFinite(distance) || distance <= 0) {
      setMessage("Enter a valid trip distance.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      // Prepare request body
      const bookingRequest = {
        pickUp: booking.pickUp.trim(),
        destination: booking.destination.trim(),
        tripDistanceInKm: distance
      };

      // Send POST request
      const response = await api.post(
        `/booking/book/customer-id/${customerId}`,
        bookingRequest
      );

      console.log("Booking Response:", response.data);

      setMessage("Cab booked successfully!");

      // Clear form after successful booking
      setBooking({
        customerId: "",
        pickUp: "",
        destination: "",
        tripDistanceInKm: ""
      });

    } catch (error) {
      console.error("Booking Error:", error);

      if (error.response) {
        setMessage(
          error.response.data?.message ||
          "Booking failed. Please try again."
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
    <div className="booking-page">

      <div className="booking-info">
        <p className="booking-tag">YOUR JOURNEY STARTS HERE</p>

        <h1>Book your ride with Tripease.</h1>

        <p>
          Enter your journey details and get ready for
          a comfortable ride.
        </p>
      </div>

      <div className="booking-container">

        <h2>Book a Ride</h2>

        <p className="booking-subtitle">
          Enter your journey details below.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Customer ID */}
          <div className="booking-form-group">
            <label>Customer ID</label>
            <input
              type="number"
              name="customerId"
              placeholder="Enter your Customer ID"
              min="1"
              value={booking.customerId}
              onChange={handleChange}
              required
            />
          </div>

          {/* Pickup Location */}
          <div className="booking-form-group">
            <label>Pickup Location</label>
            <input
              type="text"
              name="pickUp"
              placeholder="Enter pickup location"
              value={booking.pickUp}
              onChange={handleChange}
              required
            />
          </div>

          {/* Destination */}
          <div className="booking-form-group">
            <label>Destination</label>
            <input
              type="text"
              name="destination"
              placeholder="Enter destination"
              value={booking.destination}
              onChange={handleChange}
              required
            />
          </div>

          {/* Distance */}
          <div className="booking-form-group">
            <label>Distance (km)</label>
            <input
              type="number"
              name="tripDistanceInKm"
              placeholder="Enter distance"
              min="0.1"
              step="0.1"
              value={booking.tripDistanceInKm}
              onChange={handleChange}
              required
            />
          </div>

          {message && (
            <p className="booking-message">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="booking-submit-btn"
            disabled={loading}
          >
            {loading ? "Booking..." : "Find a Ride"}
          </button>

        </form>
      </div>

    </div>
  );
};

export default Booking;
