import React from 'react'
import style from './style.module.css'
import SideMenu from '../menu/SideMenu'

const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style['header-container']}>
        Sidebar
      </div>
      <div className={style['nav-container']}>
        <SideMenu />
      </div>
    </div>
  )
}

export default Sidebar