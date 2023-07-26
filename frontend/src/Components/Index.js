import React from 'react'

import "../App.css"
import Header from './Header'
import { Space } from 'antd'
import Sidebar from './Sidebar'
import Content from './Content'
import Footer from './Footer'
 
 export default function Index() {
   return (
     <div className='App'>
     <Header/>
     <Space className='sidemenuwithcontent'>
      <Sidebar></Sidebar>
      
      <Content></Content>
     </Space>
     <Footer/>
     
     </div>
     
     
   )
 }
 
 