import Navbar from "./Navbar";

import image1 from "../assets/img.jpg";
import home from "../assets/Home.png";
import home1 from "../assets/Home (1).png";

function Hero() {
  return (
    <section className="hero-wrapper">
      <Navbar />
      <section className="hero">
        <div className="hero-left">

          <h1>
            The new foundation
            <br />
            of modern banking
          </h1>

          <p className="hero-desc">
            We drive innovation and growth, provide seamless
            customer experience and operational excellence.
          </p>

          <div className="hero-buttons">

            <button className="blue-btn">
              REQUEST DEMO
            </button>

            <button className="outline-btn">
              CONTACT US
            </button>

          </div>

          <div className="trusted-section">

            <p className="trusted-text">
              Trusted by:
            </p>

            <div className="trusted-logos">

              <span>SHELLS</span>

              <span>SmartFinder</span>

              <span>Zoomerr</span>

              <span>ArtVenue</span>

              <span>Kontrastr</span>


            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="image-wrapper">

            <img
              src={image1}
              className="hero-image"
              alt=""
            />

            <img
              src={home}
              className="floating-card left-card"
              alt=""
            />

            <img
              src={home1}
              className="floating-card right-card"
              alt=""
            />

          </div>

        </div>

      </section>

    </section>
  );
}

export default Hero;   