import { createContext, useState } from "react";
import { useEffect } from "react";
export const ContextRegister = createContext()
export const AuthRegister = ({children}) => {
  const Local = JSON.parse(localStorage.getItem('register'))
  const [register, setRegister] = useState(Local)


  useEffect(()=>{
   if(register){
    localStorage.setItem('register', JSON.stringify(register))
   }else{
    localStorage.removeItem('register')
   }


  },[register])

  return (
    <ContextRegister.Provider value={{register, setRegister}}>
      {children}
    </ContextRegister.Provider>
  )
}