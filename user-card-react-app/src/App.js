import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      data: ""
    }
  }

  getUserData = () => {
    axios
    .get("https://api.github.com/users/zacharylasky")
    .then(response => {
      // console.log(response.data);
      this.setState({data: response.data})
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
      
      </div>
    );
  }
}

export default App;
