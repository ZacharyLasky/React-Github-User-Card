import React from 'react';
import './App.css';
import axios from 'axios';

import PersonData from './PersonData';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  getUserData = () => {
    axios
    .get("https://api.github.com/users/zacharylasky")
    .then(response => {
      console.log(response.data);
      this.setState({...this.state.data, data: response.data})
    })
    .catch(error => {
      console.log("ERROR", error)
    })
  }

  componentDidMount() {
    this.getUserData()
  }

  render() {
    return (
      <div className="App">
        <PersonData dataProps={this.state.data}/>
      </div>
    );
  }
}

export default App;
