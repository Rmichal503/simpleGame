import React,{useEffect} from "react";
import { createMap } from "../helpers/mapGenerator";

export const DungeoneMap = () => {
  const map = createMap();
  return(
    <table className="grid">
      <thead className="map">
        {map.map((obj, row) => (
          <tr key={row}>
            {obj.map((obj2, col) => (
              <td className={obj2 === 1 ? "wall" : obj2 === 2?'moob':"tunnel"} key={col}>
                {" "}
              </td>
            ))}
          </tr>
        ))}
      </thead>
    </table>
  )
};
