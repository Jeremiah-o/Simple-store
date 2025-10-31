import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [theme,setTheme]=useState("night")

    useEffect(()=>{
        const savedTheme= localStorage.getItem("theme") ||"night"
        setTheme(savedTheme)
    },[])

    const handleToggle = ()=>{
        const newTheme = theme==="night"?"light": "night"
        setTheme(newTheme)
        document.querySelector("html").setAttribute("data-theme",newTheme)
        localStorage.setItem("theme",newTheme)
    }
  return (
    <label className='swap swap-rotate'>
        <input type="checkbox" onChange={handleToggle} checked={theme==="night"} />
        <svg className='swap-on fill-current w-6 h-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'> {/*Sun icon*/}
          <path d='M5.64 17.657l-1.414 1.415-1.415-1.414 1.415-1.415 1.414 1.414zm0-11.314l1.414-1.415L5.64 3.515l-1.415 1.414L5.64 6.343zM12 4a8 8 0 108 8 8 8 0 00-8-8zm0 14a6 6 0 116-6 6.006 6.006 0 01-6 6zM12 2h1v2h-1zm0 18h1v2h-1zm10-10h2v1h-2zm-20 0H0v1h2z'/>
        </svg>

        <svg className='swap-off fill-current w-6 h-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'> {/*moon icon*/}
          <path d='M21.64 13A9 9 0 1112 3a7 7 0 009 9z'/>
        </svg>
    </label>
  )
}

export default ThemeToggle