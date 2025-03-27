import { useState } from "react";
import personaggiStarWars from "../personaggi";
export default function DevWars(){
    const [combattenti, setCombattenti] = useState([])
    function handleRandomize(){
        const intervallo = setInterval(()=>{
        const copiaLista = [...personaggiStarWars]
        const indiceUno = Math.floor(Math.random()* copiaLista.length)
        let indiceDue 
        do{indiceDue= Math.floor(Math.random()* copiaLista.length)
        }while(indiceUno === indiceDue)
        },50)
    }
   return (
     <div>
        <button onClick={handleRandomize}>Scegli Combattenti</button>
     </div>
   )
}