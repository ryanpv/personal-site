import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import BlogList from "./pages/blogList";
import MainPage from "./components/mainPage";
import VideoStreamerBlog from "./components/video-streamer-blog";


function App() {
  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>

      <Routes>
        <Route exact path='/' element={ <MainPage /> } />
        <Route path="/blogs" element={ <BlogList /> } />
        <Route path="/blogs/item1" element={ <VideoStreamerBlog /> } />
      </Routes>
    </>
  );
}

export default App;
