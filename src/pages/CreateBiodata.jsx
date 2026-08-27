import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/style.css";
import "../assets/css/biodata.css";

function CreateBiodata() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleStepClick = (selectedStep) => {
    setStep(selectedStep);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step < 4) {
      handleNext();
      return;
    }

    alert("আপনার বায়োডাটা সফলভাবে জমা দেওয়া হয়েছে!");
  };

  return (
    <div>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="motif-row">
            <span className="diamond"></span>
            <span className="dash"></span>

            <span className="eyebrow">বায়োডাটা তৈরি করুন</span>

            <span className="dash"></span>
            <span className="diamond"></span>
          </div>

          <h1>নিজের বায়োডাটা তৈরি করুন</h1>

          <p>
            সম্পূর্ণ বিনামূল্যে, মাত্র কয়েক মিনিটে। সঠিক ও সম্পূর্ণ তথ্য দিলে
            যাচাই দ্রুত সম্পন্ন হয়।
          </p>
        </div>
      </section>

      {/* Builder */}
      <section className="builder">
        <div className="wrap">
          <div className="builder-grid">
            {/* Step Sidebar */}
            <nav className="step-nav">
              <button
                type="button"
                className={`step-btn ${step === 1 ? "active" : ""}`}
                onClick={() => handleStepClick(1)}
              >
                <span className="n">১</span>
                মৌলিক তথ্য
              </button>

              <button
                type="button"
                className={`step-btn ${step === 2 ? "active" : ""}`}
                onClick={() => handleStepClick(2)}
              >
                <span className="n">২</span>
                শিক্ষাগত তথ্য
              </button>

              <button
                type="button"
                className={`step-btn ${step === 3 ? "active" : ""}`}
                onClick={() => handleStepClick(3)}
              >
                <span className="n">৩</span>
                পারিবারিক তথ্য
              </button>

              <button
                type="button"
                className={`step-btn ${step === 4 ? "active" : ""}`}
                onClick={() => handleStepClick(4)}
              >
                <span className="n">৪</span>
                প্রত্যাশা ও অভিভাবক
              </button>
            </nav>

            {/* Form */}
            <form className="form-panel" onSubmit={handleSubmit}>
              {/* STEP 1 */}
              {step === 1 && (
                <div className="form-step active">
                  <div className="panel-head">
                    <h2>মৌলিক তথ্য</h2>
                    <p>আপনার ব্যক্তিগত পরিচিতিমূলক তথ্য দিন</p>
                  </div>

                  <div className="fieldset-title">আমি খুঁজছি</div>

                  <div className="field full">
                    <div className="radio-group">
                      <label>
                        <input type="radio" name="looking-for" defaultChecked />
                        <span>পাত্রের জন্য বায়োডাটা</span>
                      </label>

                      <label>
                        <input type="radio" name="looking-for" />
                        <span>পাত্রীর জন্য বায়োডাটা</span>
                      </label>
                    </div>
                  </div>

                  <div className="fieldset-title">ব্যক্তিগত তথ্য</div>

                  <div className="form-grid">
                    <div className="field">
                      <label>
                        পূর্ণ নাম
                        <span className="req">*</span>
                      </label>

                      <input
                        type="text"
                        placeholder="আপনার পূর্ণ নাম"
                        required
                      />
                    </div>

                    <div className="field">
                      <label>
                        জন্ম তারিখ
                        <span className="req">*</span>
                      </label>

                      <input type="date" required />
                    </div>

                    <div className="field">
                      <label>উচ্চতা</label>

                      <select>
                        <option>নির্বাচন করুন</option>
                        <option>৪'১০"</option>
                        <option>৫'০"</option>
                        <option>৫'২"</option>
                        <option>৫'৪"</option>
                        <option>৫'৫"</option>
                        <option>৫'৬"</option>
                        <option>৫'৮"</option>
                        <option>৫'১০"</option>
                        <option>৬'০"+</option>
                      </select>
                    </div>

                    <div className="field">
                      <label>গাত্রবর্ণ</label>

                      <select>
                        <option>নির্বাচন করুন</option>
                        <option>কালো</option>
                        <option>শ্যামলা</option>
                        <option>উজ্জ্বল শ্যামলা</option>
                        <option>ফর্সা</option>
                        <option>উজ্জ্বল ফর্সা</option>
                      </select>
                    </div>

                    <div className="field">
                      <label>বৈবাহিক অবস্থা</label>

                      <select>
                        <option>অবিবাহিত</option>
                        <option>বিবাহিত</option>
                        <option>ডিভোর্সড</option>
                        <option>বিধবা</option>
                        <option>বিপত্নীক</option>
                      </select>
                    </div>

                    <div className="field">
                      <label>রক্তের গ্রুপ</label>

                      <select>
                        <option>নির্বাচন করুন</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                      </select>
                    </div>
                  </div>

                  <div className="fieldset-title">ঠিকানা</div>

                  <div className="form-grid">
                    <div className="field">
                      <label>বর্তমান ঠিকানা (জেলা)</label>

                      <select>
                        <option>নির্বাচন করুন</option>
                        <option>ঢাকা</option>
                        <option>চট্টগ্রাম</option>
                        <option>সিলেট</option>
                        <option>রাজশাহী</option>
                      </select>
                    </div>

                    <div className="field">
                      <label>স্থায়ী ঠিকানা (জেলা)</label>

                      <select>
                        <option>নির্বাচন করুন</option>
                        <option>ঢাকা</option>
                        <option>চট্টগ্রাম</option>
                        <option>সিলেট</option>
                        <option>রাজশাহী</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="form-step active">
                  <div className="panel-head">
                    <h2>শিক্ষাগত তথ্য</h2>
                    <p>সাধারণ ও দ্বীনি শিক্ষাগত যোগ্যতা উল্লেখ করুন</p>
                  </div>

                  <div className="fieldset-title">পড়াশোনার মাধ্যম</div>

                  <div className="field full">
                    <div className="radio-group">
                      <label>
                        <input type="radio" name="edu-medium" defaultChecked />
                        <span>জেনারেল</span>
                      </label>

                      <label>
                        <input type="radio" name="edu-medium" />
                        <span>কওমি</span>
                      </label>

                      <label>
                        <input type="radio" name="edu-medium" />
                        <span>আলিয়া</span>
                      </label>
                    </div>
                  </div>

                  <div className="fieldset-title">সাধারণ শিক্ষা</div>

                  <div className="form-grid">
                    <div className="field">
                      <label>সর্বোচ্চ শিক্ষাগত যোগ্যতা</label>
                      <input type="text" placeholder="যেমন: স্নাতক (অনার্স)" />
                    </div>

                    <div className="field">
                      <label>প্রতিষ্ঠানের নাম</label>
                      <input type="text" placeholder="প্রতিষ্ঠানের নাম লিখুন" />
                    </div>

                    <div className="field">
                      <label>বিষয়</label>
                      <input
                        type="text"
                        placeholder="যেমন: কম্পিউটার সায়েন্স"
                      />
                    </div>

                    <div className="field">
                      <label>পাসের সন</label>
                      <input type="text" placeholder="যেমন: ২০২৩" />
                    </div>
                  </div>

                  <div className="fieldset-title">দ্বীনি শিক্ষাগত যোগ্যতা</div>

                  <div className="field full">
                    <div className="radio-group">
                      <label>
                        <input type="checkbox" />
                        <span>হাফেজ/হাফেজা</span>
                      </label>

                      <label>
                        <input type="checkbox" />
                        <span>মাওলানা</span>
                      </label>

                      <label>
                        <input type="checkbox" />
                        <span>মুফতি</span>
                      </label>

                      <label>
                        <input type="checkbox" />
                        <span>ক্বারী</span>
                      </label>

                      <label>
                        <input type="checkbox" />
                        <span>প্রযোজ্য নয়</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/*  STEP 3  */}
              {step === 3 && (
                <div className="form-step active">
                  <div className="panel-head">
                    <h2>পারিবারিক ও পেশাগত তথ্য</h2>
                    <p>পরিবার এবং আপনার পেশা সম্পর্কে তথ্য দিন</p>
                  </div>

                  <div className="fieldset-title">পেশা</div>

                  <div className="form-grid">
                    <div className="field">
                      <label>পেশা</label>

                      <select>
                        <option>নির্বাচন করুন</option>
                        <option>ইঞ্জিনিয়ার</option>
                        <option>ডাক্তার</option>
                        <option>শিক্ষক</option>
                        <option>ব্যবসায়ী</option>
                        <option>সরকারী চাকুরী</option>
                        <option>শিক্ষার্থী</option>
                        <option>অন্যান্য</option>
                      </select>
                    </div>

                    <div className="field">
                      <label>মাসিক আয়</label>
                      <input type="text" placeholder="ঐচ্ছিক" />
                    </div>
                  </div>

                  <div className="fieldset-title">পারিবারিক তথ্য</div>

                  <div className="form-grid">
                    <div className="field">
                      <label>পিতার পেশা</label>
                      <input type="text" placeholder="পিতার পেশা লিখুন" />
                    </div>

                    <div className="field">
                      <label>মাতার পেশা</label>
                      <input type="text" placeholder="মাতার পেশা লিখুন" />
                    </div>

                    <div className="field">
                      <label>ভাই-বোনের সংখ্যা</label>
                      <input type="text" placeholder="যেমন: ২ ভাই, ১ বোন" />
                    </div>

                    <div className="field">
                      <label>অর্থনৈতিক অবস্থা</label>

                      <select>
                        <option>নির্বাচন করুন</option>
                        <option>উচ্চবিত্ত</option>
                        <option>উচ্চ মধ্যবিত্ত</option>
                        <option>মধ্যবিত্ত</option>
                        <option>নিম্ন মধ্যবিত্ত</option>
                      </select>
                    </div>
                  </div>

                  <div className="field full">
                    <label>পরিবার সম্পর্কে সংক্ষিপ্ত বিবরণ</label>

                    <textarea placeholder="পরিবারের দ্বীনি পরিবেশ, পর্দা পালন ইত্যাদি সম্পর্কে লিখুন..."></textarea>
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div className="form-step active">
                  <div className="panel-head">
                    <h2>প্রত্যাশা ও অভিভাবকের তথ্য</h2>
                    <p>প্রত্যাশিত জীবনসঙ্গীর বৈশিষ্ট্য ও যোগাযোগের তথ্য দিন</p>
                  </div>

                  <div className="fieldset-title">প্রত্যাশিত জীবনসঙ্গী</div>

                  <div className="form-grid">
                    <div className="field">
                      <label>বয়স সীমা</label>
                      <input type="text" placeholder="যেমন: ২০ - ২৮ বছর" />
                    </div>

                    <div className="field">
                      <label>শিক্ষাগত যোগ্যতা</label>
                      <input
                        type="text"
                        placeholder="প্রত্যাশিত শিক্ষাগত যোগ্যতা"
                      />
                    </div>
                  </div>

                  <div className="field full">
                    <label>অন্যান্য প্রত্যাশা</label>

                    <textarea placeholder="দ্বীনদারিতা, পর্দা, চরিত্র ইত্যাদি সম্পর্কে আপনার প্রত্যাশা লিখুন..."></textarea>
                  </div>

                  <div className="fieldset-title">অভিভাবকের যোগাযোগের তথ্য</div>

                  <div className="form-grid">
                    <div className="field">
                      <label>
                        অভিভাবকের নাম
                        <span className="req">*</span>
                      </label>

                      <input type="text" placeholder="অভিভাবকের নাম" required />
                    </div>

                    <div className="field">
                      <label>সম্পর্ক</label>
                      <input type="text" placeholder="যেমন: পিতা, বড় ভাই" />
                    </div>

                    <div className="field">
                      <label>
                        মোবাইল নম্বর
                        <span className="req">*</span>
                      </label>

                      <input type="tel" placeholder="01XXXXXXXXX" required />
                    </div>

                    <div className="field">
                      <label>ইমেইল</label>
                      <input type="email" placeholder="you@example.com" />
                    </div>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="panel-footer">
                <button
                  type="button"
                  className="btn-prev"
                  onClick={handlePrev}
                  style={{
                    visibility: step === 1 ? "hidden" : "visible",
                  }}
                >
                  ← পূর্ববর্তী
                </button>

                <span className="progress-label">Step {step} / 4</span>

                {step < 4 ? (
                  <button
                    type="button"
                    className="btn-next"
                    onClick={handleNext}
                  >
                    পরবর্তী →
                  </button>
                ) : (
                  <button type="submit" className="btn-next">
                    সম্পন্ন করুন ✓
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CreateBiodata;
