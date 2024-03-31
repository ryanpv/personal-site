export const elementToTop = (location, setState) => {
  const element = document.getElementById(location.pathname.replace("/", ""))
  console.log("elem", location);

  window.scrollTo({
    behavior: "smooth",
    top: element ? element.offsetTop : 0
  });

  setState && setState(false)
}