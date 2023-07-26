import React from 'react'
import "./App.css"
import LandingScreen from './Components/LandingScreen'
import {  HashRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from './Components/LoginScreen'
import Index from './Components/Index'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import DummyPage from './Pages/DummyPage'

export default function App() {
  return ( 

     <HashRouter>  
    <React.Fragment>

            
              <Routes>
                <Route path='/' element={<LandingScreen/>}/>
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/index' element={<Index/>}>
                  <Route path='/index/home' element={<Home/>}/>
                  <Route path='/index/dashboard' element={<Dashboard/>}/>
                  <Route path='/index/dummyscreen' element={<DummyPage/>}/>
                </Route>
              </Routes>
             

    </React.Fragment>
    </HashRouter>  
  )
}

