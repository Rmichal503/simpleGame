import './App.css';
import {useState} from 'react'
import { Shop } from './shop/shop.component';
import { Dungeon } from './dungeon/dungeon.component';

function App() {
  function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  const [player, setPlayer] = useState({
    playerName:'Ziutek',
    hpMax:100,
    hp: 100,
    dmg:6,
    coins:30,
    potions:0,
    imgSrc:'assets/hero.svg',
    exp:0,
    expToLvl:100,
    lvl:0
  });
  const [enemy, setEnemy] = useState({
    enemyName:'Blob',
    hp: 10,
    hpMax:10,
    dmg:3,
    coins:generateRandomIntegerInRange(3,8),
    potions:0,
    imgSrc:'/assets/enemies/blob.svg',
    exp:5,
    enemyCount:0
  });
  const [toggleShop, setToggleShop] = useState(0);
  const [toggleDungeon, setToggleDungeon] = useState(0);
  
  const openShop = ()=>{
    setToggleShop(!toggleShop);
  }
  const openDungeon = ()=>{
    setToggleDungeon(!toggleDungeon);
  }

  return (
    <div className="App">
      <div className="mainView">
        {toggleShop?(<Shop setPlayer={setPlayer} player={player} openShop={openShop}/>):(null)}
        {toggleDungeon?(<Dungeon player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy} openDungeon={openDungeon}/>):(null)}
      </div>
      {toggleShop?(null):(toggleDungeon?(null):(<div className="iconContainer">
          <img className='icons' onClick={openShop} src="/assets/locations/shop.svg" alt="shop" />
          <span className='tooltip'>Go to shop</span>
        </div>))}
      {toggleDungeon?(null):(toggleShop?(null):(
      <div className="iconContainer">
        <img className='icons' onClick={openDungeon} src="/assets/locations/dungeon-gate.svg" alt="dungeon" />
        <span className='tooltip'>Go to dungeon</span>
      </div>))}
    </div>
  );
}

export default App;
