import "./card.styles.css";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
};

export default function Card({ monster }: CardProps) {
  const id = monster.url.slice(30).replace(/\D/g, "");
  const { name } = monster;
  return (
    <div
      className="card-container"
      key={monster.url.slice(30).replace(/\D/g, "")}
    >
      <a href={`https://pokemondb.net/pokedex/${monster.name}`}>
        <img
          alt={`monster ${name}`}
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
          width="200"
        />
      </a>
      <h2>{monster.name.charAt(0).toUpperCase() + monster.name.slice(1)}</h2>
      <p>Pokedex nº {monster.url.slice(30).replace(/\D/g, "")}</p>
    </div>
  );
}
