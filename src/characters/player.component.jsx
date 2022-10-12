import React from 'react';
import './characters.styles.css'
export const Player = ({player}) => {
  return (
    <div className='creature'>Player
        <p className='name'>{player.playerName}</p>
        <img className='heroImg' src={player.imgSrc} alt={player.playerName} />
        <div className="stats">
          <p className='hp'>{player.hp}</p>
          <p className='dmg'>{player.dmg}</p>
          <p className='coins'>{player.coins}</p>
          <p className='potions'>{player.potions}</p>
        </div>
    </div>
  )
}
