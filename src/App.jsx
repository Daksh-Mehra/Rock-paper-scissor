import React from 'react'
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Game from './components/Game';

function App() {
  const [showgame, setshowgame] = useState(false)
  return(
    <>
    {!showgame?<LandingPage  startthegame={setshowgame} />:<Game showgame={setshowgame}/>}
    </>
  )
  
}

export default App

