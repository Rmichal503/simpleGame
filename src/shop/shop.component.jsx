import React, { useEffect, useState } from "react";
import { Sword, Shield } from "../items/items";
import "./shop.styles.css";

function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const stall = {
  swords: [],
  shields: [],
};
const newSword = () => {
  if (stall.swords.length > 0) return;
  for (let i = 0; i < generateRandomIntegerInRange(2, 6); i++) {
    stall.swords.push(
      new Sword(
        generateRandomIntegerInRange(10, 40),
        generateRandomIntegerInRange(3, 8)
      )
    );
  }
  stall.swords.push(
    new Sword(
      generateRandomIntegerInRange(110, 240),
      generateRandomIntegerInRange(33, 58)
    )
  );
};
const newShield = () => {
  if (stall.shields.length > 0) return;
  for (let i = 0; i < generateRandomIntegerInRange(2, 6); i++) {
    stall.shields.push(
      new Shield(
        generateRandomIntegerInRange(10, 20),
        generateRandomIntegerInRange(1, 4)
      )
    );
  }
  stall.shields.push(
    new Shield(
      generateRandomIntegerInRange(120, 320),
      generateRandomIntegerInRange(21, 34)
    )
  );
};

export const Shop = ({ setPlayer, player, setEq }) => {
  // const [swords, setSwords] = useState(0)
  newSword();
  newShield();
  const buyPotion = () => {
    if (player.coins >= 6) {
      return setPlayer({
        ...player,
        potions: player.potions + 1,
        coins: player.coins - 6,
      });
    }
    alert("masz za mało monet");
  };
  const buySword = (cost, dmg) => {
    if (player.coins >= cost) {
      setPlayer({
        ...player,
        coins: player.coins - cost,
      });
      return setEq((prevEq) => {
        return [
          ...prevEq,
          {
            name: `Sword +${dmg} dmg`,
            type: "sword",
            effect: dmg,
            cost: cost,
          },
        ];
      });
    }
    alert("masz za mało monet");
  };
  const buyShield = (cost, armor) => {
    if (player.coins >= cost) {
      setPlayer({
        ...player,
        coins: player.coins - cost,
      });
      return setEq((prevEq)=>{
        return [
            ...prevEq,
          {
            name: `Shield +${armor} armor`,
            type: "shield",
            effect: armor,
            cost: cost,
          },
        ]
      })
    }
    alert("masz za mało monet");
  };
  return (
    <div className="shopBackground">
      {/* <button onClick={()=>{
                setSwords(!swords)
            }}>show swords</button> */}
      <div className="stall">
        {stall.swords.map((el, index) => {
          return (
            <div key={index} id={`index${index}`} className="iconContainer">
              <img
                className="icons"
                src="/assets/shop/sword.svg"
                alt="sword icon"
                onClick={(e) => {
                  const newIndex = e.target.parentNode.id.replace("index", "");
                  buySword(el.cost, el.dmg);
                  stall.swords.splice(+newIndex, 1);
                }}
              />
              <span className="tooltip">{`Sword +${el.dmg}, cost ${el.cost} coins`}</span>
            </div>
          );
        })}
        {stall.shields.map((el, index) => {
          return (
            <div key={index} className="iconContainer">
              <img
                className="icons"
                src="/assets/shop/shield.svg"
                alt="shield icon"
                onClick={() => {
                  buyShield(el.cost, el.armor);
                }}
              />
              <span className="tooltip">{`Shield +${el.armor}, cost ${el.cost} coins`}</span>
            </div>
          );
        })}
        <div className="iconContainer">
          <img
            className="icons"
            src="/assets/shop/potion.svg"
            alt="potion icon"
            onClick={buyPotion}
          />
          <span className="tooltip">Potion +30HP</span>
        </div>
      </div>
    </div>
  );
};
