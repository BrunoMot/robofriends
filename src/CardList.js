import React from "react";
import Card from "./Card";
import { robots } from "./robots";

class CardList extends React.Component {
  render() {
    return (
      <div>
        {robots.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
