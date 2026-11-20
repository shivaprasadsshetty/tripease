
import { useState } from "react";
import "./BookingForm.css";
import api from "../../api/axiosConfig";

const BookingForm = () => {
  const [booking, setBooking] = useState({
    customerId: "",
    pickUp: "",
    destination: "",
    tripDistanceInKm: "",
    travelDate: ""
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

    const customerId = Number(booking.customerId);

    if (!Number.isInteger(customerId) || customerId <= 0) {
      setMessage("Please enter a valid Customer ID.");
      return;
    }

    if (
      booking.pickUp.trim().toLowerCase() ===
      booking.destination.trim().toLowerCase()
    ) {
      setMessage("Pickup and destination cannot be the same.");
      return;
    }

    if (Number(booking.tripDistanceInKm) <= 0) {
      setMessage("Enter a valid trip distance.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const bookingRequest = {
        pickUp: booking.pickUp.trim(),
        destination: booking.destination.trim(),
        tripDistanceInKm: Number(booking.tripDistanceInKm)
      };

      const response = await api.post(
        `/booking/book/customer-id/${customerId}`,
        bookingRequest
      );

      console.log("Booking Response:", response.data);

      setMessage("Your cab has been booked successfully!");

      setBooking({
        customerId: "",
        pickUp: "",
        destination: "",
        tripDistanceInKm: "",
        travelDate: ""
      });

    } catch (error) {
      console.error("Booking Error:", error);

      if (error.response) {
        setMessage(
          error.response.data?.message ||
          "Booking failed. Please try again."
        );
      } else if (error.request) {
        setMessage("Unable to connect to the server.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-card">

      <h2>Book Your Ride</h2>

      <p className="booking-subtitle">
        Enter your journey details
      </p>

      <form onSubmit={handleSubmit}>

        <div className="booking-input-group">
          <label>Customer ID</label>
          <input
            type="number"
            name="customerId"
            placeholder="Enter Customer ID"
            min="1"
            value={booking.customerId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="booking-input-group">
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

        <div className="booking-input-group">
          <label>Drop Location</label>
          <input
            type="text"
            name="destination"
            placeholder="Enter destination"
            value={booking.destination}
            onChange={handleChange}
            required
          />
        </div>

        <div className="booking-input-group">
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

        <div className="booking-input-group">
          <label>Travel Date</label>
          <input
            type="date"
            name="travelDate"
            value={booking.travelDate}
            onChange={handleChange}
            required
          />
        </div>

        {message && (
          <p className="booking-message">{message}</p>
        )}

        <button
          type="submit"
          className="find-ride-btn"
          disabled={loading}
        >
          {loading ? "Booking..." : "Find a Ride"}
        </button>

      </form>

    </div>
  );
};

export default BookingForm;
