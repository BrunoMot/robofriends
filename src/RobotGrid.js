import React from "react";
import Card from "./Card";
import { robots } from "./robots";

class RobotGrid extends React.Component {
  render() {
    const card_list = robots.map((item) => {
      return (
        <Card
          id={item.id}
          name={item.name}
          username={item.username}
          email={item.email}
        />
      );
    });
    return <div>{card_list}</div>;
  }
}

export default RobotGrid;
