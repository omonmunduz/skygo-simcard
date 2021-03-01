import { Link } from "@reach/router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <strong>Address: 370 Crenshaw Boulevard</strong>
        </li>
        <li>
          <strong>E-mail: skyGo@gttusa.net</strong>
        </li>
        <li>
          <strong>Phone # : 111-222-333-444</strong>
        </li>
      </ul>
      <ul>
        <Link to="/faq" className="footer-links">
          Faq
        </Link>
        <Link to="/terms-and-conditions" className="footer-links">
          Terms and Conditions
        </Link>
        <Link to="/usage-policy" className="footer-links">
          Usage Policy
        </Link>
        <Link to="/privacy-policy" className="footer-links">
          Privacy Policy
        </Link>
        <Link to="/contact-us" className="footer-links">
          Contact Us
        </Link>
      </ul>
    </footer>
  );
};
export default Footer;
