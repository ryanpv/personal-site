import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import { ScrollerHandler } from "./components/scrollHandler";
import { ContactUs } from "./components/contactForm";
import PersonalProjects from "./pages/projects";

function App() {

  return (
    <>
      <ScrollerHandler />

      <div className="sticky top-0">
        <Navbar />
      </div>
      
      <section id="homepage">
        <div>
          <Homepage />
        </div>
      </section>

      <section id="projects">
        <div>
          <PersonalProjects />
        </div>
      </section>

      <section id="contact">
        <div>
          <ContactUs />
        </div>
      </section>
    </>
  );
}

export default App;
