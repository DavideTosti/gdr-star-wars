import personaggiStarWars from "../personaggi";
export default function ListaPersonaggi(){
 return (
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
 )
}