import "./App.css";
import Personaggio from "./components/personaggio";
import personaggiStarWars from "./personaggi";

function App() {
  let condition = true;
  const strings = ["ciao", "arrivederci", "buona sera"];

  return (
    <>
      <h1>Dev Wars</h1>
      {condition ? (
        <div>
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
