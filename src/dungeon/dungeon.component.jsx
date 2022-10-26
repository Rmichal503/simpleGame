import React, { useState } from "react";
import { Enemy } from "../enemy/enemy.component";
import { ProgressBar } from "../enemy/progressBar/progressBar.component";
import "./dungeon.styles.css";

export const Dungeon = ({ player, setPlayer, toggleEnemy, settoggleEnemy }) => {
  function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const enemyNames = {
    first: [
      "The Crazy",
      "The Lonely",
      "The Dark",
      "The Ancient",
      "The Hungry",
      "The Bloodthirsty",
      "The Red-Eyed",
    ],
    second: [
      "Demon Pig",
      "Vileserpent",
      "Cavernspawn",
      "Bladebeing",
      "Lump",
      "Plagueling",
      "Hellcreep",
    ],
  };
  const randomNames = () => {
    return `${
      enemyNames.first[
        generateRandomIntegerInRange(0, enemyNames.first.length - 1)
      ]
    } ${
      enemyNames.second[
        generateRandomIntegerInRange(0, enemyNames.second.length - 1)
      ]
    }`;
  };
  const [enemy, setEnemy] = useState(() => {
    return {
      enemyName: `${
        enemyNames.first[
          generateRandomIntegerInRange(0, enemyNames.first.length - 1)
        ]
      } ${
        enemyNames.second[
          generateRandomIntegerInRange(0, enemyNames.second.length - 1)
        ]
      }`,
      hp: 10,
      hpMax: 10,
      dmg: 3,
      coins: generateRandomIntegerInRange(3, 8),
      potions: 0,
      exp: 5,
      imgSrc: "/assets/enemies/blob.svg",
      enemyCount: 0,
    };
  });
  const randomStatsByPlayerLvl = (min, max) => {
    return Math.floor(
      generateRandomIntegerInRange(min, max) * (1 + player.lvl / 10)
    );
  };
  const dmgWithEnemy = () => {
    if (!toggleEnemy) {
      return;
    }
    setEnemy((prevEnemy) => {
      return { ...prevEnemy, hp: prevEnemy.hp - player.dmg };
    });
    setPlayer((prevPlayer) => {
      return {
        ...prevPlayer,
        hp:
          prevPlayer.hp - (enemy.dmg - prevPlayer.armor) > prevPlayer.hp
            ? prevPlayer.hp
            : prevPlayer.hp - (enemy.dmg - prevPlayer.armor),
      };
    });
    console.log(enemy, player);
    if (player.hp - enemy.dmg <= 0) {
      console.log("przed", player.hp);
      window.confirm("Umrzałeś. Chcesz grać dalej?") &&
        setPlayer({
          ...player,
          playerName: `Zombie ${player.playerName}`,
          hpMax: 100,
          hp: 100,
          dmg: 6,
          coins: 30,
          potions: 0,
          exp: 0,
          expToLvl: 100,
          lvl: 0,
        });
      console.log("po promt", player.hp);
      return;
    }
    if (enemy.hp - player.dmg <= 0) {
      setPlayer({
        ...player,
        coins: player.coins + enemy.coins,
        potions: player.potions + enemy.potions,
        exp: player.exp + enemy.exp,
      });
      alert(
        `You get ${enemy.coins} coins${
          enemy.potions > 0 ? " and " + enemy.potions + " potions." : ""
        }`
      );
      settoggleEnemy(0);
      //lvl up of hero
      if (player.exp + enemy.exp > player.expToLvl) {
        switch (generateRandomIntegerInRange(0, 1)) {
          case 0:
            setPlayer({
              ...player,
              dmg: player.dmg + 1,
              exp: 0,
              expToLvl: Math.floor(player.expToLvl * 1.2),
              lvl: player.lvl + 1,
            });
            break;
          case 1:
            setPlayer({
              ...player,
              hpMax: player.hpMax + 5,
              exp: 0,
              expToLvl: Math.floor(player.expToLvl * 1.2),
              lvl: player.lvl + 1,
            });
            break;
        }
      }
    }
  };
  const generateEnemy = () => {
    let hpAndHpMax;
    if (enemy.enemyCount === 10) {
      hpAndHpMax = randomStatsByPlayerLvl(100, 150);
      return setEnemy({
        enemyName: "Minotaur",
        hp: hpAndHpMax,
        hpMax: hpAndHpMax,
        dmg: randomStatsByPlayerLvl(11, 14),
        coins: randomStatsByPlayerLvl(21, 35),
        potions: randomStatsByPlayerLvl(2, 3),
        imgSrc: Math.random(),
        exp: randomStatsByPlayerLvl(75, 110),
        enemyCount: 0,
      });
    }
    switch (generateRandomIntegerInRange(1, 4)) {
      case 1:
        hpAndHpMax = randomStatsByPlayerLvl(20, 50);
        setEnemy({
          enemyName: randomNames(),
          hp: hpAndHpMax,
          hpMax: hpAndHpMax,
          dmg: randomStatsByPlayerLvl(1, 4),
          coins: randomStatsByPlayerLvl(1, 5),
          potions: randomStatsByPlayerLvl(0, 1),
          imgSrc: Math.random(),
          exp: randomStatsByPlayerLvl(5, 10),
          enemyCount: enemy.enemyCount + 1,
        });
        break;
      case 2:
        hpAndHpMax = randomStatsByPlayerLvl(30, 60);
        setEnemy({
          enemyName: randomNames(),
          hp: hpAndHpMax,
          hpMax: hpAndHpMax,
          dmg: randomStatsByPlayerLvl(2, 5),
          coins: randomStatsByPlayerLvl(2, 6),
          potions: randomStatsByPlayerLvl(0, 1),
          imgSrc: Math.random(),
          exp: randomStatsByPlayerLvl(10, 20),
          enemyCount: enemy.enemyCount + 1,
        });
        break;
      case 3:
        hpAndHpMax = randomStatsByPlayerLvl(40, 70);
        setEnemy({
          enemyName: randomNames(),
          hp: hpAndHpMax,
          hpMax: hpAndHpMax,
          dmg: randomStatsByPlayerLvl(3, 7),
          coins: randomStatsByPlayerLvl(4, 8),
          potions: randomStatsByPlayerLvl(0, 1),
          imgSrc: Math.random(),
          exp: randomStatsByPlayerLvl(20, 25),
          enemyCount: enemy.enemyCount + 1,
        });
        break;
      case 4:
        hpAndHpMax = randomStatsByPlayerLvl(50, 80);
        setEnemy({
          enemyName: randomNames(),
          hp: hpAndHpMax,
          hpMax: hpAndHpMax,
          dmg: randomStatsByPlayerLvl(4, 8),
          coins: randomStatsByPlayerLvl(6, 10),
          potions: randomStatsByPlayerLvl(0, 1),
          imgSrc: Math.random(),
          exp: randomStatsByPlayerLvl(25, 40),
          enemyCount: enemy.enemyCount + 1,
        });
        break;
    }
    return;
  };
  const heal = (hp) => {
    if (player.potions > 0) {
      if (player.hp + hp > player.hpMax) {
        return setPlayer({
          ...player,
          hp: player.hpMax,
          potions: player.potions - 1,
        });
      }
      setPlayer({
        ...player,
        hp: player.hp + hp,
        potions: player.potions - 1,
      });
      return;
    } else {
      alert("Nie masz żadnych mikstur na stanie");
    }
  };
  return (
    <div className="background">
      <div className="mainView">
        {/* <Player player={player}/> */}
        {toggleEnemy ? <Enemy enemy={enemy} /> : null}
      </div>
      <div className="buttonsContainer">
        <ProgressBar bgcolor={"green"} min={player.hp} max={player.hpMax} />
        <div className="buttons">
            <div className="iconContainer">
              <img
                className="icons"
                onClick={dmgWithEnemy}
                src="/assets/stats/dmg.svg"
                alt="attack enemy"
              />
              <span className="tooltip">Attack enemy</span>
            </div>
            <div className="iconContainer">
              <img
                className="icons"
                onClick={() => {
                  heal(30);
                }}
                src="/assets/stats/heal.svg"
                alt="use potion"
              />
              <span className="tooltip">Use potion</span>
            </div>
            <div className="iconContainer">
              <img
                className="icons"
                onClick={() => {
                  if (!toggleEnemy) {
                    generateEnemy();
                    console.log(toggleEnemy);
                  }
                  settoggleEnemy(1);
                }}
                src="/assets/hero.svg"
                alt="Search for enemy"
              />
              <span className="tooltip">Search for enemy</span>
            </div>
        </div>
      </div>
    </div>
  );
};
