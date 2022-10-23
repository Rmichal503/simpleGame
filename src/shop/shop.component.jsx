import React,{useEffect,useState} from 'react';
import {Sword,Shield} from '../items/items';
import './shop.styles.css'

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//const cos=buy/new sword, const prevSword = [...,...,..,], wyswietlacznie poprzednich po map
const stall = {
    swords:[],
    shields:[]
}
const newSword = ()=>{
    if(stall.swords.length >0) return
    for(let i = 0;i<generateRandomIntegerInRange(2,6);i++){
        stall.swords.push(new Sword(generateRandomIntegerInRange(10,40),generateRandomIntegerInRange(3,8)))
    }
    stall.swords.push(new Sword(generateRandomIntegerInRange(110,240),generateRandomIntegerInRange(33,58)))
}
const newShield = ()=>{
    if(stall.shields.length > 0) return
    for(let i = 0;i<generateRandomIntegerInRange(2,6);i++){
        stall.shields.push(new Shield(generateRandomIntegerInRange(10,20),generateRandomIntegerInRange(1,4)))
    }
    stall.shields.push(new Shield(generateRandomIntegerInRange(120,320),generateRandomIntegerInRange(21,34)))
}

export const Shop = ({setPlayer,player,deliver}) => {
    // const [swords, setSwords] = useState(0)
        newSword()
        newShield()
    const buyPotion =()=>{
        if(player.coins >=6) {
            return setPlayer({
            ...player,
            potions: (player.potions + 1),
            coins: (player.coins - 6)
        })}
        alert('masz za mało monet')
    }
    const buySword = (cost,dmg)=>{
        if (player.coins >=cost) {
            return setPlayer({
                ...player,
                dmg: (player.dmg + dmg),
                coins: (player.coins - cost)
            })
        }
        alert('masz za mało monet')
    }
    const buyShield = (cost,armor)=>{
        if (player.coins >=cost) {
            return setPlayer({
                ...player,
                armor: (player.armor + armor),
                coins: (player.coins - cost)
            })
        }
        alert('masz za mało monet')
    }
    return (
        <div className='shopBackground'>
            {/* <button onClick={()=>{
                setSwords(!swords)
            }}>show swords</button> */}
                <div className="stall">
                    {stall.swords.map((el,index)=>{
                        return(
                            <div key={index} id={`index${index}`} className='iconContainer'>
                                <img className='icons' src="/assets/shop/sword.svg" alt="sword icon" onClick={(e)=>{
                                    const newIndex = e.target.parentNode.id.replace('index','')
                                    buySword(el.cost,el.dmg)
                                    stall.swords.splice(+newIndex,1);
                                }}/>
                                <span className='tooltip'>{`Sword +${el.dmg}, cost ${el.cost} coins`}</span>
                            </div>
                        )
                    })}
                    {stall.shields.map((el,index)=>{
                        return(
                            <div key={index} className='iconContainer'>
                                <img className='icons' src="/assets/shop/shield.svg" alt="shield icon" onClick={()=>{
                                    buyShield(el.cost,el.armor)
                                }}/>
                                <span className='tooltip'>{`Shield +${el.armor}, cost ${el.cost} coins`}</span>
                            </div>
                        )
                    })}
                                {/* <div className='iconContainer'>
                    <img className='icons' src="/assets/shop/shield.svg" alt="shield icon" onClick={()=>{
                        buyShield(2)
                    }}/>
                    <span className='tooltip'>Shield +2 armor</span>
                                </div> */}
                                <div className='iconContainer'>
                    <img className='icons' src="/assets/shop/potion.svg" alt="potion icon" onClick={buyPotion}/>
                    <span className='tooltip'>Potion +30HP</span>
                                </div>
                </div>
        </div>
    )
}
