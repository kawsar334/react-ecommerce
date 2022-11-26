import { useState } from "react"
import "./navbar.scss"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  const [open, setOpen] = useState(true)


  return (
    <div className="navContainer" id="navbar">
    { open &&  <div className="navWrapper">
      <div className="navleft">
        <span><i class="fa-solid fa-sort-down"></i>En</span>
        <div className="navSearch">
          <input type="text" name="" id="" placeholder="Search..." />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="navmIddle">
        <NavLink to="/" >Continue Shoping</NavLink>
      </div>
      <div className="navRight">
        <ul className="navItems">
          <li><NavLink  to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/cart" className="counterLink">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="count">10</span></NavLink>
              </li>
        </ul>
      </div>
      </div>}
      <div className="menu" onClick={()=>setOpen(!open)}>
          <i className="fa-solid fa-bars"></i>
      </div>
      
    </div>
  )
}

export default Navbar