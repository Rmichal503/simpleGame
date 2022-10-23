import React from 'react';
import './characters.styles.css'
import { ProgressBar } from './progressBar/progressBar.component';
export const Player = ({player}) => {
  return (
    <div className='creature'>
        <img className='heroImg' src={player.imgSrc} alt={player.playerName} />
    </div>
  )
}
