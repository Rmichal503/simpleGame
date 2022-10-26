import React from "react";
import "./item.styles.css";

export const Item = ({ name, effect, type, cost, setPlayer }) => {
  switch (type) {
    case "sword":
      return (
        <div
          className="itemContainer"
          onClick={() => {
            setPlayer((prevStats) => {
              return {
                ...prevStats,
                dmg: prevStats.dmg + effect,
              };
            });
          }}
        >
          <img className="itemIcon" src="assets/shop/sword.svg" alt="sword" />
          <span className="itemName">{name}</span>
        </div>
      );
    case "shield":
      return (
        <div
          className="itemContainer"
          onClick={() => {
            setPlayer((prevStats) => {
              return {
                ...prevStats,
                armor: prevStats.armor + effect,
              };
            });
          }}
        >
          <img className="itemIcon" src="assets/shop/shield.svg" alt="shield" />
          <span className="itemName">{name}</span>
        </div>
      );
    case "potion":
      return (
        <div
          className="itemContainer"
          onClick={() => {
              setPlayer((prevStats) => {
                return {
                  ...prevStats,
                  hp: prevStats.hp + effect,
                };
              });
          }}
        >
          <img className="itemIcon" src="assets/shop/potion.svg" alt="potion" />
          <span className="itemName">{name}</span>
        </div>
      );
    default:
      break;
  }
  return <div className="itemContainer"></div>;
};
