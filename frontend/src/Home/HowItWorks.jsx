
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "📍",
      title: "Enter Your Details",
      description:
        "Enter your pickup and drop locations to start planning your journey."
    },
    {
      number: "02",
      icon: "🚕",
      title: "Choose Your Ride",
      description:
        "Explore available cabs and select the ride that suits your needs."
    },
    {
      number: "03",
      icon: "🛣️",
      title: "Enjoy Your Journey",
      description:
        "Confirm your booking, meet your driver and enjoy a comfortable ride."
    }
  ];

  return (
    <section className="how-it-works">

      <div className="how-header">
        <span className="section-tag">SIMPLE PROCESS</span>

        <h2>
          How <span>Tripease</span> Works
        </h2>

        <p>
          Booking your next ride is simple.
          Just follow these three easy steps.
        </p>
      </div>

      <div className="steps-container">

        {steps.map((step) => (
          <div className="step-card" key={step.number}>

            <span className="step-number">
              {step.number}
            </span>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;
