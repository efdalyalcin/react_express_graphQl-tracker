import { useEffect, useState } from 'react';

import './App.css';
import { getData } from './api/getData';

function App() {
  const [data, setData] = useState();

  useEffect(
    () => {
      const data = getData();
      setData(data);
    },
    []
  );

  console.log(data)

  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;
