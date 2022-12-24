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
      <TesModal/>
      <Player/>
      {/* <div className={style.leftlogo}>
      <h1>JZodiathes</h1>
      </div>
      <div className={style.right}>
      <ul>
          <li><a href='/profile'>Home</a></li>
          <li><a href=''>About</a></li>
          <li><a href=''>Project</a></li>
      </ul>
      </div> */}
      <audio/>
    </div>
  )
}
