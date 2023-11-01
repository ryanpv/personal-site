import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import { ScrollerHandler } from "./components/scrollHandler";
import ContactUs from "./components/contactForm";
import PersonalProjects from "./pages/projects";
import { useLocation } from "react-router-dom";
import BlogList from "./components/blogList";


function App() {
  const pathname= useLocation();
  console.log("pathname: ", pathname.pathname)

  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>

{ pathname.pathname === "blogs" ? 
      <section id="blogs">
        <div>
          <BlogList />
        </div>
      </section>
      :
    <>
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
}

      


      <ScrollerHandler />
    </>
  );
}

export default App;
