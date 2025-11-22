import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TimelineWithPause() {
  const [scope, animate] = useAnimate();
  const [paused, setPaused] = useState(false);
  const pauseTimeRef = useRef(0); // store remaining time when paused
  const animationRefs = useRef([]); // store running animations

  useEffect(() => {
    let running = true;

    async function runTimeline() {
      // Box1 moves
      if (!running) return;
      const anim1 = animate(".box1", { x: 200 }, { duration: 2,delay:4 });
      animationRefs.current.push(anim1);
      await anim1;

      // Wait 0.5s (like "+=0.5")
      if (!running) return;
      await new Promise(res => setTimeout(res, 500));

      // Box2 moves
      if (!running) return;
      const anim2 = animate(".box2", { y: 150 }, { duration: 2 });
      animationRefs.current.push(anim2);
      await anim2;
    }

    runTimeline();

    return () => {
      running = false; // cleanup on unmount
    };
  }, []);

  const handlePause = () => {
    setPaused(true);
    // Stop all running animations
    animationRefs.current.forEach(anim => anim.stop && anim.stop());
  };

  const handleResume = async () => {
    setPaused(false);

    // Resume from current positions
    const box1 = document.querySelector(".box1");
    const box2 = document.querySelector(".box2");

    // Continue animating Box1 if not finished
    if (box1.getBoundingClientRect().x < 200) {
      await animate(box1, { x: 200 }, { duration: 2 });
    }

    // Continue animating Box2 if not finished
    if (box2.getBoundingClientRect().y < 150) {
      await animate(box2, { y: 150 }, { duration: 2 });
    }
  };

  return (
    <div ref={scope} style={{ display: "flex", gap: 20, marginTop: 50 }}>
      <div className="box1" style={{ width: 50, height: 50, background: "red" }} />
      <div className="box2" style={{ width: 50, height: 50, background: "blue" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginLeft: 20 }}>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleResume}>Resume</button>
      </div>
    </div>
  );
}
