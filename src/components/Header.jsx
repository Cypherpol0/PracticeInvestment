import React from 'react'
import InvLogo from '../assets/react.svg'

export const Header = () => {
  return (
    <header id="header">
      <img src={InvLogo} className="logo" alt="Investment logo" />
      <h1>Investment Tracker</h1>
      <p>Track your investments and watch your portfolio grow!</p>
    </header>
  )
}

