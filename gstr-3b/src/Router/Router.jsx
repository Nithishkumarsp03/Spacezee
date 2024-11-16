import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Header from '../Components/Header'
import Page1 from '../Pages/Page1/Page1'
import Page2 from '../Pages/Page2/Page2'
import Page3 from '../Pages/Page3/Page3'
import Page4 from '../Pages/Page4/Page4'
import Page5 from '../Pages/Page5/Page5'
import Page6 from '../Pages/Page6/Page6'
import Page7 from '../Pages/Page7/Page7'
import Page8 from '../Pages/Page8/Page8'
import Page9 from '../Pages/Page9/Page9'
import Page10 from '../Pages/Page10/Page10'
import Page11 from '../Pages/Page11/Page11'
import Error from '../Components/404/Error'
import '../Styles/router.css'

export default function Routers() {
  return (
        <div className='Applayout'>
          <Router>
            <Routes>
              <Route path='/' element={<Page1/>}/>
              <Route path='/page2' element={<Page2/>}/>
              <Route path='/page3' element={<Page3/>}/>
              <Route path='/page4' element={<Page4/>}/>
              <Route path='/page5' element={<Page5/>}/>
              <Route path='/page6' element={<Page6/>}/>
              <Route path='/page7' element={<Page7/>}/>
              <Route path='/page8' element={<Page8/>}/>
              <Route path='/page9' element={<Page9/>}/>
              <Route path='/page10' element={<Page10/>}/>
              <Route path='/page11' element={<Page11/>}/>
              <Route path='*' element={<Error />}/>
            </Routes>
          </Router>
        </div>
  )
}
