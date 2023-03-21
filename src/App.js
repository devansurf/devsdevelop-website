import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "DevsDevelop",
    location: "",
    tagline: "",
    email: "devsdevelop@gmail.com",
    availability: "",
    brand:
      "",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
