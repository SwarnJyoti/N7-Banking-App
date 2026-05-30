import maskGroup from "../assets/Mask group.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-left">
          <img src={maskGroup} alt="logo" />
        </div>
        <div className="footer-right">

          <div className="footer-col">
            <h4>London</h4>
            <p>
              Linktia Infosystems Ltd - CB7, 26 Main Road Sundridge,
              TN14 6EP, England, United Kingdom.
            </p>

            <div className="footer-gap"></div>

            <h4>Solutions</h4>
            <p>Core Banking CB7 →</p>
            <p>Digital Banking N7 →</p>
            <p>Open Banking →</p>
            <p>Loan Origination System →</p>
            <p>Loan Management System →</p>
          </div>

          <div className="footer-col">
            <h4>Dubai</h4>
            <p>
              Linktia Infosystems Ltd - CB7, Jumeirah Business Center 5,
              Cluster W, Jumeirah Lakes Towers, Dubai, UAE.
            </p>

            <div className="footer-gap"></div>

            <h4>N7 Banking</h4>
           
            <p>About Us</p>
            <p>Our Story</p>
            <p>Contact</p>
            <p>Careers</p>
            <p>Insights</p>
            <p>Core Team</p>
            <p>Brand Center</p>
          </div>

          <div className="footer-col">
            <h4>London</h4>
            <p>
              Linktia Infosystems Ltd - CB7, Pune, Maharashtra, India.
            </p>

            <div className="footer-gap"></div>

            <h4>Our Socials</h4>
            <p>LinkedIn</p>
            <p>X (Twitter)</p>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        Copyright © 2022 by Linktia Infosystems Limited - CB7 & N7
      </div>

    </footer>
  );
}

export default Footer;   