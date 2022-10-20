import React,{useState} from 'react';
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
                coins: (player.coins - 30)
            })
        }
        alert('masz za mało monet')
    }
    return (
        <div className='shopBackground'>
            <div className='iconContainer'>
                <img className='icons' src="/assets/shop/sword.svg" alt="sword icon" onClick={()=>{
                    buySword(6)
                }}/>
                <span className='tooltip'>Sword +6 dmg</span>
            </div>
            <div className='iconContainer'>
                <img className='icons' src="/assets/shop/potion.svg" alt="potion icon" onClick={buyPotion}/>
                <span className='tooltip'>Potion +30HP</span>
            </div>
        </div>
    )
}
