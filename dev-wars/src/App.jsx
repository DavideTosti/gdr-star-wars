import "./App.css";
import Holocron from "./components/Holocron";
import Jedi from "./components/Jedi";
import ListaPersonaggi from "./components/listaPersonaggi";
import DevWars from "./components/devWars";

function App() {
  let condition = false;
  
const jedi = [
  {
    nome: "Yoda",
    frase: `La paura è la via per il Lato Oscuro. La paura conduce all'ira,
            l'ira all'odio; l'odio conduce alla sofferenza`,
  },
  {
    nome: "Obi-Wan Kenobi",
    frase: `La capacità di parlare non ti rende intelligente`,
  },
  {
    nome: "Mace Windu",
    frase: `Non c'è dubbio, il misterioso guerriero era un Sith. Ma quale è
            stato ucciso? Il maestro, o l'apprendista?`,
  },
];
  return (
    <>
      <h1>Dev Wars</h1>

      <Holocron>
        {jedi.map((x, index)=> (<Jedi key= {index}title={x.nome}><p>{x.frase}</p></Jedi>))}
      </Holocron>
     <DevWars></DevWars>
      {condition ? (
       <ListaPersonaggi></ListaPersonaggi>
      ) : (
        <div>
          <p>nessun personaggio presente</p>
        </div>
      )}
      
    </>
  );
}

export default App;


