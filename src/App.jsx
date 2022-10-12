import './App.css';
import {useState} from 'react'
import { Enemy } from './characters/enemy.component';
import { Player } from './characters/player.component';
import { Shop } from './shop/shop.component';
import { Dungeon } from './dungeon/dungeon.component';

function App() {
  function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  const [player, setPlayer] = useState({
    playerName:'Ziutek',
    hp: 100,
    dmg:6,
    coins:0,
    potions:0,
    imgSrc:'assets/hero.svg'
  });
  const [enemy, setEnemy] = useState({
    enemyName:'Blob',
    hp: 10,
    dmg:3,
    coins:generateRandomIntegerInRange(3,8),
    potions:0,
    imgSrc:'/assets/enemies/blob.svg'
  });
  const [toggleShop, setToggleShop] = useState(0);
  const [toggleDungeon, setToggleDungeon] = useState(0);
  
  const openShop = ()=>{
    setToggleShop(!toggleShop);
  }
  const openDungeon = ()=>{
    setToggleDungeon(!toggleDungeon);
  }
  // const dmgWithEnemy = ()=>{
  //   setEnemy({
  //     ...enemy,
  //     hp:(enemy.hp - player.dmg)
  //   });
  //   setPlayer({
  //     ...player,
  //     hp:(player.hp - enemy.dmg)
  //   });
  //   if((player.hp - enemy.dmg) <=0){
  //     console.log('przed',player.hp);
  //     window.confirm('Umrzałeś. Chcesz grać dalej?') &&
  //       setPlayer({
  //         playerName:`Zombie ${player.playerName}`,
  //         hp: 100,
  //         dmg:6,
  //         coins:0,
  //         potions:0,
  //         imgSrc:'assets/hero.svg'
  //       })
  //       console.log('po promt',player.hp);
  //       return
  //   }
  //   if ((enemy.hp - player.dmg) <=0) {
  //       setPlayer({
  //         ...player,
  //         coins:(player.coins + enemy.coins),
  //         potions:(player.potions + enemy.potions)
  //       })
  //   generateEnemy();
  //   }
  // }
  // const generateEnemy =()=>{
  //   switch (generateRandomIntegerInRange(1,4)) {
  //     case 1:
  //       setEnemy({
  //         enemyName:'zombie',
  //         hp:generateRandomIntegerInRange(20,50),
  //         dmg:generateRandomIntegerInRange(1,4),
  //         coins:generateRandomIntegerInRange(1,5),
  //         potions:generateRandomIntegerInRange(0,1),
  //         imgSrc:'/assets/enemies/zombie.svg'
  //       })
  //       break;
  //     case 2:
  //       setEnemy({
  //         enemyName:'green zombie',
  //         hp:generateRandomIntegerInRange(30,60),
  //         dmg:generateRandomIntegerInRange(2,5),
  //         coins:generateRandomIntegerInRange(2,6),
  //         potions:generateRandomIntegerInRange(0,1),
  //         imgSrc:'assets/enemies/green_zombie.svg'
  //       })
  //       break;
  //     case 3:
  //       setEnemy({
  //         enemyName:'skeleton',
  //         hp:generateRandomIntegerInRange(40,70),
  //         dmg:generateRandomIntegerInRange(3,7),
  //         coins:generateRandomIntegerInRange(4,8),
  //         potions:generateRandomIntegerInRange(0,1),
  //         imgSrc:'assets/enemies/skeleton.svg'
  //       })
  //       break;
  //     case 4:
  //       setEnemy({
  //         enemyName:'skeleton warior',
  //         hp:generateRandomIntegerInRange(50,80),
  //         dmg:generateRandomIntegerInRange(4,8),
  //         coins:generateRandomIntegerInRange(6,10),
  //         potions:generateRandomIntegerInRange(0,1),
  //         imgSrc:'assets/enemies/skeleton_warrior.svg'
  //       })
  //       break;
  //   }
  //   return
  // }
  // const usePotion=()=>{
  //   if (player.potions >0) {
  //     setPlayer({
  //       ...player,
  //       hp:(player.hp +30),
  //       potions:(player.potions -1)
  //     })
  //     return
  //   }else{
  //     alert("Nie masz żadnych mikstur na stanie")
  //   }
  // }

  
  
  return (
    <div className="App">
      <div className="mainView">
        {toggleShop?(<Shop setPlayer={setPlayer} player={player} openShop={openShop}/>):(null)}
        {toggleDungeon?(<Dungeon player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy} openDungeon={openDungeon}/>):(null)}
      </div>
      {toggleShop?(null):(toggleDungeon?(null):(<button onClick={openShop}>Go to shop</button>))}
      {toggleDungeon?(null):(toggleShop?(null):(<button onClick={openDungeon}>{toggleShop?(null):('Go to dungeon')}</button>))}
      
      
    </div>
  );
}

export default App;
