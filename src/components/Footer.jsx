

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-brand">
          <h2>RKS GAS WORKS</h2>

          <p>
            Commercial & Domestic Gas Pipeline
            Installation and Maintenance Services
            Across Kerala.
          </p>
        </div>

        {/* Center */}
        <div className="footer-contact">

          <h4>Contact</h4>

          <a href="tel:+919495162337">
            +91 9495162337
          </a>

          <a
            href="https://wa.me/919495162337"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Support
          </a>

        </div>

        {/* Right */}
        <div className="footer-location">

          <h4>Location</h4>

          <p>Kerala, India</p>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} RKS GAS WORKS.
          All rights reserved.
        </p>
      </div>

    </footer>
  );
}