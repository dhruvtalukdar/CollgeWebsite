import React from 'react'
import { NavLink } from 'react-router-dom'

function StudentAdmin() {
  return (
    <div className="flex items-center" >
    <NavLink
      to="/studentportal"
      className={({ isActive }) =>
        `bg-blue-500 hover:bg-purple-700 text-white text-center text-2xl pt-5 font-bold py-2 px-4 w-full h-28 rounded-md duration-200 ${
          isActive ? "bg-blue-700" : "bg-blue-500"
        }`
      }
    >
      Student Portal For Result/Fee Payment/Admission
    </NavLink>
  </div>
  )
}

export default  StudentAdmin


// This is a student portal button