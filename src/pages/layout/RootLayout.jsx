import React from 'react'
import { Outlet, useResolvedPath, useRoutes } from 'react-router-dom'
import { Topbar, Sidebar } from '../../components'
import { formatPathname } from "../../utils";
import style from './style.module.css'

const RootLayout = () => {
 const {pathname} =  useResolvedPath()
 const formatedpath = formatPathname(pathname)
  return (
    <div className={style['container']}>
      <aside className={style.container__aside}>
        <Sidebar />
      </aside>

      <div className={style.container__box}>
        
        <header className={style['box--header']}>
          <Topbar />
        </header>

        <main className={style['box--main']}>
          <p className={style.pathname}>{formatedpath}</p>
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default RootLayout