import { useEffect, useState } from 'react';

import './App.css';
import { getData } from './api/getData';

function App() {
  const [data, setData] = useState([]);

  useEffect(
    () => {
      getData()
        .then(res => setData(res.data.warriors));
    },
    []
  );

  console.log(data)

  return (
    <div className="App">
      {data.map(warrior => (
        <p key={warrior.name}>
          {warrior.name}
        </p>
      ))}
    </div>
  );
}

export default App;
