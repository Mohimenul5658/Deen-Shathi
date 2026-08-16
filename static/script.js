            // toggle btn //
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

            // boidata form //
  const steps = document.querySelectorAll(".form-step");
  const stepBtns = document.querySelectorAll(".step-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const progressLabel = document.getElementById("progress-label");
  const totalSteps = steps.length;
  let current = 1;

  function goToStep(n) {
    current = n;
    steps.forEach(s => s.classList.toggle("active", Number(s.dataset.step) === n));
    stepBtns.forEach(b => {
      const stepNum = Number(b.dataset.step);
      b.classList.toggle("active", stepNum === n);
      b.classList.toggle("done", stepNum < n);
    });
    prevBtn.style.visibility = n === 1 ? "hidden" : "visible";
    nextBtn.textContent = n === totalSteps ? "বায়োডাটা জমা দিন" : "পরবর্তী →";
    progressLabel.textContent = `ধাপ ${["","১","২","৩","৪"][n]} / ৪`;
    window.scrollTo({ top: document.querySelector(".form-panel").offsetTop - 100, behavior: "smooth" });
  }

  stepBtns.forEach(btn => {
    btn.addEventListener("click", () => goToStep(Number(btn.dataset.step)));
  });

  prevBtn.addEventListener("click", () => {
    if (current > 1) goToStep(current - 1);
  });

  nextBtn.addEventListener("click", () => {
    if (current < totalSteps) {
      goToStep(current + 1);
    } else {
      alert("বায়োডাটা জমা দেওয়ার ফাংশনালিটি এখানে যুক্ত করা যাবে।");
    }
  });

    //    login page  //
  const pwInput = document.getElementById("password");
  const toggleBtn = document.getElementById("toggle-pw");
  toggleBtn.addEventListener("click", function () {
    const isHidden = pwInput.type === "password";
    pwInput.type = isHidden ? "text" : "password";
    toggleBtn.textContent = isHidden ? "লুকান" : "দেখুন";
  });