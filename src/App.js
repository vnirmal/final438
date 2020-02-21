import React from 'react';
import './App.css';
import './media.css';
import { LinearProgress } from '@material-ui/core/';
import TaskList from './TaskList';
import timeWeather from './time_weather';
import Clock from 'react-live-clock';


function App() {
  return (
    <div className="App">
      <header className="main-content">
        <div className="stats">
          today's stats
        </div>
        <div className="list-section">
          <div className="list-header">
            Here's what you want to get done today:
          </div>
          <div className="to-do-list">
          <TaskList/>
          </div>
        </div>
      </header>
      <body className="bottom-panel">
        <div className="weather">
          the time right now is:   
        </div>
          <Clock className="time"/>
      </body>
    </div>
  );
}

export default App;
