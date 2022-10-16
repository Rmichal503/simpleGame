import React from 'react'
import { Enemy } from '../characters/enemy.component';
import { Player } from '../characters/player.component';
import './dungeon.styles.css'

export const Dungeon = ({player,setPlayer,enemy,setEnemy,openDungeon}) => {
    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const dmgWithEnemy = ()=>{
        setEnemy({
            ...enemy,
            hp:(enemy.hp - player.dmg)
        });
        setPlayer({
            ...player,
            hp:(player.hp - enemy.dmg)
        });
        console.log(enemy,player)
        if((player.hp - enemy.dmg) <=0){
            console.log('przed',player.hp);
            window.confirm('Umrzałeś. Chcesz grać dalej?') &&
            setPlayer({
                playerName:`Zombie ${player.playerName}`,
                hp: 100,
                dmg:6,
                coins:0,
                potions:0,
                imgSrc:'assets/hero.svg'
            })
            console.log('po promt',player.hp);
            return
        }
        if ((enemy.hp - player.dmg) <=0) {
            setPlayer({
                ...player,
                coins:(player.coins + enemy.coins),
                potions:(player.potions + enemy.potions),
                exp:(player.exp + enemy.exp)
            })
            //lvl up of hero
            if(player.exp + enemy.exp >player.expToLvl){
                switch (generateRandomIntegerInRange(0,1)) {
                    case 0:
                        setPlayer({
                            ...player,
                            dmg:(player.dmg + 1),
                            exp:0,
                            expToLvl: (Math.floor(player.expToLvl *1.2)),
                            lvl: player.lvl +1
                        })
                        break;
                    case 1:
                        setPlayer({
                            ...player,
                            hpMax: (player.hpMax +5),
                            exp:0,
                            expToLvl: (Math.floor(player.expToLvl *1.2)),
                            lvl: player.lvl +1
                        })
                        break;
                }
            }
        generateEnemy();
        }
    }
        const generateEnemy =()=>{
            let hpAndHpMax;
            if(enemy.enemyCount === 10){
                hpAndHpMax = generateRandomIntegerInRange(100,150);
                //dokonczyc hp i hpmax
                return setEnemy({
                    enemyName:'Minotaur',
                    hp:hpAndHpMax,
                    hpMax:hpAndHpMax,
                    dmg:generateRandomIntegerInRange(11,24),
                    coins:generateRandomIntegerInRange(21,35),
                    potions:generateRandomIntegerInRange(2,3),
                    imgSrc:'/assets/enemies/minotaur.svg',
                    exp:generateRandomIntegerInRange(75,110),
                    enemyCount:enemy.enemyCount +1
                })
            }
        switch (generateRandomIntegerInRange(1,4)) {
            case 1:
                hpAndHpMax = generateRandomIntegerInRange(20,50)
            setEnemy({
                enemyName:'zombie',
                hp:hpAndHpMax,
                hpMax:hpAndHpMax,
                dmg:generateRandomIntegerInRange(1,4),
                coins:generateRandomIntegerInRange(1,5),
                potions:generateRandomIntegerInRange(0,1),
                imgSrc:'/assets/enemies/zombie.svg',
                exp:generateRandomIntegerInRange(5,10),
                enemyCount:enemy.enemyCount +1
            })
            break;
            case 2:
            hpAndHpMax = generateRandomIntegerInRange(30,60)
            setEnemy({
                enemyName:'green zombie',
                hp:hpAndHpMax,
                hpMax:hpAndHpMax,
                dmg:generateRandomIntegerInRange(2,5),
                coins:generateRandomIntegerInRange(2,6),
                potions:generateRandomIntegerInRange(0,1),
                imgSrc:'assets/enemies/green_zombie.svg',
                exp:generateRandomIntegerInRange(10,20),
                enemyCount:enemy.enemyCount +1
            })
            break;
            case 3:
            hpAndHpMax = generateRandomIntegerInRange(40,70)
            setEnemy({
                enemyName:'skeleton',
                hp:hpAndHpMax,
                hpMax:hpAndHpMax,
                dmg:generateRandomIntegerInRange(3,7),
                coins:generateRandomIntegerInRange(4,8),
                potions:generateRandomIntegerInRange(0,1),
                imgSrc:'assets/enemies/skeleton.svg',
                exp:generateRandomIntegerInRange(20,25),
                enemyCount:enemy.enemyCount +1
            })
            break;
            case 4:
            hpAndHpMax = generateRandomIntegerInRange(50,80)
            setEnemy({
                enemyName:'skeleton warior',
                hp:hpAndHpMax,
                hpMax:hpAndHpMax,
                dmg:generateRandomIntegerInRange(4,8),
                coins:generateRandomIntegerInRange(6,10),
                potions:generateRandomIntegerInRange(0,1),
                imgSrc:'assets/enemies/skeleton_warrior.svg',
                exp:generateRandomIntegerInRange(25,40),
                enemyCount:enemy.enemyCount +1
            })
            break;
        }
        return
    }
    const usePotion=()=>{
        if (player.potions >0) {
            if((player.hp + 30) > player.hpMax){
                return setPlayer({
                    ...player,
                    hp:player.hpMax,
                    potions:(player.potions -1)
                })
            }
            setPlayer({
                ...player,
                hp:(player.hp +30),
                potions:(player.potions -1)
            })
            return
        }else{
            alert("Nie masz żadnych mikstur na stanie")
        }
        }
    return (
    <div className='background'>
        <div className="mainView">
            <Player player={player}/>
            <Enemy enemy={enemy}/>
        </div>
        <div className='buttonsContainer'>
            <div className="iconContainer">
                <img className='icons' onClick={dmgWithEnemy} src="/assets/stats/dmg.svg" alt="attack enemy" />
                <span className='tooltip'>Attack enemy</span>
            </div>
            <div className="iconContainer">
                <img className='icons' onClick={usePotion} src="/assets/stats/heal.svg" alt="use potion" />
                <span className='tooltip'>Use potion</span>
            </div>
            <div className="iconContainer">
                <img className='icons' onClick={openDungeon} src="/assets/locations/village.svg" alt="back to town" />
                <span className='tooltip'>Back to town</span>
            </div>
        </div>
    </div>
  )
}
