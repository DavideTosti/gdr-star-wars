export default function Personaggio(props) {
  return (
    <div className="card">
      <div>
        <h3 className="nome">{props.nome}</h3>
      </div>
      <div className="container-img">
        <img src={props.img} alt={props.nome} />
      </div>
      <div className="info">
        <div>
          <p className="label">Affiliazione: </p>
          <p className="content">{props.affiliazione}</p>
        </div>
        <div>
          <p className="label">Attacco: </p>
          <p className="content">{props.attacco}</p>
        </div>
        <div>
          <p className="label">Difesa: </p>
          <p className="content">{props.difesa}</p>
        </div>
        <div>
          <p className="label">Livello: </p>
          <p className="content">{props.livello}</p>
        </div>
        <div>
          <p className="label">Abilità speciale: </p>
          <p className="content">{props.abilita}</p>
        </div>
      </div>
    </div>
  );
}
