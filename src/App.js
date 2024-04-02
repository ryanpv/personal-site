import Navbar from "./components/navbar";
import { Routes, Route, HashRouter } from "react-router-dom";
import BlogList from "./pages/blogList";
import MainPage from "./components/mainPage";
import VideoStreamerBlog from "./components/video-streamer-blog";
import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


function App() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="min-h-screen">
      <HashRouter>
        <div className="flex w-full justify-center px-5 items-center fixed top-5 z-50" >
          <Navbar />
        </div>  

        <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path='/about' element={ <MainPage /> } />
          <Route path='/projects' element={ <MainPage /> } />
          <Route path='/contact' element={ <MainPage /> } />
          <Route path="/blogs" element={ <BlogList /> } />
          <Route path="/blogs/:blogItem" element={ <VideoStreamerBlog /> } />
        </Routes>
      </HashRouter>

      <footer
        className="z-50 text-center p-6 text-white text-xs font-semibold"
      > 
        COPYRIGHT © 2024 RYAN VOONG - ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}

export default App;
