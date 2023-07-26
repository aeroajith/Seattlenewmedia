import { BellFilled, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import {Badge, Space, Typography} from 'antd'
import React from 'react'
import {  useNavigate  } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { logout } from './Actions/UserAction'

export default function Header() {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  

  const logoutHandler = () =>{
    dispatch(logout())
    navigate('/')

  }

  return (
    <div className='appHeader'>
        <Typography.Title style={{fontSize:"22px"}}>Seattlenewmedia</Typography.Title>
        <Space className='nav_icons'>
            <Badge count={4} dot>
            <SettingOutlined style={{fontSize:26, marginRight:"30px"}}/>
            </Badge>
            <Badge count={8} style={{marginRight:"50px"}}>
            <BellFilled style={{fontSize:26,  marginRight:"20px"}}/>
            </Badge>
            
            <LogoutOutlined onClick={logoutHandler} style={{fontSize:26, color:"red"}} />
           
        </Space>
    </div>
  )
}
