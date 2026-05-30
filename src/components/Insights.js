import frame54 from "../assets/Frame 54.png";

function Insights() {
  return (
    <section className="insights">

      <div className="insights-left">
        <h2>
          Get yourself up-to-speed on all the things happening in fintech
        </h2>

        <button className="insights-btn">INSIGHTS</button>
      </div>

      <div className="insights-right-wrapper">

        <div className="insights-right">

          <div className="insight-card image-only">
            <img src={frame54} className="insight-img" alt="" />
          </div>

          <div className="insight-card">
            <p className="type">GETTING STARTED</p>
            <h2>How to transition from a traditional to a digital bank</h2>
            <div className="meta">
              <span>David Grohi</span>
              <span>17/08/24</span>
            </div>
            <button className="read-more">READ MORE</button>
          </div>

          <div className="insight-card">
            <p className="type">GETTING STARTED</p>
            <h2>How to transition from a traditional to a digital bank</h2>
            <div className="meta">
              <span>David Grohi</span>
              <span>17/08/24</span>
            </div>
            <button className="read-more">READ MORE</button>
          </div>

          <div className="insight-card">
            <p className="type">GETTING STARTED</p>
            <h2>How to transition from a traditional to a digital bank</h2>
            <div className="meta">
              <span>David Grohi</span>
              <span>17/08/24</span>
            </div>
            <button className="read-more">READ MORE</button>
          </div>

        </div>

        <div className="insights-footer">
          READ ALL INSIGHTS <span>→</span>
        </div>

      </div>

    </section>
  );
}

export default Insights;



