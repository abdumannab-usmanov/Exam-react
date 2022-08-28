import React from 'react'
import { Outlet} from 'react-router-dom'
import { Authors } from '../Authors'

export const Main = () => {
  return (
    <div> 
        <Authors/>

        <Outlet/>
    </div>
  )
}
