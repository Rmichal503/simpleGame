import React from 'react'

export const Enemy = ({enemy}) => {
  
  return (
    <div className='creature'>Enemy
      <p className='name'>{enemy.enemyName}</p>
      <img className='enemyImg' src={enemy.imgSrc} alt={enemy.enemyName} />
        <div className="stats">
          <p className='hp'>Zdrowie: {enemy.hp}</p>
          <p className='coins'>Monet: {enemy.coins}</p>
          <p className='potions'>Mikstur: {enemy.potions}</p>
        </div>
        
    </div>
  )
}
