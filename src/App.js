import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import VotePoll from './components/VotePoll/VotePoll';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="upperBlack">
        <Switch>
          <Route exact path='/' component={Cards} />
          <Route path='/votepoll' component={VotePoll} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
