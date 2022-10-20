import React from 'react'
import { ProgressBar } from './progressBar/progressBar.component'

export const Enemy = ({enemy}) => {
  
  return (
    <div className='creature'>
      <ProgressBar bgcolor={'green'} min={enemy.hp} max={enemy.hpMax}/>
      <p className='name'>{enemy.enemyName}</p>
      <img className='enemyImg' src={`https://robohash.org/${enemy.imgSrc}?set=set2 `} alt={enemy.enemyName} />
        {/* <div className="stats">
          <div className='coins'>
              <img className='statsIcon' src="/assets/stats/coins.svg" alt="coins icon" />
              <span>{enemy.coins}</span></div>
            <div className='potions'>
              <img className='statsIcon' src="/assets/shop/potion.svg" alt="potions icon" />
              <span>{enemy.potions}</span></div>
        </div> */}
    </div>
  )
}
