import { useState } from 'react';
import './App.css';
import Body from './Components/Body';
import Graphics from './Components/Graphics';
import Roadmap from './Components/Roadmap'
import Footer from './Components/Footer'
import Logo from './assets/logo.png'
import './Components/Styles/Display.css'
function App() {

  return (
    <>
      <div className='Display'>
            <img src={Logo} alt="Logo" className='Display-Logo' />
            <ul className='Display-Navbar'>
                <a href="https://t.me/jabbaverification"><li className='Display-Navbar-Element'>TELEGRAM</li></a>
                <a href="https://www.dextools.io/app/en/pairs"><li className='Display-Navbar-Element'>DEXTOOLS</li></a>
                <a href=""><li className='Display-Navbar-Element'>ROADMAP</li></a>
                <a href=""><li className='Display-Navbar-Element'>BUY</li></a>
            </ul>
        </div>
      <Body />
      <Graphics />
      <Roadmap />
      <Footer />
    </>
  )
}

export default App
