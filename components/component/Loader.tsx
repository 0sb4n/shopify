import React from 'react'
import style from "../../style/user.module.css"
const Loader = () => {
  return (
     <div className='flex items-center justify-center'>

<svg viewBox="0 0 240 240" height="150" width="150" className={style.pl}>
  <circle 
    strokeLinecap="round" 
    strokeDashoffset="-330" 
    strokeDasharray="0 660" 
    strokeWidth="20" 
    stroke="#000" 
    fill="none" 
    r="105" 
    cy="120" 
    cx="120" 
    className={`${style.pl__ring} ${style['pl__ring--a']}`}>
  </circle>
  
  <circle 
    strokeLinecap="round" 
    strokeDashoffset="-110" 
    strokeDasharray="0 220" 
    strokeWidth="20" 
    stroke="#000" 
    fill="none" 
    r="35" 
    cy="120" 
    cx="120" 
    className={`${style.pl__ring} ${style['pl__ring--b']}`}>
  </circle>
  
  <circle 
    strokeLinecap="round" 
    strokeDasharray="0 440" 
    strokeWidth="20" 
    stroke="#000" 
    fill="none" 
    r="70" 
    cy="120" 
    cx="85" 
    className={`${style.pl__ring} ${style['pl__ring--c']}`}>
  </circle>
  
  <circle 
    strokeLinecap="round" 
    strokeDasharray="0 440" 
    strokeWidth="20" 
    stroke="#000" 
    fill="none" 
    r="70" 
    cy="120" 
    cx="155" 
    className={`${style.pl__ring} ${style['pl__ring--d']}`}>
  </circle>
</svg>
     </div>



  )
}

export default Loader