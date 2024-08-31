import React, { useState, useEffect } from 'react';
import "./App.css";

const App = () => {
  const [thread, setThread] = useState([]);

  useEffect(() => {
    threadsList();
  }, []);

  const threadsList = () => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=15")
      .then(response => response.json())
      .then(data => {
        setThread(data)
      })
  };



  return (
    <div  className='body'>
      <header className='title'>スレッド一覧</header>
      <ul className='list'>
        {
          thread.map((threads) => (
            <li key={threads.id}>{threads.title}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default App;
