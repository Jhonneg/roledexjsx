import { Component } from "react";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        <ul>
          {monsters.map((monster) => {
            return <li key={monster.id}>{monster.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
