import React from "react";
import Natal from '../assets/musik/natal.mp3';

const Player = () => {

  return (
    <>
      <audio src={Natal} autoPlay loop controls style={{display:'none'}}/>
    </>
  );
};

export default Player;