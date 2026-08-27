import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/works.css";
import "../assets/css/style.css";

function HowItWorks() {
  return (
    <div>
      <Navbar />
      <section className="page-hero">
        <div className="wrap">
          <div className="motif-row">
            <span className="diamond"></span>
            <span className="dash"></span>
            <span className="eyebrow">প্রক্রিয়া</span>
            <span className="dash"></span>
            <span className="diamond"></span>
          </div>
          <h1>দ্বীনসাথী যেভাবে কাজ করে</h1>
          <p>
            বায়োডাটা তৈরি থেকে শুরু করে বিবাহ সম্পন্ন হওয়া পর্যন্ত — পুরো
            প্রক্রিয়াটি ধাপে ধাপে জেনে নিন।
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head center">
            <div className="motif-row">
              <span className="dash"></span>
              <span className="eyebrow">ধাপসমূহ</span>
              <span className="dash"></span>
            </div>
            <h2>চারটি সহজ ধাপ</h2>
            <p>
              প্রতিটি ধাপ পর্দা ও পারিবারিক তত্ত্বাবধান বজায় রেখে ডিজাইন করা
            </p>
          </div>

          <div className="timeline">
            <div className="t-item">
              <div className="t-idx">০১</div>
              <div className="t-body">
                <h3>বায়োডাটা তৈরি করুন</h3>
                <p>
                  সম্পূর্ণ বিনামূল্যে একটি সহজ ফর্ম পূরণ করে নিজের বা পরিবারের
                  সদস্যের বায়োডাটা তৈরি করুন।
                </p>
                <ul>
                  <li>ব্যক্তিগত, শিক্ষাগত ও পারিবারিক তথ্য দিন</li>
                  <li>প্রত্যাশিত জীবনসঙ্গীর বৈশিষ্ট্য উল্লেখ করুন</li>
                  <li>অভিভাবকের যোগাযোগ নম্বর যুক্ত করুন</li>
                </ul>
              </div>
            </div>

            <div className="t-item">
              <div className="t-idx">০২</div>
              <div className="t-body">
                <h3>যাচাই প্রক্রিয়া</h3>
                <p>
                  প্রকাশের আগে প্রতিটি বায়োডাটা পর্যালোচনা করে দেখা হয়, যাতে
                  তথ্যের নির্ভরযোগ্যতা বজায় থাকে।
                </p>
                <ul>
                  <li>প্রদত্ত তথ্যের সামঞ্জস্য যাচাই করা হয়</li>
                  <li>প্রয়োজনে অতিরিক্ত তথ্য চাওয়া হতে পারে</li>
                </ul>
              </div>
            </div>

            <div className="t-item">
              <div className="t-idx">০৩</div>
              <div className="t-body">
                <h3>বায়োডাটা খুঁজুন ও পছন্দ করুন</h3>
                <p>
                  বয়স, ঠিকানা, পেশা, শিক্ষাগত যোগ্যতা সহ বিভিন্ন ফিল্টার
                  ব্যবহার করে উপযুক্ত বায়োডাটা খুঁজে বের করুন।
                </p>
                <ul>
                  <li>একাধিক ফিল্টার একসাথে ব্যবহার করা যায়</li>
                  <li>পছন্দের বায়োডাটা সংরক্ষণ করে রাখা যায়</li>
                </ul>
              </div>
            </div>

            <div className="t-item">
              <div className="t-idx">০৪</div>
              <div className="t-body">
                <h3>অভিভাবকের মাধ্যমে যোগাযোগ ও বিবাহ</h3>
                <p>
                  বায়োডাটা পছন্দ হলে সরাসরি উল্লেখিত অভিভাবকের সাথে যোগাযোগ
                  করুন এবং নিজ দায়িত্বে ভালোভাবে খোঁজ নিন।
                </p>
                <ul>
                  <li>পরিবারের মাধ্যমে কথাবার্তা এগিয়ে নিন</li>
                  <li>সন্তুষ্ট হলে সুন্নতি পদ্ধতিতে বিবাহ সম্পন্ন করুন</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="paths">
        <div className="wrap">
          <div className="section-head center">
            <div className="motif-row">
              <span className="dash"></span>
              <span className="eyebrow">ব্যবহারকারী অনুযায়ী</span>
              <span className="dash"></span>
            </div>
            <h2>আপনি কীভাবে শুরু করবেন</h2>
            <p>
              আপনি নিজে বায়োডাটা তৈরি করতে চান, নাকি কারো জন্য খুঁজছেন — দুটোই
              সহজ
            </p>
          </div>
          <div className="path-grid">
            <div className="path-card">
              <div className="glyph">۞</div>
              <h3>নিজের বায়োডাটা তৈরি করতে চাইলে</h3>
              <ol>
                <li>
                  <span>১.</span> "বায়োডাটা তৈরি করুন" বাটনে ক্লিক করুন
                </li>
                <li>
                  <span>২.</span> ধাপে ধাপে ফর্ম পূরণ করুন
                </li>
                <li>
                  <span>৩.</span> অভিভাবকের তথ্য যুক্ত করে জমা দিন
                </li>
                <li>
                  <span>৪.</span> যাচাই শেষে বায়োডাটা প্রকাশিত হবে
                </li>
              </ol>
            </div>
            <div className="path-card">
              <div className="glyph">◎</div>
              <h3>উপযুক্ত পাত্র-পাত্রী খুঁজতে চাইলে</h3>
              <ol>
                <li>
                  <span>১.</span> হোমপেজের সার্চ ফিল্টার ব্যবহার করুন
                </li>
                <li>
                  <span>২.</span> বয়স, ঠিকানা, পেশা অনুযায়ী ফলাফল দেখুন
                </li>
                <li>
                  <span>৩.</span> পছন্দের বায়োডাটা বিস্তারিত দেখুন
                </li>
                <li>
                  <span>৪.</span> অভিভাবকের সাথে যোগাযোগ শুরু করুন
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head center">
            <div className="motif-row">
              <span className="dash"></span>
              <span className="eyebrow">সচরাচর জিজ্ঞাসা</span>
              <span className="dash"></span>
            </div>
            <h2>প্রক্রিয়া নিয়ে প্রশ্ন?</h2>
            <p>সবচেয়ে বেশি জিজ্ঞাসিত কিছু প্রশ্নের উত্তর</p>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>বায়োডাটা তৈরি করতে কি কোনো টাকা লাগে?</summary>
              <p>না, বায়োডাটা তৈরি ও প্রকাশ করা সম্পূর্ণ বিনামূল্যে।</p>
            </details>
            <details className="faq-item">
              <summary>যাচাই প্রক্রিয়ায় কত সময় লাগে?</summary>
              <p>
                সাধারণত বায়োডাটা জমা দেওয়ার পর নির্দিষ্ট সময়ের মধ্যে যাচাই
                সম্পন্ন হয়ে প্রকাশিত হয়।
              </p>
            </details>
            <details className="faq-item">
              <summary>যোগাযোগ কি সরাসরি পাত্র-পাত্রীর সাথে হয়?</summary>
              <p>
                না, পর্দা রক্ষার্থে যোগাযোগ হয় বায়োডাটায় উল্লেখিত অভিভাবকের
                মাধ্যমে।
              </p>
            </details>
            <details className="faq-item">
              <summary>একসাথে একাধিক বায়োডাটা সংরক্ষণ করা যায় কি?</summary>
              <p>
                হ্যাঁ, পছন্দের একাধিক বায়োডাটা পরবর্তীতে দেখার জন্য সংরক্ষণ করে
                রাখা যায়।
              </p>
            </details>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta">
            <h2>আজই বিনামূল্যে আপনার বায়োডাটা তৈরি করুন</h2>
            <a href="/create-biodata" className="btn-dark">
              শুরু করুন
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HowItWorks;
