import React from 'react'

const Modal=({finalResult,resetGame,QuitGame})=>{
    return(
        <div className='fixed inset-0 z-50   bg-black/50 flex justify-center items-center'>
            <div className='text-white ring-4 ring-gray-600  bg-white  w-96 h-40  flex flex-col justify-evenly rounded-2xl' >
                <h2 className="text-2xl font-bold text-center text-black  ">
                    {finalResult}
                </h2>
                <div className='flex justify-between items-center px-6 m-3 py-2'>
                    <button className='text-lg font-bold bg-green-800 rounded-lg w-32 py-1.5 hover:scale-105 transition hover:bg-green-500' onClick={resetGame}>Play Again</button>
                    <button className='text-lg font-bold bg-red-800 rounded-lg w-32 py-1.5 hover:scale-105 transition hover:bg-red-500 ' onClick={QuitGame}>
                        Quit
                    </button>
                </div>
            </div>

        </div>
    )
  }

export default Modal