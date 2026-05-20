

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <h3>RKS GAS WORKING</h3>
        <p className="footer-tag">Commercial & Domestic Gas Pipeline Services</p>

        <div className="footer-contact">
          <p>📞 +91 9495162337</p>
          <p>📍 Kerala, India</p>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} RKS GAS WORKS. All rights reserved.
        </p>

      </div>
    </footer>
  );
}