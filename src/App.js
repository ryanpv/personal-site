import Navbar from "./components/navbar";
import { Routes, Route, HashRouter } from "react-router-dom";
import BlogList from "./pages/blogList";
import MainPage from "./components/mainPage";
import VideoStreamerBlog from "./components/video-streamer-blog";
import React from "react";


function App() {
  return (
    <>
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
    </>
  );
}

export default App;
