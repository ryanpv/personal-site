import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollerHandler = ({ children }) => {
  const { pathname, hash } = useLocation();

  const handleScroll = () => {
    // const element = document.getElementById(pathname.replace("#", ""));
    const element = document.getElementById(pathname.replace("/", ""));
console.log('scroll handler executed');
    setTimeout(() => {
      window.scrollTo({
        behavior: "smooth",
        top: element ? element.offsetTop : 0
      });
    }, 100);
  };

  useEffect(() => {
    console.log('useeffect');
    handleScroll()
  }, [pathname, hash])

  return children
}