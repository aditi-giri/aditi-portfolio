import "../styles/navbar.css"

export default function Navbar(){
  return(
    <nav className="navbar">

      <div className="container nav-container">

        <div className="logo">
          <img src="logo.png"></img>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

    </nav>
  )
}