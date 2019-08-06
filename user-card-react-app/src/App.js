import React from 'react';
import './App.css';
import axios from 'axios';

import PersonData from './PersonData';
import FollowerData from './FollowerData';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      data: [],
      followers: []
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

  getFollowerData = () => {
    axios
    .get("https://api.github.com/users/zacharylasky/followers")
    .then(response => {
      console.log(response.data);
      this.setState({...this.state.data, followers: response.data})
    })
    .catch(error => {
      console.log("ERROR", error)
    })
  }
  

  componentDidMount() {
    this.getUserData()
    this.getFollowerData()
  }

  render() {
    return (
      <div className="App">
        <PersonData dataProps={this.state.data}/>
        <FollowerData followerProps={this.state.followers}/>
      </div>
    );
  }
}

export default App;
