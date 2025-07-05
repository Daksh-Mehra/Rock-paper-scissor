import React from 'react'
import sound from '../hooks/sound'

const LandingPage = ({startthegame}) => {

  const playsound=sound("click.wav");

  return (
    <div className='h-screen w-screen bg-black flex flex-col  landingbg items-center gap-12 '>
        <h1 className='text-center text-5xl text-white py-[20vh] wrap-normal   xl:text-7xl font-bold leading-12 '>Rock, Paper and Scissors</h1>
        <button onClick={()=>{
          playsound();
          startthegame(true)}} className='bg-gradient-to-br from-yellow-400 via-orange-300 to-orange-700 text-2xl font-bold px-12 ring-4 ring-white rounded-3xl py-3 uppercase  tracking-wider  hover:text-white transition hover:scale-125 ease-in-out duration-200   '>Start</button>
    </div>
  )
}

export default LandingPage