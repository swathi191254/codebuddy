import React from 'react'
import './Home.css'
import Drop from './DropMenu'
import { Slides } from './slider'
export const Home = () => {
  return (
    <div className='home'>
      <div className='flex'>
          <div className='flex-div'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX0QzZMr1AhlvP/wQf/////vgD0Nia63LtAq0Ww0vkAkfP/4636uLRJrk3/+Pj6saz2bWT1TEBVs1l0v3e027X4/Pn8zsv0PzLQ6NEsm/T/xBVWrPX/zUim0Pr/4qD3+//H4vz/7cPzJg8zqDj94N7h7+Hd6/z/8tsAjPI036d3AAABpElEQVR4nO3cSU5CURBA0fr4aBVFAcWGxt79r1CIEzFx+Ovlk3M3UDmppIYVpZTLq9l1tN3govxuOGra7ma+WO4nRSm3MbhrHVhB2ExHzeogvM3wVREejKsSl5ECrCNsps0yrgYpwErCZrSIWc4Kawmn82j/ilYVNjdJvnrChpCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8F/hIKmXP8LXUVJxkdXbkfB9mFWUU4+w+xF2P8LuR9j9CLsfYfeLcVYfR3M/z7OKSVJf4yPheT+r6CU1+Ss8S4qQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPBf4f2JCx/i8cSFT7GenLSwv4ltDrDaDpdRdjlLrCPsPx8+lu96GcYawv7Z889P9u36sf2Lmi98eNos95O+AYpCk2OCi44MAAAAAElFTkSuQmCC" alt="" />
          <h3>Microsoft Bing</h3>
          </div>
        
        <p>Images</p>
        <p>Vedioes</p>
        <p>Translate</p>
        <p>...</p>
      
      </div>
      <div className='drop'>
          <Drop />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='search'>
          <input type="text" className='input' name="" id="" />
         
          <img src="data:image/png;base64,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" alt="" />
          <img src='data:image/png;base64,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' alt=''/>
          <img src='data:image/png;base64,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' alt=''/>
      </div>
<div className='slides'><Slides/></div>
    </div>
  )
}
