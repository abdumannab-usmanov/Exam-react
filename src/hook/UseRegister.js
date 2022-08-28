import { useContext } from "react";
import { ContextRegister } from "../context/ContextRegister";

export const UseRegister = ()=>{
  const {register,setRegister} = useContext(ContextRegister)
  return {register,setRegister}
}