import React from "react";

export interface gsapObjMethods {
  play: () => void;
  pause: () => void;
  resume: () => void;
  reverse: () => void;
  restart: () => void;
  to?:()=>void; 
  id?: number;
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

export default Controls;
