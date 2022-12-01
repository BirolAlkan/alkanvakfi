import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
        <li>
         <NavLink 
              style={({ isActive }) => ({
                color: isActive && "red",
              })} 
              to="/" className="nav-link active" aria-current="page">
                Home
         </NavLink>
        </li>
        <li><a href='/'>Home</a> </li>
        <li><a href='/'>Home</a> </li>
    </ul>
  )
}

export default Navbar