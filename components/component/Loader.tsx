import React from 'react'

const Loader = () => {
  return (
 /* From Uiverse.io by yohohopizza */ 
<div className="flex flex-row gap-2 mb-2 items-center justify-center">
  <div className="w-4 h-4 rounded-full bg-black animate-bounce"></div>
  <div
    className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:-.3s]"
  ></div>
  <div
    className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:-.5s]"
  ></div>
</div>

  )
}

export default Loader