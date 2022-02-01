import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      search_field: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  on_search_change = (event) => {
    this.setState({ search_field: event.target.value });
  };

  render() {
    const filtered_robots = this.state.robots.filter((item) => {
      return item.name.toLowerCase().includes(this.state.search_field);
    });

    if (this.state.robots.length == 0) {
      return <h1 className='tc'>Loading...</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox search_change={this.on_search_change} />
          <Scroll>
            <CardList robots={filtered_robots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
