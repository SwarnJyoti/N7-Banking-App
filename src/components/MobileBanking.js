import iphone1 from "../assets/iPhone-13-Pro-Front.png";
import iphone2 from "../assets/iPhone-13-Pro-Front (1).png";
import iphone3 from "../assets/iPhone-13-Pro-Front (2).png";

function MobileBanking() {

  return (

    <section className="mobile-banking">

      <div className="mobile-left-title">
          
        <h2>
          Digital banking
          <br />
          out-of-the-box
        </h2>

        <p>
          N7 helps your financial institution
          improve the client experience,
          automate and optimize procedures,
          simplify banking operations and
          increase productivity.
        </p>

        <div className="mobile-buttons">

          <button className="blue-btn">
            REQUEST DEMO
          </button>

          <button className="outline-btn dark-outline">
            LEARN MORE
          </button>

        </div>

      </div>

      <div className="mobile-right-content">

        <div className="mobile-row row-one">

          <img
            src={iphone2}
            alt=""
            className="bank-phone"
          />

          <div className="phone-text">

            <h3>
              Fully compliant with
              regulatory requirement
            </h3>

            <p>
              The governance of risk management
              with regulations is achieved by
              our risk management framework.
            </p>

            <ul>

              <li>
                Pre-integrated Security System
              </li>

              <li>
                Fully Compliant With Regulatory
                Requirement
              </li>

              <li>
                Digitally Connected Core
              </li>

            </ul>

          </div>

        </div>

        <div className="mobile-row row-two">

          <div className="phone-text">

            <h3>No legacy IT systems</h3>

            <p>
              Our Digital Banking solution helps
              institutions take advantage of
              digital transformation securely.
            </p>

            <ul>

              <li>
                Adaptive & Intelligent API monetization
              </li>

              <li>
                Ambient User Experience
              </li>

              <li>
                Cloud-native With lower TCO
              </li>

            </ul>

          </div>

          <img
            src={iphone1}
            alt=""
            className="bank-phone"
          />

        </div>

        <div className="mobile-row row-three">

          <img
            src={iphone3}
            alt=""
            className="bank-phone"
          />

          <div className="phone-text">

            <h3>No traditional branches</h3>

            <p>
              Our Digital Banking out-of-the-box
              helps accelerate innovation while
              reducing risks and operational costs.
            </p>

            <ul>

              <li>
                Branchless & Paperless Banking
              </li>

              <li>
                Digital Transformation Capability
              </li>

              <li>
                Optimized, Adoptable and Scalable
              </li>

            </ul>

          </div>

        </div>

      </div>

      <section className="advantage-section">

        <div className="advantage-overlay">

          <h2>
            Take the full advantage of
            <br />
            going paper-less now.
          </h2>

          <p>
            N7 helps your financial institution
            improve the client experience,
            automate and optimize procedures,
            simplify banking operations.
          </p>

          <div className="advantage-buttons">

            <button className="white-btn">
              CONTACT US
            </button>

            <button className="outline-white-btn">
              REQUEST DEMO
            </button>

          </div>

        </div>

      </section>

    </section>

  );
}

export default MobileBanking;







