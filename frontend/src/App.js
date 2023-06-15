import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OneSignal from 'react-onesignal';
import QuestionComponent from './QuestionComponent';
import './App.css';
import TeamsButton from './TeamsButton';

function App() {
  const [meetingTime, setMeetingTime] = useState('');

  const meetingTimes = ["10am CST", "11am CST", "1pm CST", "2pm CST", "3pm CST", "4pm CST"];
  const randomMeetingTime = meetingTimes[Math.floor(Math.random() * meetingTimes.length)];

  useEffect(() => {
    axios.get('http://localhost:5000/flask/hello')
      .then(response => {
        console.log("SUCCESS", response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    OneSignal.init({
      appId: "2451aa42-ebe6-4e40-bd1e-e85e0e25f02d"
    });
  }, []);

  useEffect(() => {
    setMeetingTime(randomMeetingTime);
  }, [randomMeetingTime]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>LinkUp</h1>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <figure>
              <img src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg" alt="Shoes" />
            </figure>
            <h2 className="card-title">Evelyn Herrera</h2>
            <div className="card-body-2">
              <p><b>Joined State Farm:</b> September 2019</p>
              <p><b>Title:</b> Technology Analyst</p>
              <p><b>Meeting Time:</b> {meetingTime}</p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><u><b>Meeting Link</b></u></a>
            </div>
          </div>
        </div>
        <QuestionComponent />
        <TeamsButton />
      </header>
    </div>
  );
}

export default App;