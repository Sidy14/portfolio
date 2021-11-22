import './App.css';
import './portfolio.css';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Skills from './Skills';
import Work from './Work';
import Follow from './Follow';
import { useEffect } from 'react';
import Observer from './intersection-observer';

function App() {

  const elementInViewport = (el) => {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

  // useEffect(() => {
  //   document.addEventListener('scroll', function(e) {
  //     Observer()
  //   })
  // });

  window.addEventListener("load", (event) => {
    Observer();
  }, false);
  

  return (
    <div className="App">
      <Navbar />
      <div className="padding10">
        <About />
        <Skills />
        <Work />
        <Contact />
        <Follow />
      </div>
    </div>
  );
}

export default App;
