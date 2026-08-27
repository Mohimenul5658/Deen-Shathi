import "../assets/css/style.css";
import "../assets/css/login.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <header>
        <div className="wrap">
          <Link to="/home" className="brand">
              <img src={logo} alt="Deenshathi" />
          </Link>
          <Link to="/home" className="back-link">
            ← হোমে ফিরে যান
          </Link>
        </div>
      </header>

      <div className="auth-shell">
        <div className="auth-visual">
          <div className="auth-visual-inner">
            <div className="frame">
              <div className="glyph">۞</div>
              <h3>স্বাগতম দ্বীনসাথীতে</h3>
              <p className="small">
                আপনার একাউন্টে প্রবেশ করে বায়োডাটা দেখুন ও যোগাযোগ শুরু করুন
              </p>
            </div>
            <div className="quote">
              যে ব্যক্তি বিয়ে করলো, সে তার দ্বীনের অর্ধেক পূর্ণ করে ফেললো।
              <span>— বায়হাকী, শু'আবুল ঈমান</span>
            </div>
          </div>
        </div>

        <div className="auth-form-side">
          <div className="auth-box">
            <div className="motif-row">
              <span className="diamond"></span>
              <span className="dash"></span>
              <span className="eyebrow">লগইন</span>
            </div>
            <h1>আপনার একাউন্টে প্রবেশ করুন</h1>
            <p className="sub">
              বায়োডাটা দেখতে ও অভিভাবকের সাথে যোগাযোগ করতে লগইন করুন
            </p>

            <form id="login-form">
              <div className="field">
                <label htmlFor="login-id">মোবাইল নম্বর অথবা ইমেইল</label>
                <div className="field-input">
                  <span className="ic">☎</span>
                  <input
                    type="text"
                    id="login-id"
                    name="login-id"
                    placeholder="01XXXXXXXXX অথবা you@example.com"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="password">পাসওয়ার্ড</label>
                <div className="field-input">
                  <span className="ic">🔒</span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="আপনার পাসওয়ার্ড দিন"
                    required
                  />
                  <button type="button" id="toggle-pw">
                    দেখুন
                  </button>
                </div>
              </div>

              <div className="row-between">
                <label className="remember">
                  <input type="checkbox" />
                  মনে রাখুন
                </label>
                <a href="#" className="forgot">
                  পাসওয়ার্ড ভুলে গেছেন?
                </a>
              </div>

              <button type="submit" className="btn-gold">
                লগইন করুন
              </button>
            </form>

            <div className="divider">অথবা</div>

            <button className="btn-outline">
              📱 মোবাইল OTP দিয়ে লগইন করুন
            </button>

            <p className="switch-line">
              এখনো একাউন্ট তৈরি করেননি?{" "}
              <Link to="/home">বায়োডাটা তৈরি করুন</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
