import React from 'react'
import { ProgressBar } from './progressBar/progressBar.component'
import './characters.styles.css'


export const Enemy = ({enemy}) => {
  
  return (
    <div className='creature'>
      <ProgressBar bgcolor={'green'} min={enemy.hp} max={enemy.hpMax}/>
      <img className='enemyImg' src={`https://robohash.org/${enemy.imgSrc}?set=set2 `} alt={enemy.enemyName} />
      <p className='name'>{enemy.enemyName}</p>
    </div>
  )
}
