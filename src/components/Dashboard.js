import image2 from "../assets/image2.png";

function Dashboard() {
  return (
    <section className="dashboard">

      <div className="dashboard-left">

        <h2>
          A Complete Cloud-based Core banking.
        </h2>

        <p className="sub-text">
          Faster time to market with our cloud based core banking services
        </p>

        <button className="demo-btn">
          Request Demo
        </button>

        <div className="learn-more">
          <span>Learn More</span>
          <span className="arrow">→</span>
        </div>

      </div>

      <div className="dashboard-right">
        <img src={image2} alt="dashboard" />
      </div>

    </section>
  );
}

export default Dashboard;
