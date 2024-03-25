import { useState,useEffect } from "react"


const useOnlinestatus = () => {
  const[onstatus,setstatus]=useState(true)
  useEffect(()=>{
 window.addEventListener("offline",()=>{
    setstatus(false)
 })
 window.addEventListener("online",()=>{
    setstatus(true)
 })
  },[])

  return onstatus;

}

export default useOnlinestatus