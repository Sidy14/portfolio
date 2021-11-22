const Observer = () => {
    let options = {
    };
    
    let sections = document.querySelectorAll('.section');
    
    let callback = (entries, observer) => {
        entries.forEach(entry => {
            console.log(entries);
          // Each entry describes an intersection change for one observed
          // target element:
          //   entry.boundingClientRect
          //   entry.intersectionRatio
          //   entry.intersectionRect
          //   entry.isIntersecting
          //   entry.rootBounds
          //   entry.target
          //   entry.time
        });
      };
      let observer = new IntersectionObserver(callback, options);
      sections.forEach(section => {
        observer.observe(section);
      })
}
 
export default Observer;

