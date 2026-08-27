import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/contact.css";
import "../assets/css/style.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <section className="page-hero">
        <div className="wrap">
          <div className="motif-row">
            <span className="diamond"></span>
            <span className="dash"></span>
            <span className="eyebrow">যোগাযোগ</span>
            <span className="dash"></span>
            <span className="diamond"></span>
          </div>
          <h1>আমাদের সাথে যোগাযোগ করুন</h1>
          <p>
            কোনো প্রশ্ন, পরামর্শ বা সহায়তা প্রয়োজন হলে নিচের যেকোনো মাধ্যমে
            আমাদের জানান — আমরা যত দ্রুত সম্ভব উত্তর দেওয়ার চেষ্টা করব।
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="info-grid">
            <div className="info-card">
              <div className="glyph">✉</div>
              <h4>ইমেইল করুন</h4>
              <p>support@example.com</p>
            </div>
            <div className="info-card">
              <div className="glyph">☎</div>
              <h4>ফোন করুন</h4>
              <p>+৮৮০ ১XXX-XXXXXX</p>
            </div>
            <div className="info-card">
              <div className="glyph">⌂</div>
              <h4>অফিস ঠিকানা</h4>
              <p>ঢাকা, বাংলাদেশ</p>
            </div>
          </div>

          <div className="contact-split">
            <div className="contact-side">
              <div className="motif-row">
                <span className="dash"></span>
                <span className="eyebrow">বার্তা পাঠান</span>
              </div>
              <h2>আমরা শুনতে চাই আপনার কথা</h2>
              <p>
                ফর্মটি পূরণ করুন, আমাদের টিম যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ
                করবে। জরুরি প্রয়োজনে সরাসরি ফোন বা ইমেইলেও যোগাযোগ করতে পারেন।
              </p>
              <div className="quote-card">
                পরস্পরের প্রতি সদয় হও, আল্লাহ তোমাদের প্রতি সদয় হবেন।
                <span>— একটি হাদীসের ভাবার্থ</span>
              </div>
              <div className="social-row">
                <a href="#" aria-label="Facebook">
                  f
                </a>
                <a href="#" aria-label="YouTube">
                  ▶
                </a>
                <a href="#" aria-label="Messenger">
                  ✆
                </a>
              </div>
            </div>

            <div className="form-card">
              <form id="contact-form">
                <div className="form-row">
                  <div className="field">
                    <label for="name">নাম</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="আপনার পূর্ণ নাম"
                      required
                    />
                  </div>
                  <div className="field">
                    <label for="email">ইমেইল</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label for="subject">বিষয়</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="আপনার বার্তার বিষয়"
                    required
                  />
                </div>
                <div className="field">
                  <label for="message">বার্তা</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="আপনার বার্তা লিখুন..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-gold">
                  বার্তা পাঠান
                </button>
                <p className="form-note">
                  সাধারণত ২৪-৪৮ ঘণ্টার মধ্যে আমরা উত্তর দিয়ে থাকি
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-wrap" id="question">
        <div className="wrap">
          <div className="section-head center">
            <div className="motif-row">
              <span className="dash"></span>
              <span className="eyebrow">সচরাচর জিজ্ঞাসা</span>
              <span className="dash"></span>
            </div>
            <h2>যোগাযোগ নিয়ে প্রশ্ন?</h2>
            <p>উত্তর না পেলে সরাসরি ইমেইল বা ফোনে যোগাযোগ করুন</p>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>বার্তার উত্তর পেতে কত সময় লাগে?</summary>
              <p>
                সাধারণত ২৪ থেকে ৪৮ ঘণ্টার মধ্যে আমাদের টিম উত্তর দিয়ে থাকে।
              </p>
            </details>
            <details className="faq-item">
              <summary>
                বায়োডাটা সংক্রান্ত সমস্যার জন্য কীভাবে যোগাযোগ করব?
              </summary>
              <p>
                ফর্মের "বিষয়" ঘরে বায়োডাটা নম্বর উল্লেখ করে বার্তা পাঠান,
                দ্রুত সমাধানে সহায়ক হবে।
              </p>
            </details>
            <details className="faq-item">
              <summary>ফোনে সরাসরি কথা বলা যাবে কি?</summary>
              <p>
                হ্যাঁ, উল্লেখিত নম্বরে অফিস সময়ে সরাসরি কল করে কথা বলতে পারবেন।
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
