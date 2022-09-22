import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
return (
<div style={{display:"flex",gap:"30px"}}>
<Link to={"/"}>Home Page</Link>
<Link to={"/user"}>USER</Link>
<Link to={"/admin"}>Admin Page</Link>
<Link to={"/login"}>Login</Link>
<Link to={"/signup"}>Signup</Link>
</div>
)
}

export default Navbar