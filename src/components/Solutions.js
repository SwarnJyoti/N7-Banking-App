import vector1 from "../assets/Vector (1).png";
import vector3 from "../assets/Vector (3).png";
import vector5 from "../assets/Vector (5).png";
import vector7 from "../assets/Vector (7).png";
import vector6 from "../assets/Vector (6).png";
import Group from "../assets/Group.png";

function Solutions() {

  const data = [

    {
      icon: vector7,
      title: "Core Banking CB7",
      desc:
        "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance."
    },

    {
      icon: vector3,
      title: "Digital Banking N7",
      desc:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients."
    },

    {
      icon: vector1,
      title: "Open Banking",
      desc:
        "Our API banking helps you gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring."
    },

    {
      icon: Group,
      title: "Loan Origination",
      desc:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients."
    },

    {
      icon: vector6,
      title: "Loan Management System",
      desc:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients."
    }

  ];

  return (
    <section className="solutions">

      <div className="solutions-container">
        <div className="solutions-left">

          <h2>
            All of our Solutions are tailor-made to your needs
          </h2>

          <button className="demo-btn">
            Request Demo
          </button>

        </div>
        <div className="solutions-right">

          {data.map((item, i) => (

            <div className="solution-card" key={i}>

              <img
                src={item.icon}
                className="solution-icon"
                alt=""
              />

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <div className="learn-more">

                <span>Learn More</span>

                <span className="arrow">
                  →
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Solutions;


