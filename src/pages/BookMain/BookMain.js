import React from 'react'
import { Outlet} from 'react-router-dom'
import { Category } from '../Category/Category'

export const BookMain = () => {
  return (
    <div> 
        <Category/>
        <Outlet/>
    </div>
  )
}
