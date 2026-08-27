import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img src={logo} alt="" />
            </Link>
            <p>
              বাংলাদেশের দ্বীনদার পাত্র-পাত্রীর জন্য একটি বিশ্বস্ত ও পর্দাসম্মত
              ম্যাট্রিমনিয়াল প্ল্যাটফর্ম।
            </p>
          </div>
          <div>
            <h4>প্ল্যাটফর্ম</h4>
            <ul>
              <li>
                <Link to="/">হোম</Link>
              </li>
              <li>
                <Link to="/about">আমাদের সম্পর্কে</Link>
              </li>
              <li>
                <Link to="/how-it-works">যেভাবে কাজ করে</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>সহায়তা</h4>
            <ul>
              <li>
                <Link to="/contact#question">জিজ্ঞাসা</Link>
              </li>
              <li>
                <a href="#">নির্দেশনা</a>
              </li>
              <li>
                <Link to="/contact">যোগাযোগ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>নীতিমালা</h4>
            <ul>
              <li>
                <a href="#">প্রাইভেসি পলিসি</a>
              </li>
              <li>
                <a href="#">শর্তাবলী</a>
              </li>
              <li>
                <a href="#">রিফান্ড পলিসি</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© ২০২৬ দ্বীনসাথী। সর্বস্বত্ব সংরক্ষিত।</span>
          <span>Made with care</span>
          <span>Mohimen.dev</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
