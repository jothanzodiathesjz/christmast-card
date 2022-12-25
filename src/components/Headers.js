import React from 'react';
import style from './hero.module.css';
import ModalFamily from './ModalFamily';
import Player from './Player';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import card1 from '../assets/images/card1-01.png';
import card2 from '../assets/images/card2-02.png'
import TesModal from './TesModal';
// import {NavLink } from 'react-router-dom';


export default function Headers() {
  return (
    <>
    <div className={style.nav}>
      
      <ModalFamily
        image={card1}
        Icon={FavoriteIcon}
        Bcolor={'#96241f'}
      />
      <ModalFamily
        image={card2}
        Icon={StarOutlinedIcon}
        Bcolor={'#21656d'}
      />
        <TesModal />
        <Player/>
      </div>
      </>
  )
}
