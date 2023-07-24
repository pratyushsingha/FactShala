import React, { Component } from 'react'
import Loading from '../assets/spinner.gif'
const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <img src={Loading} alt="" />
    </div>
  )
}

export default Spinner