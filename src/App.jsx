import "./App.css";
import { useState } from "react";
import { Shop } from "./shop/shop.component";
import { Dungeon } from "./dungeon/dungeon.component";
import { Outlet, Link, Routes, Route } from "react-router-dom";
import { ProgressBar } from "./characters/progressBar/progressBar.component";

function App() {
  const [player, setPlayer] = useState({
    playerName: "Ziutek",
    hpMax: 100,
    hp: 100,
    dmg: 6,
    armor:0,
    coins: 0,
    potions: 0,
    imgSrc: "assets/hero.svg",
    exp: 0,
    expToLvl: 100,
    lvl: 1,
  });
  const [toggleEnemy, settoggleEnemy] = useState(0);
  const [toggleEq, setToggleEq] = useState(0)

  return (
    <div className="App">
      <nav className="nav">
        <div className="playerStats">
          <h1>{player.playerName} Lvl:{player.lvl}</h1>
          <ProgressBar bgcolor={"gold"} min={player.exp} max={player.expToLvl}/>
        </div>
        <div className="stats">
          <div className='dmg'>
              <img className='statsIcon' src="/assets/stats/dmg.svg" alt="damage icon" />
              <span>{player.dmg}</span>
          </div>
          <div className='armor'>
              <img className='statsIcon' src="/assets/shop/shield.svg" alt="armor icon" />
              <span>{player.armor}</span>
          </div>
        </div>
        <div className="links">
          <div>
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
          <ProgressBar bgcolor={"green"} min={player.hp} max={player.hpMax}/>
        </div>
          <div className='eq iconContainer' >
            <img className='eqIcon icons' src="/assets/backpack.svg" alt="backpack icon" onClick={()=>{
              setToggleEq(!toggleEq);
            }}/>
            <span className="tooltip">Show equipment</span>
          </div>
          <>{toggleEq?(<div className="eqMenu">
            <div className='potions'>
              <img className='statsIcon' src="/assets/shop/potion.svg" alt="potions icon" />
              <span>{player.potions}</span>
            </div>
            <div className='coins'>
            <img className='statsIcon' src="/assets/stats/coins.svg" alt="coins icon" />
            <span>{player.coins}</span>
            </div>
          </div>):null}</>
      </nav>
      <div className="town">
        <Outlet />
        <Routes>
          <Route
            path="shop"
            element={
              <Shop 
              setPlayer={setPlayer}
              player={player}
              />
            }
          />
          <Route
            path="dungeone"
            element={
              <Dungeon
                player={player}
                setPlayer={setPlayer}
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
//hover over name and exp for stats (armor and dmg), delete these stats from hero card