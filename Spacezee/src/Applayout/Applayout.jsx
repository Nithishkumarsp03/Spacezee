import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home'
import Headers from '../Pages/Header/Headers'
import Dashboard from '../Pages/Dashboard/Dashboard'
import GenerateNew from '../Pages/GenerateNew/GenerateNew'
import './Applayout.css'

export default function Applayout() {
  return (
    <div className='Applayout'>

      <div className='main-header'>
           <Headers />
      </div>

      <div className='main-body'>
      <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/dashboard/new' element={<GenerateNew/>}/> 
        </Routes>
      </Router>
      </div>
     
    </div>
  )
}
