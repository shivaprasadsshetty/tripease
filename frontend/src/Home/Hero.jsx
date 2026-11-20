
import BookingForm from "./Booking/BookingForm";
import "./Hero.css";

const Hero=()=> {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-text">
          <span className="hero-tag">
            YOUR JOURNEY, OUR PRIORITY
          </span>

          <h1>
            Travel Anywhere.
            <span> Travel with Ease.</span>
          </h1>

          <p>
            Book your ride effortlessly with Tripease.
            Find comfortable rides, connect with drivers
            and reach your destination without hassle.
          </p>
        </div>

        <div className="hero-booking">
          <BookingForm />
        </div>

      </div>

    </section>
  );
}

export default Hero;
