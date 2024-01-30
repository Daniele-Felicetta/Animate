import React, { ReactHTML, useRef } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { gsapObjMethods } from "./Controls";
import { useGSAP } from "@gsap/react";


interface Props {
  children?: ReactNode;
  hover?: boolean;
  click?: boolean;
  classProp?: string;
  gsapObj: gsapObjMethods;
  timeline?: gsap.core.Timeline;
}

function SimpleBox({ children, hover, classProp, click, gsapObj,timeline }: Props) {
  const [clickTrigger, setClickTrigger] = useState(0);
  const [hoverTrigger, setHoverTrigger] = useState(0);
  const gsapRef = useRef(null)

  useGSAP(() => {
    timeline?.to(gsapRef.current, {
      rotation: "+=900",
      x:100,
    },)
    
  },{dependencies:[timeline]})
  const box: () => ReactNode = () => {
    if (hover) {
      return (
        <div
          className={"simpleBox " + classProp}
          onMouseEnter={() => setHoverTrigger(hoverTrigger + 1)}
        >
          {children}
        </div>
      );
    } else if (click) {
      return (
        <div
          className={"simpleBox " + classProp}
          onClick={() => setClickTrigger(clickTrigger + 1)}
        >
          {children}
        </div>
      );
    } else if (hover && click) {
      return (
        <div
          className={"simpleBox " + classProp}
          onClick={() => setClickTrigger(clickTrigger + 1)}
          onMouseEnter={() => setHoverTrigger(hoverTrigger + 1)}
        >
          {children}
        </div>
      );
    } else {
      return <div className={"simpleBox " + classProp}>{children}</div>;
    }
  };

  return (
    <div ref={gsapRef} className="flex flex-col items-center justify-center">
      {box()}
      <h1>BOx FInta</h1>
      <Controls {...gsapObj}></Controls>
    </div>
  );
}

function Controls(gsapObj: gsapObjMethods) {
  console.log(gsapObj);
  return (
    <div className="">
      <button onClick={() => gsapObj.play()}>Play</button>
      <button onClick={() => gsapObj.pause()}>Pause</button>
      <button onClick={() => gsapObj.resume()}>Resume</button>
      <button onClick={() => gsapObj.reverse()}>Reverse</button>
      <button onClick={() => gsapObj.restart()}>Restart</button>
    </div>
  );
}

export default SimpleBox;
