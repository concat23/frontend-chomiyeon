import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import ListCmyEmployeeComponent from './components/ListCmyEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CmyEmployeeComponent from './components/CmyEmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className='horizontal-container'>
          <HeaderComponent />
          <Routes>
              {/* http://localhost:3000/ */}
              <Route path='/' element={ <ListCmyEmployeeComponent />}></Route>
               {/* http://localhost:3000/employees */}
              <Route path='/employees' element={<ListCmyEmployeeComponent />}></Route>
              {/* http://localhost:3000/employees/create/employee */}
              <Route path='/employees/create/employee' element={<CmyEmployeeComponent />}></Route>
               {/* http://localhost:3000/employees/update/employee/{id} */}
               <Route path="/employees/update/employee/:id" element={<CmyEmployeeComponent />} />

          </Routes>
          <FooterComponent />
        </div>  
      </BrowserRouter>
      
    </>
  )
}

export default App
