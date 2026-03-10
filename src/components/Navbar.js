"use client"
import { useState } from "react"
import "../styles/navbar.css"

export default function Navbar(){

  const [menuOpen,setMenuOpen] = useState(false)

  return(
    <nav className="navbar">

      <div className="nav-container">

        <div className="logo">
          <img src="/logo.png" alt="logo"/>
        </div>

        {/* Hamburger button */}
        <div 
          className="hamburger"
          onClick={()=>setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

    </nav>
  )
}