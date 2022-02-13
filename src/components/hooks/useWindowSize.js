import { useEffect, useState } from "react";


function getWindowSize() {
    var { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
   function useWindowSize() {
    var [windowSize, setWindowSize] = useState(
      getWindowSize()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowSize;
  }
  export default useWindowSize;