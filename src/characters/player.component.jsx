import React from 'react';
import './characters.styles.css'
import { ProgressBar } from './progressBar/progressBar.component';
export const Player = ({player}) => {
  return (
    <div className='creature'>
        <ProgressBar bgcolor={"green"} min={player.hp} max={player.hpMax}/>
        <ProgressBar bgcolor={"gold"} min={player.exp} max={player.expToLvl}/>
        <p className='name'>{player.playerName}</p>
        <img className='heroImg' src={player.imgSrc} alt={player.playerName} />
        <div className="stats">
          <div className='dmg'>
            <img className='statsIcon' src="/assets/stats/dmg.svg" alt="damage icon" />
            <span>{player.dmg}</span></div>
          <div className='coins'>
            <img className='statsIcon' src="/assets/stats/coins.svg" alt="coins icon" />
            <span>{player.coins}</span></div>
          <div className='potions'>
            <img className='statsIcon' src="/assets/shop/potion.svg" alt="potions icon" />
            <span>{player.potions}</span></div>
        </div>
    </div>
  )
}
