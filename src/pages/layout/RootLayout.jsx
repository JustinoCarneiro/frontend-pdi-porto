import React from 'react'
import { Outlet } from 'react-router-dom'
import { Topbar, Sidebar } from '../../components'
import style from './style.module.css'
import {useMatches} from 'react-router-dom'

const RootLayout = () => {
 const matchc = useMatches()
 console.log(matchc)
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
          <p>{}</p>
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default RootLayout