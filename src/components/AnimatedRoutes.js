import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Privacy from "../pages/privacy/Privacy";
// import Portfolio from "../pages/portfolio/Portfolio";
// import Contact from "../pages/contact/Contact";

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
          />
        }
      />
      <Route path="/privacy" element={<Privacy />} />
      {/* <Route
        path="/contact"
        element={
          <Contact name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />
        }
      /> */}
    </Routes>
  );
};

export default AnimatedRoutes;
