// import { Routes, Route } from "react-router-dom";

// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Login from "./pages/login";
// import CreateBiodata from "./pages/CreateBiodata";
// import HowItWorks from "./pages/HowItWorks";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/home" element={<Home />} />

//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/create-biodata" element={<CreateBiodata />} />
//       <Route path="/how-it-works" element={<HowItWorks />} />
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import HowItWorks from "./pages/HowItWorks";
import CreateBiodata from "./pages/CreateBiodata";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/create-biodata" element={<CreateBiodata />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;