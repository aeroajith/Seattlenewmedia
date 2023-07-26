import { DashboardOutlined, HomeOutlined, ProjectOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import {FaBars} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import '../App.css'

export default function Sidebar({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    const menuItem =[
      {
        path:"/index/home",
        name:"Home",
        icon:<HomeOutlined/>
    },
      {
        path:"/index/dashboard",
        name:"Dashboard",
        icon:<DashboardOutlined/>,
    },
      {
        path:"/index/dummyscreen",
        name:"Dummypage",
        icon:<ProjectOutlined/>
    }
  ]

  return (
    <div className='container'>
      <div style={{width: isOpen ? "300px" : "50px"}} className='sidebar'>
        <div className='top_section'>
          <h1 style={{display:isOpen ? "block" :"none"}} className='logo'></h1>
          <div style={{marginLeft: isOpen ? "50px" :"0px"}} className='bars'>
           <FaBars onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className='icon'>{item.icon}</div>
              <div style={{display:isOpen ? "block" :"none"}} className='link_text'>{item.name}</div>
            </NavLink>
         ))
        }
      </div>
      <main style={{display:isOpen ? "none" :"none"}} >{children}</main>
    </div>
  )
}
