import React, { useEffect, useState } from 'react';

import './App.css';
import { getData } from './api/getData';

export const App: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(
    () => {
      getData()
        .then(res => setData(res.data.users));
    },
    []
  );

  return (
    <div className="App">
      {data.map(user => (
        <p key={user.name}>
          {user.name}
        </p>
      ))}
    </div>
  );
}
