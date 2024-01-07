import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import ListCmyEmployeeComponent from './components/ListCmyEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='horizontal-container'>
        <HeaderComponent />
        <ListCmyEmployeeComponent />
        <FooterComponent />
      </div>  
    </>
  )
}

export default App
