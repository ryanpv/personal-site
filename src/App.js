import Navbar from "./components/navbar";
import { useLocation, useParams, Routes, Route } from "react-router-dom";
import BlogList from "./pages/blogList";
import MainPage from "./components/mainPage";
import VideoStreamerBlog from "./components/video-streamer-blog";


function App() {
  const pathname= useLocation();
  const params = useParams();
  console.log("pathname: ", pathname.pathname)
  console.log("useparams: ", params)

  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>

      <Routes>
        <Route exact path='/' element={ <MainPage /> } />
        <Route path="/blogs" element={ <BlogList /> } >
        </Route>
          <Route path="/blogs/item1" element={ <VideoStreamerBlog /> } />
      </Routes>
    </>
  );
}

export default App;
