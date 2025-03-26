import "./App.css";
import Holocron from "./components/Holocron";
import Jedi from "./components/Jedi";
import Personaggio from "./components/personaggio";
import personaggiStarWars from "./personaggi";

function App() {
  let condition = true;
  const strings = ["ciao", "arrivederci", "buona sera"];

  return (
    <>
      <h1>Dev Wars</h1>

      <Holocron>
        <Jedi title={"Yoda"}>
          <p>
            La paura è la via per il Lato Oscuro. La paura conduce all'ira,
            l'ira all'odio; l'odio conduce alla sofferenza
          </p>
        </Jedi>
        <Jedi title={"Obi-Wan Kenobi"}>
          <p> La capacità di parlare non ti rende intelligente</p>
        </Jedi>
        <Jedi title={"Mace Windu"}>
          <p>
            Non c'è dubbio, il misterioso guerriero era un Sith. Ma quale è
            stato ucciso? Il maestro, o l'apprendista?
          </p>
        </Jedi>
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
