import React from 'react';
import './App.css';
import './media.css';
import TaskList from './TaskList';
// import timeWeather from './time_weather';
import Clock from 'react-live-clock';


function App() {
  return (
    <div className="App">
      <header className="main-content">
        <div className="stats">
          <div className="stats-title">
            today's stats
          </div>
          <div className="tasks-done">
          3
          </div>
          <div classname="taskstext">
            tasks done this week
          </div>
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
      <div className="bottom-panel">
        <div className="bottom-text">
          hi there, the time right now is: <Clock format="hh:mm:ss A" className="time"/>
        </div>
        <div className="bottom-text">
          today, it is <Clock format="MMMM Do, YYYY" className='time'/>
        </div>
      </div>
    </div>
  );
}

export default App;
