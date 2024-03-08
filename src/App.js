import Navbar from "./components/navbar";
import { Routes, Route, HashRouter } from "react-router-dom";
import BlogList from "./pages/blogList";
import MainPage from "./components/mainPage";
import VideoStreamerBlog from "./components/video-streamer-blog";


function App() {
  return (
    <>
    <HashRouter>

      <div className="sticky top-5 px-5">
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/projects' element={ <MainPage /> } />
        <Route path='/about' element={ <MainPage /> } />
        <Route path='/contact' element={ <MainPage /> } />
        <Route path="/blogs" element={ <BlogList /> } />
        <Route path="/blogs/:blogItem" element={ <VideoStreamerBlog /> } />
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
