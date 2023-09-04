import React, { useEffect, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { appAtom } from '../../atom/app.atom'
import { AppConst } from '../../const'

const Header = () => {
    const [appState, setAppState] =  useRecoilState(appAtom);
    const handleChangeThemeClick = () => {
        setAppState({theme: appState.theme === "dark" ? "light" : "dark"})
    }   
    useEffect(()=>{
        document.body?.classList.toggle("dark");
        // if(appState.theme == "dark") {
        // }else {
        // }
    },[appState.theme])
    const isDark = useMemo(()=> appState.theme == "dark",[appState.theme])
  return (
   <header>
  <div className="nav_bar">
    <ul>
      <li>
        <NavLink to="/" id="logo"><img src={isDark ? AppConst.logo.dark : AppConst.logo.light } alt="logo" /></NavLink>
      </li>
      <li><NavLink to="blog" >Blog</NavLink></li>
      <li><NavLink to="project" >Project</NavLink></li>
    </ul>
    <div className="theme_toggle">
      <button className="theme_toggle_btn" onClick={handleChangeThemeClick} >
        {isDark ? 
        <i className='fa-solid fa-moon'></i>: 
        <i className='fa-solid fa-lightbulb'></i> 
        }
      </button>
    </div>
    {/* <div className="blog-create">
      <button className="blog-create-button">
        <i className="fa-solid fa-pen" />
      </button>
    </div> */}
  </div>
</header>

)
}

export default Header