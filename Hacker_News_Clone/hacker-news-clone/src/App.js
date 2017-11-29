import React, { Component } from 'react';
import './App.css';
import StoryList from './containers/story-list';
//import firebase somewhere to initialize the function in ./firebase
import database from './firebase';

class App extends Component {
  render() {
    return (
      <div>
        <StoryList />
      </div>
    );
  }
}

export default App;
