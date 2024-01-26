import "./App.css";
import { useLayoutEffect,useRef } from "react";
import gsap from "gsap";
function App() {

  const comp = useRef(null)

  useLayoutEffect(()=>{
    let ctx = gsap.context( () => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: -100,
        duration: 1.3,
        delay: 0.3,
      }).from(["#intro-1","#intro-2","#intro-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      }).to(["#intro-1","#intro-2","#intro-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      }).to("#intro-slider", {
        xPercent: -100,
        duration: 1.3,
        delay: 0.3,
      }).from("#welcome", {
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
      })
    }, comp)

    return () => ctx.revert()
  },[])

  return (
    <div className="relative" ref={comp}>
      <div id="intro-slider" className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-space-grotesk z-10 w-full flex flex-col gap-10 tracking-tight">
        <h1 className="text-9xl" id="intro-1">Software engineer</h1>
        <h1 className="text-9xl" id="intro-2">Designer</h1>
        <h1 className="text-9xl" id="intro-3">Freelancer</h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <h1 id="welcome" className="text-9xl font-bold text-gray-100 font-space-grotesk">
          Welcome.
        </h1>
      </div>
    </div>
  );
}

export default App;
