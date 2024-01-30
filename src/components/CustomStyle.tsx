"use client";
import React from "react";
import "@styles/aria.css";
import { useState } from "react";
function CustomStyle() {
  const [toggleSettings, setToggleSettings] = useState<boolean>(false);
  return (
    <div className="flex flex-col">
      <button
        onClick={() => setToggleSettings(!toggleSettings)}
        className="self-end"
      >
        Settings
      </button>
      {toggleSettings &&
        <div className="bg-white rounded-lg p-4 ">
          <div>
            <div className="flex flex-col items-start">
              <div className="flex justify-between w-full gap-8">
                <label htmlFor="">Modify Background Color</label>
                <input type="color" />
              </div>
              <div className="flex justify-between w-full gap-8 mt-2">
                <label htmlFor="">Modify Primary Color</label>
                <input type="color" />
              </div>
              <div className="flex justify-between w-full gap-8 mt-2">
                <label htmlFor="">Modify Secondary Color</label>
                <input type="color" />
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default CustomStyle;
