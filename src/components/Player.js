import React from "react";
import Natal from '../assets/musik/natal.mp3';

const Player = () => {

  return (
    <>
      <audio src={Natal} autoPlay loop/>
    </>
  );
};

export default Player;