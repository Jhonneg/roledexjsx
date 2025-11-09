import "./card-list.styles.css";
import Card from "../Card";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

export default function CardList({ monsters }: CardListProps) {
  return (
    <div className="card-list">
      {monsters.map((monster, id) => {
        return <Card key={id} monster={monster} />;
      })}
    </div>
  );
}
