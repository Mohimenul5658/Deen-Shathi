import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/index.css";
import "../assets/css/style.css";

function Home() {
  return (
    <div>
      <Navbar />

      <section className="hero" id="home">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="motif-row">
                <span className="diamond"></span>
                <span className="dash"></span>
                <span className="eyebrow">
                  শরীয়াহভিত্তিক জীবনসঙ্গী নির্বাচন
                </span>
              </div>
              <h1>
                আপনার
                <br />
                <em>অর্ধেক দ্বীন</em>খুঁজে নিন
              </h1>
              <p className="lead">
                নিকটবর্তী এলাকার দ্বীনদার পাত্র-পাত্রীর যাচাইকৃত বায়োডাটা থেকে
                সহজেই আপনার জীবনসঙ্গী বেছে নিন — সম্পূর্ণ বিনামূল্যে ও পর্দার
                সাথে।
              </p>
              <div className="quote-card">
                যে ব্যক্তি বিয়ে করলো, সে তার দ্বীনের অর্ধেক পূর্ণ করে ফেললো।
                <span>— বায়হাকী, শু'আবুল ঈমান</span>
              </div>
            </div>
            <div className="hero-art">
              <div className="frame">
                <div className="glyph">۞</div>
                <h3>যাচাইকৃত বায়োডাটা</h3>
                <p>
                  প্রতিটি প্রোফাইল অভিভাবকের মাধ্যমে যাচাই করে প্রকাশ করা হয়
                </p>
              </div>
            </div>
          </div>

          <div className="search-card">
            <div className="search-tabs">
              <button className="active">সকল বায়োডাটা</button>
              <button>পাত্রের বায়োডাটা</button>
              <button>পাত্রীর বায়োডাটা</button>
            </div>
            <div className="search-fields">
              <div className="field">
                <label>বৈবাহিক অবস্থা</label>
                <select>
                  <option>সকল</option>
                  <option>অবিবাহিত</option>
                  <option>বিবাহিত</option>
                  <option>বিধবা</option>
                </select>
              </div>
              <div className="field">
                <label>বয়স</label>
                <select>
                  <option>সকল</option>
                  <option>১৮ - ২৫</option>
                  <option>২৬ - ৩৫</option>
                  <option>৩৬+</option>
                </select>
              </div>
              <div className="field">
                <label>ঠিকানা</label>
                <select>
                  <option>জেলা নির্বাচন করুন</option>
                  <option>ঢাকা</option>
                  <option>চট্টগ্রাম</option>
                  <option>সিলেট</option>
                </select>
              </div>
              <div className="field">
                <label>পেশা</label>
                <select>
                  <option>সকল</option>
                  <option>ছাত্র/ছাত্রী</option>
                  <option>চাকরিজীবী</option>
                  <option>ব্যবসায়ী</option>
                </select>
              </div>
              <button className="btn btn-gold">বায়োডাটা খুঁজুন</button>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat">
              <div className="num">১২,৪০০+</div>
              <div className="label">মোট বায়োডাটা</div>
            </div>
            <div className="stat">
              <div className="num">৬,৮০০+</div>
              <div className="label">পাত্রের বায়োডাটা</div>
            </div>
            <div className="stat">
              <div className="num">৫,৬০০+</div>
              <div className="label">পাত্রীর বায়োডাটা</div>
            </div>
            <div className="stat">
              <div className="num">৯৫০+</div>
              <div className="label">সফল বিবাহ</div>
            </div>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <div className="section-head center">
            <div className="motif-row">
              <span className="dash"></span>
              <span className="eyebrow">প্রক্রিয়া</span>
              <span className="dash"></span>
            </div>
            <h2>দ্বীনসাথী যেভাবে কাজ করে</h2>
            <p>মাত্র চারটি ধাপে শুরু করুন আপনার জীবনসঙ্গী খোঁজার যাত্রা</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="idx">০১</div>
              <h3>বায়োডাটা তৈরি করুন</h3>
              <p>বিনামূল্যে সহজ ফর্ম পূরণ করে নিজের বায়োডাটা তৈরি করুন।</p>
            </div>
            <div className="step">
              <div className="idx">০২</div>
              <h3>বায়োডাটা খুঁজুন</h3>
              <p>
                বয়স, ঠিকানা, পেশা ও শিক্ষাগত যোগ্যতা অনুযায়ী ফিল্টার করে
                খুঁজুন।
              </p>
            </div>
            <div className="step">
              <div className="idx">০৩</div>
              <h3>অভিভাবকের সাথে যোগাযোগ</h3>
              <p>পছন্দ হলে সরাসরি অভিভাবকের সাথে যোগাযোগ করুন।</p>
            </div>
            <div className="step">
              <div className="idx">০৪</div>
              <h3>বিবাহ সম্পন্ন করুন</h3>
              <p>যাচাই-বাছাই শেষে সুন্নতি পদ্ধতিতে বিবাহ সম্পন্ন করুন।</p>
            </div>
          </div>
        </div>
      </section>

      <section className="profiles" id="about">
        <div className="wrap">
          <div className="section-head">
            <div className="motif-row">
              <span className="diamond"></span>
              <span className="dash"></span>
              <span className="eyebrow">নমুনা প্রোফাইল</span>
            </div>
            <h2>সাম্প্রতিক বায়োডাটা</h2>
            <p>যাচাইকৃত ও পর্দাসম্মতভাবে উপস্থাপিত প্রোফাইলসমূহের একটি ঝলক</p>
          </div>
          <div className="profile-grid">
            <div className="profile-card">
              <div className="profile-avatar">ব</div>
              <h4>বায়োডাটা নং — ১০৪২</h4>
              <div className="meta">বয়স ২৬ · ঢাকা · প্রকৌশলী</div>
              <div className="tags">
                <span className="tag">অবিবাহিত</span>
                <span className="tag">হানাফি</span>
              </div>
            </div>
            <div className="profile-card">
              <div className="profile-avatar">ব</div>
              <h4>বায়োডাটা নং — ১০৫৭</h4>
              <div className="meta">বয়স ২৩ · চট্টগ্রাম · শিক্ষার্থী</div>
              <div className="tags">
                <span className="tag">অবিবাহিত</span>
                <span className="tag">হাফেজা</span>
              </div>
            </div>
            <div className="profile-card">
              <div className="profile-avatar">ব</div>
              <h4>বায়োডাটা নং — ১০৭৯</h4>
              <div className="meta">বয়স ২৯ · সিলেট · মাদ্রাসা শিক্ষক</div>
              <div className="tags">
                <span className="tag">অবিবাহিত</span>
                <span className="tag">হাফেজ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
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

export default Home;
