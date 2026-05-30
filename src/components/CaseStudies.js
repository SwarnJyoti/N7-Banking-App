import frame541 from "../assets/Frame 54 (1).png";

function CaseStudies() {
  return (
    <section className="case-section">
      <h2 className="case-heading">Our Case Studies</h2>
      <div className="case-box">

        <div className="case-left">
          <img src={frame541} alt="" />
        </div>

        <div className="case-right">

          <p className="case-type">GETTING STARTED</p>

          <h3 className="case-title">
            How we help brand reach out<br />
            to more people in digital era<br />
            with smart solutions
          </h3>

          <p className="case-brand">Zoomerr</p>

          <button className="case-btn">READ MORE</button>

        </div>

      </div>

      <div className="case-controls">

        <div className="arrows">
          <span>←</span>
          <span className="dash">-</span>
          <span>→</span>
        </div>

        <div className="view-all">
          VIEW ALL <span>→</span>
        </div>

      </div>

    </section>
  );
}

export default CaseStudies;