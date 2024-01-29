"use client";

import React, { useRef, useState } from "react";
import "@styles/styles.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SimpleBox from "@components/SimpleBox";

function Prova() {
  const row = useRef(null);
  const all = useRef(null);
  const [clkBox1, setClkBox1] = useState(0);
  const [clkBox2, setClkBox2] = useState(0);
  useGSAP(
    (context) => {
      gsap.to(".box1", { rotation: "+=540", duration: "3", ease: "bounce" });
      console.log(context.data.length);
    },
    { dependencies: [clkBox1], scope: all, revertOnUpdate: true }
  );
  useGSAP(
    (context) => {
      gsap.to(".box2", { rotation: "-=533", duration: "3", ease: "" });
    },
    { dependencies: [clkBox2], scope: all, revertOnUpdate: true }
  );

  useGSAP(
    (context) => {
      gsap.to(".box1", { rotation: "+=540", duration: "3", ease: "bounce" });
      gsap.to(".box2", { rotation: "-=533", duration: "3", ease: "" });
    },
    { scope: all, revertOnUpdate: true }
  );

  return (
    <div ref={all}>
      <div>
        <h3>{clkBox1}</h3>
        <h3>{clkBox2}</h3>
      </div>
      <div className="row flex justify-evenly h-screen items-center">
        <div
          onMouseEnter={() => setClkBox1(clkBox1 + 1)}
          className="box box1"
        ></div>
        <div
          onMouseEnter={() => setClkBox2(clkBox2 + 1)}
          className="box box2"
        ></div>
      </div>
      <div className="row flex justify-evenly h-screen items-center">
        <div className="box box1"></div>
        <div className="box"></div>
      </div>
      <div className="row flex justify-evenly h-screen items-center">
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}

export default Prova;
