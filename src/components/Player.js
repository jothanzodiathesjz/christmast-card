import React from "react";
import { useEffect } from "react";
import Natal from '../assets/musik/natal.mp3';

const Player = () => {

    useEffect(() => {
        const song = document.getElementById("song");
        song.play()
    },[])

  return (
    <>
          <audio
              id="song"
              src={Natal}
              loop
              controls
              style={{display:'none'}}
          />
    </>
  );
};

export default Player;