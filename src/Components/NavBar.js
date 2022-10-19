import React from 'react'
import Toggle from '../Components/Toggle.js'
import CartWidget from './CartWidget.js'

const NavBar = () => {
  return (
    <div className="navbar bg-first-color text-second-color dark:bg-first-night-color dark:text-second-night-color">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a href='link'>HOME</a>
            </li>
            <li tabIndex={2}>
              <a className="justify-between" href='/cardcontainer'>PAQUETES</a>
            </li>
            <li><a href='link'>CONTACTO</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl" href='link'>TRAVEL<span className='text-5xl'>N</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href='link' className='hover:text-seventh-color'>HOME</a>
          </li>
          <li tabIndex={0}>
            <a href='/cardcontainer' className='hover:text-seventh-color'>PAQUETES</a>
          </li>
          <li>
            <a href='link' className='hover:text-seventh-color'>CONTACTO</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Toggle />
        <CartWidget/>
      </div>
    </div>
  )
}

export default NavBar