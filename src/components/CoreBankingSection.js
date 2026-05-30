import image2 from "../assets/image3.png";

function CoreBankingSection() {
  const features = [
    "Customer On-Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (NEFT, RTGS etc)",

    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances"
  ];

  return (
    <section className="corebanking">

      <div className="corebanking-left">
        <img src={image2} alt="core banking" />
      </div>

      <div className="corebanking-right">

        <h2>
          Run a more efficient, flexible, and digitally connected core banking system
        </h2>

        <h3>What you will get:</h3>

        <div className="feature-grid">
          {features.map((item, i) => (
            <div className="feature-item" key={i}>
              <span className="tick">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default CoreBankingSection;   