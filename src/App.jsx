import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'

function App() {
  return (
    <>
      <div className=''>
        <Navbar />
      </div>
      <News />
    </>
  )
}

export default App