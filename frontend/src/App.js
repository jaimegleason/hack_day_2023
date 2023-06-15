// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function App() {
  // eslint-disable-next-line
  const [getMessage, setGetMessage] = useState({})

  const meeting_times = ["10am CST", "11am CST", "1pm CST", 
                          "2pm CST", "3pm CST", "4pm CST"]
  const meeting_time = meeting_times[Math.random() % meeting_times.length]

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>LinkUp</h1>
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <figure><img src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg" alt="Shoes" /></figure>
            <h2 className="card-title">Evelyn Herrera</h2>
            <div className="card-body-2">
              <p><b>Joined State Farm:</b> September 2019</p>
              <p><b>Title:</b> Technology Analyst</p>
              <p><b>Meeting Time:</b> 2pm CST</p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><u><b>Meeting Link</b></u></a>
            </div>
  </div>
</div>

      </header>
    </div>
  );
}

export default App;