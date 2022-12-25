import React,{useRef,useState} from "react";
import Natal from '../assets/musik/natal.mp3';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const Player = () => {
  const [play, setPlay] = useState(false);
  const buttonRef = useRef(null);
  const playingRef = useRef(null)
  const handleClickPlay = () => {
    setPlay(true)
    playingRef.current.play()
  }
  const handleClickPause = () => {
    setPlay(false)
    playingRef.current.pause()
  }

  return (
    <>
        {!play && <Button ref={buttonRef} variant="outlined" style={{ height: '3rem', marginLeft: '1rem', marginRight: '1rem' }} onClick={handleClickPlay}><PlayArrowIcon /></Button>}
        {play && <Button  variant="outlined" style={{ height: '3rem', marginLeft: '1rem', marginRight: '1rem' }} onClick={handleClickPause}><PauseIcon /></Button>}
          <audio
              ref={playingRef}
              src={Natal}
              loop
        />
    </>
  );
};

export default Player;