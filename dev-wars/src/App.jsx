import "./App.css";
import Personaggio from "./components/personaggio";

function App() {
  let condition = true;

  return (
    <>
      <h1>Dev Wars</h1>
      {condition ? (
        <div>
          <Personaggio
            nome={"Darth Vader"}
            img={
              "https://i.pinimg.com/1200x/3f/f6/fc/3ff6fcecc8d8b3070a073186cdfef406.jpg"
            }
            affiliazione={"Sith"}
            attacco={90}
            difesa={75}
            livello={100}
            abilita={"Strangolamento"}
          />
          <Personaggio
            nome={"Generale Grevious"}
            img={
              "https://upload.wikimedia.org/wikipedia/en/5/54/General_Grievous.png"
            }
            affiliazione={"Separatisti"}
            attacco={85}
            difesa={70}
            livello={85}
            abilita={"Laser Vortex"}
          />
        </div>
      ) : (
        <div>
          <p>nessun personaggio presente</p>
        </div>
      )}
    </>
  );
}

export default App;
