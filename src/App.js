import React from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => this.setState({ robots: users }));
  }

  onSearchChange = ( event ) => {
   this.setState({ searchfield: event.target.value.toLowerCase() });
  }


  render() {
    const filteredRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield);
    })

    if(this.state.robots.length === 0) {
      return <h1> Loading </h1>
    } else {
      return (
        <div className="wrapper">
          <Searchbox searchChange={ this.onSearchChange }/>
          <Scroll>
          <Cardlist robots={filteredRobots} />
          </Scroll>
        </div>
      )
    }
  }
}



export default App;
