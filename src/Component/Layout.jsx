import React from 'react'
import Navbar from '../Navbar'
import Overlay from './Overlay'


const Layout = ({children}) => {
  return (
    <div>
    <Navbar  />
    <Overlay />
    <div>{children}</div>
    </div>
  )
}

export default Layout
