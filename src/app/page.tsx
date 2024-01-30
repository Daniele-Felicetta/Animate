"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import "@styles/styles.css";
import { useState } from "react";
export default function Home() {
  const [tween, setTween] = useState<gsap.core.Tween>()
  useGSAP(() => {
    let tween = gsap.to(".flair", {
      duration: 2,
      x: () => 300, // animate by the px width of the nav
      xPercent: -100, // offset by the width of the box
      rotation: 360,
      ease: "none",
      paused: true,
    });
    setTween(tween)
  });
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-4xl mb-10">HOME</h1>
        <div className="box flair"></div>
        <div className="">
          <button onClick={() => tween?.play()}>Play</button>
          <button onClick={() => tween?.pause()}>Pause</button>
          <button onClick={() => tween?.resume()}>Resume</button>
          <button onClick={() => tween?.reverse()}>Reverse</button>
          <button onClick={() => tween?.restart()}>Restart</button>
        </div>
      </main>
    </div>
  );
}
