import React from 'react';
import './shop.styles.css'

export const Shop = ({setPlayer,player,openShop}) => {
    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const buyPotion =()=>{
        if(player.coins >=6) {
            return setPlayer({
            ...player,
            potions: (player.potions + 1),
            coins: (player.coins - 6)
        })}
        alert('masz za mało monet')
    }
    const buySword = (typeOfSword)=>{
        if (player.coins >=30) {
            return setPlayer({
                ...player,
                dmg: (player.dmg + typeOfSword),
                coins: (player.coins - typeOfSword)
            })
        }
        alert('masz za mało monet')
    }
    return (
        <>
        <div>
            <img className='shopItem' src="/assets/shop/sword-svgrepo-com.svg" alt="sword icon" onClick={()=>{
                buySword(6)
            }}/>
            <img className='shopItem' src="/assets/shop/potion-svgrepo-com.svg" alt="potion icon" onClick={buyPotion}/>
        </div>
        <button onClick={openShop}>Back to town</button>
        </>
    )
}
