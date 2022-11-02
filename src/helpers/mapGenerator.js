const createArray =(num,dimensions)=>{
    let array = [];    
    for (let i = 0; i < dimensions; i++) { 
      array.push([]);      
      for (let j = 0; j < dimensions; j++) {  
         array[i].push(num);      
      }    
    }    
    return array;  
}
export const createMap =()=>{
    let dimensions = Math.floor(Math.random() * (25 - 20 + 1)) + 20,     
    maxTunnels = dimensions + (Math.floor(Math.random() * (10 - 5 + 1)) + 5), 
    maxLength = dimensions - (Math.floor(Math.random() * (10 - 5 + 1)) + 5),
    map = createArray(1, dimensions),
    currentRow = Math.floor(Math.random() * dimensions),       
    currentColumn = Math.floor(Math.random() * dimensions),
    directions = [[-1, 0], [1, 0], [0, -1], [0, 1]],
    lastDirection = [], 
    randomDirection;

    while(maxTunnels&&maxLength&&dimensions){
        do {         
            randomDirection = directions[Math.floor(Math.random() * directions.length)];      
            } while ((randomDirection[0] === -lastDirection[0] &&    
                      randomDirection[1] === -lastDirection[1]) || 
                     (randomDirection[0] === lastDirection[0] &&  
                      randomDirection[1] === lastDirection[1])); 
        let randomLength = Math.ceil(Math.random() * maxLength),       
        tunnelLength = 0; 
        
        while (tunnelLength < randomLength) { 
            if(((currentRow === 0) && (randomDirection[0] === -1))||  
               ((currentColumn === 0) && (randomDirection[1] === -1))|| 
               ((currentRow === dimensions - 1) && (randomDirection[0] ===1))||
                ((currentColumn === dimensions - 1) && (randomDirection[1] === 1))){ 
                    break; 
                }else{ 
                    if((Math.floor(Math.random() * (100 - 1 + 1)) + 1)>90){
                        map[currentRow][currentColumn] = 2;
                    }else{
                        map[currentRow][currentColumn] = 0;
                    }
                currentRow += randomDirection[0];
                currentColumn += randomDirection[1]; 
                tunnelLength++; 
               } 
              }
              if (tunnelLength) { 
                lastDirection = randomDirection; 
                maxTunnels--; 
               }     
    }
    console.log(map);
    return map;
}
