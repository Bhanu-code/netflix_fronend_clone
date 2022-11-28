import React from 'react'
import logo from '../assets/logo.png'
import '../styles/header.scss'
// import { Link } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'

export default function Header() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className='links'>
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">TV Shows</a>
        <a href="#">Web-Series</a>
        <a href="#">Broadcasts</a>
      </div>

      <ImSearch />


    </nav>
  )
}
