import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, brand, email, availability }) => {
  const appVersion = "2.1.0"; 
  return (
    <section className="about">
      <PageHeader title="About Me" description="Let me introduce myself" />
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} />
      <div id="app-version-playstore" style={{ display: 'none' }}>
        {appVersion}
      </div>
      <div id="app-version-appstore" style={{ display: 'none' }}>
        {appVersion}
      </div>
    </section>
  );
};

export default About;
