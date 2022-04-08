// 1. Import
import { Component } from "react";
import "./card-list.styles.css";
import Card from "./card.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list" key={monsters.id}>
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

// Export this compononet to allow thei use by external components
export default CardList;
