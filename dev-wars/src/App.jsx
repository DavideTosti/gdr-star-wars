import "./App.css";
import Holocron from "./components/Holocron";
import Jedi from "./components/Jedi";
import Personaggio from "./components/personaggio";
import personaggiStarWars from "./personaggi";

function App() {
  let condition = true;
  const strings = ["ciao", "arrivederci", "buona sera"];
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

      {condition ? (
        <div className="container">
          {personaggiStarWars.map((x, index) => (
            <Personaggio
              nome={x.nome}
              img={x.img}
              affiliazione={x.affiliazione}
              livello={x.livello}
              attacco={x.attacco}
              difesa={x.difesa}
              abilita={x.abilita}
              key={index}
            ></Personaggio>
          ))}
        </div>
      ) : (
        <div>
          <p>nessun personaggio presente</p>
        </div>
      )}
      <ul>
        {strings.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
