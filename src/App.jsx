import "./App.css";
import { useState } from "react";
import { Shop } from "./shop/shop.component";
import { Dungeon } from "./dungeon/dungeon.component";
import { Outlet, Link, Routes, Route } from "react-router-dom";
import { ProgressBar } from "./characters/progressBar/progressBar.component";

function App() {
  function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [player, setPlayer] = useState({
    playerName: "Ziutek",
    hpMax: 100,
    hp: 100,
    dmg: 6,
    coins: 30,
    potions: 0,
    imgSrc: "assets/hero.svg",
    exp: 0,
    expToLvl: 100,
    lvl: 0,
  });
  const [enemy, setEnemy] = useState({
    enemyName: "Blob",
    hp: 10,
    hpMax: 10,
    dmg: 3,
    coins: generateRandomIntegerInRange(3, 8),
    potions: 0,
    exp: 5,
    imgSrc:'/assets/enemies/blob.svg',
    enemyCount: 0,
  });
  const [toggleShop, setToggleShop] = useState(0);
  const [toggleDungeon, setToggleDungeon] = useState(0);
  const [toggleEnemy, settoggleEnemy] = useState(0);

  const openShop = () => {
    setToggleShop(!toggleShop);
  };
  const openDungeon = () => {
    setToggleDungeon(!toggleDungeon);
  };

  return (
    <div className="App">
      <nav className="nav">
        <div className="playerStats">
          <h1>{player.playerName} Lvl:{player.lvl}</h1>
          <ProgressBar bgcolor={"gold"} min={player.exp} max={player.expToLvl}/>
          
        </div>
        <div className="links">
          <Link className="iconContainer" to={"shop"} style={toggleEnemy?{pointerEvents: "none"}:null}>
            <img className="icons" style={toggleEnemy?{backgroundColor: 'red'}:null} src="/assets/locations/shop.svg" alt="shop" />
            <span className="tooltip">Go to shop</span>
          </Link>
          <Link className="iconContainer" to={"dungeone"} style={toggleEnemy?{pointerEvents: "none"}:null}>
            <img
              className="icons"
              src="/assets/locations/dungeon-gate.svg"
              alt="dungeon"
              style={toggleEnemy?{backgroundColor: 'red'}:null}
            />
            <span className="tooltip">Go to dungeon</span>
          </Link>
          <Link to="/" className="iconContainer">
            <img
              className="icons"
              src="/assets/locations/village.svg"
              alt="back to town"
              onClick={()=>{
                settoggleEnemy(0);
              }}
            />
            <span className="tooltip">Back to town</span>
          </Link>
        </div>
        <div className="eq">
          <div className='coins'>
            <img className='statsIcon' src="/assets/stats/coins.svg" alt="coins icon" />
            <span>{player.coins}</span></div>
          <div className='potions'>
            <img className='statsIcon' src="/assets/shop/potion.svg" alt="potions icon" />
            <span>{player.potions}</span></div>
          </div>
      </nav>
      <div className="town">
        <Outlet />
        <Routes>
          <Route
            path="shop"
            element={
              <Shop setPlayer={setPlayer} player={player} openShop={openShop} />
            }
          />
          <Route
            path="dungeone"
            element={
              <Dungeon
                player={player}
                setPlayer={setPlayer}
                enemy={enemy}
                setEnemy={setEnemy}
                toggleEnemy={toggleEnemy}
                settoggleEnemy={settoggleEnemy}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
