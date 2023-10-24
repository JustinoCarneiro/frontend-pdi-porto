import React from 'react'
import { Outlet } from 'react-router-dom'
import style from './style.module.css'

const RootLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout