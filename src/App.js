import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContainer from './components/MainContainer/MainContainer'
import React, {Component} from "react";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Sidebar/>
        <MainContainer/>
      </div>
    );
  }
}

export default App;
