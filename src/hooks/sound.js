import { useRef } from "react"


const sound = (sound) => {

    const audioref = useRef(new Audio(sound));


    const play=()=>{
        audioref.current.currentTime=0;
        audioref.current.play();
    }

    return play;
  
}

export default sound