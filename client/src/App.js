import { useEffect, useState } from 'react';

import './App.css';
import { getData } from './api/getData';

function App() {
  const [data, setData] = useState('');

  useEffect(
    () => {
      getData()
        .then(res => setData(res));
    },
    []
  );

  console.log(data)

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
