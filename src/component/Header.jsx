import { useContext, useState } from "react"
import logo from "../image/letter-restaurant-logo-restauran.png"
import "./head.css"
import { Link, Outlet } from "react-router-dom"
import useOnlinestatus from "../Utilities/useOnlinestatus"
import { Usercontext } from "../context/User"
const Header = () => {
  const[login,setlogin]=useState("login")
  const onstatus=useOnlinestatus()
  const {username,setusername}=useContext(Usercontext)


  return (
    <div className='flex justify-between items-center  bg-slate-900 text-white px-3 py-2  font-bold'>
        <div className='w-[100px] h-[100px] ml-4'>
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
                  <Link to='grocery'>{username}</Link>
                  <input type="text" value={username} name="username" className=" text-gray-950" onChange={(e)=>{setusername(e.target.value)}} />
                  {/* <Link to='item'>Item</Link> */}
                    <li onClick={()=>{login==="login" ? setlogin("logout") : setlogin("login")}}>{login}</li>
                </ul>
        </div>
        <Outlet/>
    </div>
  )
}

export default Header
