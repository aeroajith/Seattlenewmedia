import React from "react";
import {Menu} from "antd"
import  {
  HomeOutlined,
  DashboardOutlined
} from "@ant-design/icons";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
export default function Sidebar() {

    const navigate = useNavigate()

  return (
    <div className="sidebar">
      <div className='sidebar'>
        <Menu

        onClick={(item)=>{
          navigate(item.key)
        }}
        items={[{
            label:"Home",
            icon:<HomeOutlined/>,
            key:"/index/home"
        },
        {
            label:"Dashboard",
            icon:<DashboardOutlined/>,
            key:"/index/dashboard"
        },
        {
            label:"Dummypage",
            key:"/index/dummyscreen"
        }
    ]}
        >

        </Menu>
    </div>
    </div>
  );
}

export function MiniSidebar() {
    const navigate = useNavigate()
  return (
    <div className="mini-sidebar">
            <Menu

    onClick={(item)=>{
    navigate(item.key)
    }}
    items={[{
        label:"Home",
        icon:<HomeOutlined/>,
        key:"/index/home"
    },
    {
        label:"Dashboard",
        icon:<DashboardOutlined/>,
        key:"/index/dashboard"
    },
    {
        label:"Dummypage",
        key:"/index/dummyscreen"
    }
    ]}
    >

    </Menu>
      
    </div>
  );
}