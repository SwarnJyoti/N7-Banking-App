import cb7Img from "../assets/CB7.png";

function Section() {
  return (
    <section className="cb7-section">

      <div className="cb7-box">
        <img src={cb7Img} alt="CB7" className="cb7-bg" />

        <div className="cb7-content">

          <h2>
            Take the full advantage of going paper-less now.
          </h2>

          <p>
            CB7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations.
          </p>

          <div className="cb7-buttons">
            <button className="btn-outline">Contact Us</button>
            <button className="btn-primary">Request Demo</button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Section;  