import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OneSignal from 'react-onesignal';
import QuestionComponent from './QuestionComponent';
import './App.css';
import TeamsButton from './TeamsButton';
import LinkedInButton from './LinkedInButton';
import GithubButton from './GithubButton';

function App() {
  const [meetingTime, setMeetingTime] = useState('');

  const meetingTimes = ["10:00 AM CST", "11:00 AM CST", "1:00 PM CST", "2:00 PM CST", "3:00 PM CST", "4:00 PM CST"];
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
              <p><b>Location:</b> Champaign, IL (RDC)</p>
              <p><b>Meeting Time:</b> {meetingTime}</p>
              <a href="https://teams.microsoft.com/_#/modern-calling/"><u><b>Meeting Link</b></u></a>
            </div>
              <div class = 'TB'><LinkedInButton /><TeamsButton /><GithubButton /></div>

          </div>
        </div>
        <div class = 'qc'><QuestionComponent /></div>
      </header>
    </div>
  );
}

export default App;