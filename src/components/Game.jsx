import React from 'react'
import { useState } from 'react';
import sound from '../hooks/sound';
import Modal from './Modal';


const Game = ({showgame}) => {

  const playsound=sound("click.wav");
  const moves=["rock","paper","scissor"];
  const rules={'rock':'scissor','scissor':'paper','paper':'rock'};
  
  const [showModal, setshowModal] = useState(false)
  const [finalResult, setfinalResult] = useState("")
  const [user_choice, setuser_choice] = useState(null)
  const [computer_choice, setcomputer_choice] = useState(null)

  const [result, setresult] = useState(' ')
  const [point, setpoint] = useState({you:0,computer:0})

  

  const playRound =(user_move)=>{

    const computer_move=moves[Math.floor(Math.random()*moves.length)];
    setcomputer_choice(computer_move)
    setuser_choice(user_move);

    if(user_move===computer_move){
      setresult("It's a Tie");
    }
    else if(rules[user_move]===computer_move){
      setresult("You Win!");
      setpoint(prev=>{
        const newval={...prev,you:prev.you+1};
        if(newval.you==5){
            setfinalResult("YOU WON the Game!");
            setshowModal(true);
        }
        return newval
      });
    }
    
    else{
          setresult("You Lose");
           setpoint(prev=>{
        const newval={...prev,computer:prev.computer+1};
        if(newval.computer==5){
            setfinalResult("YOU Lost the Game!");
            setshowModal(true);
        }
        return newval
      });
    }
    if(point.you==5 || point.computer==5){
      
    }
  }

  const renderMoveImage=(move)=>move?`${move}.svg`:`warrior.svg`
  
  
  

  return (
    <>
    {
        showModal && <Modal  resetGame={()=>{playsound();
                        setcomputer_choice(null);
                        setuser_choice(null);
                        setfinalResult("");
                        setpoint({you:0,computer:0});
                        setshowModal(false);
                        setresult("")}} 

                        finalResult={finalResult}
                        
                        QuitGame={()=>{playsound();
                        setshowModal(false);
                        showgame(false);}}/>
    }
    <div className='bg-black w-screen relative min-h-screen'>
      <h1 className='text-white text-center text-4xl font-bold py-5 lg:py-3'>Rock, paper and scissors</h1>



      <div className='flex justify-center h-[35vh]  md:gap-16 items-center gap-6 p-4 xl:p-2 mt-6 '>
        <div>
            <h3 className='text-white text-center text-2xl font-bold mb-3'>YOU</h3>
        <div className='user p-3 border-4 border-amber-300 rounded-3xl'><img  src={renderMoveImage(user_choice)} alt={user_choice || "Your choice"}  className='w-28 h-28 md:w-40 md:h-40 xl:w-48 xl:h-48'/></div>
        </div>
          <div>
            <h3 className='text-white text-center text-2xl pt-12 font-bold mb-3'>VS</h3>
          </div>
        <div>
            <h3 className='text-white text-center text-2xl font-bold mb-3'>COMPUTER</h3>
        <div className='user p-3  border-amber-300 border-4 rounded-3xl'><img src={renderMoveImage(computer_choice)}  alt={computer_choice || "Computer choice"} className='w-28 h-28 md:w-40 md:h-40 xl:w-48 xl:h-48'/></div>
        </div>
      </div>


      <div className='text-white flex  flex-col w-full justify-center  items-center  gap:2 xl:gap-2 xl:mt-6 '>
        <p className='lg:text-xl text-lg  font-medium min-h-[30px]'> {result}</p>
        <p className='text-2xl font-bold  text-yellow-400  xl:pt-1'>SCORE</p>
        <div className='flex justify-around md:justify-center md:gap-36 xl:gap-60 w-full pt-2 '>
          <p className='text-xl font-bold '>YOU : <span className='text-yellow-400'>{point.you}/5</span></p>
          
          <p className='text-xl font-bold '>COMPUTER : <span className='text-yellow-400'>{point.computer}/5</span></p>

        </div>
      </div>




      <div className='absolute bottom-10 px-2 left-1/2 w-full max-w-md  transform -translate-x-1/2'>

        <h3 className='text-center my-4 text-white font-bold text-2xl'>Select Your Warrior</h3>

      <div className='flex justify-center items-center gap-4 ' >

        {
            moves.map((move)=>(
                <button key={move} className='ring-3 rounded-2xl p-2 ring-yellow-400 hover:bg-gray-900 transition hover:scale-105 hover:ring-white'onClick={()=>{playRound (move);
                  playsound();
                }}><img src={`${move}.svg`} alt={`${move} pic`}  className='w-20 h-20 cursor-pointer' /></button>
            ))
        }
        

        

      </div>
      </div>

    </div>
        </>
  )
}

export default Game