import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-end gap-2 ">
          <NavLink className="navbar-brand" to="#">
//       <img src="./img/alkan-logo.png" alt="logo" />
//     </NavLink>
         <NavLink className="text-decoration-none text-dark" to="/" className="nav-link active" aria-current="page">
                Home
         </NavLink>
        
        <NavLink className="text-decoration-none text-dark" to='/About'>About</NavLink> 
        <NavLink className="text-decoration-none text-dark" to='/Contact'>Contact</NavLink> 
        
        
    </div>     
   
  )
}

export default Navbar