import { useState } from "react"
import logo from "../image/food-logo-59E5A73AFD-seeklogo.co.png"
import "./head.css"
import { Link, Outlet } from "react-router-dom"
import useOnlinestatus from "../Utilities/useOnlinestatus"
const Header = () => {
  const[login,setlogin]=useState("login")
  const onstatus=useOnlinestatus()


  return (
    <div className='flex justify-between items-center  bg-slate-900 text-white px-3  font-bold'>
        <div className='w-20 h-14 ml-4 mt-4'>
            <img src={logo} alt='...' className=''></img>
        </div>
        <div className='flex items-center'>
                <ul className="flex justify-between items-center gap-5">
                  <div className="flex justify-center items-start gap-1">online status : <div className="mt-2">{onstatus ? <h1 className="bg-green-400 rounded-full w-3 h-3"> </h1>:<h1 className="bg-red-400 rounded-full w-3 h-3"> </h1>}</div></div>
                  <Link to=''>Home</Link>
                  <Link to='about'>About</Link>
                  <Link to='contact'>Contact</Link>
                  <Link to='cart'>Cart</Link>
                  <Link to='grocery'>Grocery</Link>
                  {/* <Link to='item'>Item</Link> */}
                    <li onClick={()=>{login==="login" ? setlogin("logout") : setlogin("login")}}>{login}</li>
                </ul>
        </div>
        <Outlet/>
    </div>
  )
}

export default Header
