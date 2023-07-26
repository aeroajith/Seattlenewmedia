import React from 'react'
import LoginScreen from './LoginScreen'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default function LandingScreen() {
    return (
        <div className='Landing-Screen'>
          <div >
          <Link to="/login"><Button  >Login</Button></Link>
          </div>
         
          
        </div>
      )
    }
    
