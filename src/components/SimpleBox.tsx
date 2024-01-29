import React, { ReactHTML } from 'react'
import { useState } from 'react'
import { ReactNode } from 'react'
interface Props{
  children?: ReactNode
  hover?: boolean
  click?: boolean
  classProp?: string
}

function SimpleBox({ children, hover, classProp, click }: Props) {
  const [clickTrigger, setClickTrigger] = useState(0);
  const [hoverTrigger, setHoverTrigger] = useState(0);
  
  if (hover) {
    return (
      <div className={"simpleBox" + classProp} onMouseEnter={()=>setHoverTrigger(hoverTrigger+1)}> 
        {children}
      </div>
    )
  }
  else if (click) {
    <div
      className={"simpleBox" + classProp}
      onClick={() => setClickTrigger(clickTrigger + 1)}
    >
      {children}
    </div>;
  }
  else if (hover && click) {
    <div
      className={"simpleBox" + classProp}
      onClick={() => setClickTrigger(clickTrigger + 1)}
      onMouseEnter={() => setHoverTrigger(hoverTrigger + 1)}
    >
      {children}
    </div>;
  }
  else {
    
  }

}

export default SimpleBox