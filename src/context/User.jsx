import { createContext, useState } from "react";

export const Usercontext=createContext()


export const UserdataContext=({children})=>{
  const [username,setusername]=useState("Default user")

      return(
        <Usercontext.Provider value={{username,setusername}}>
          {children}
        </Usercontext.Provider>
      )
}

