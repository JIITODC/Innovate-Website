import React from 'react'
import { Background } from './uiComp/Background'

function Homepage() {
  return (
    <div className='h-screen w-screen no-scrollbar overflow-y-scroll overflow-x-hidden'>
       <Background />
       <div className='h-screen w-screen'></div>
    </div>
  )
}

export default Homepage
    