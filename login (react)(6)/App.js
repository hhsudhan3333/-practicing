import React from 'react';
import Login from './Login';

function App() {
  const users = [
    { username: 'hari', password: '1234' },
    { username: 'arun', password: 'abcd' },
    { username: 'ram', password: '5678' }
  ];

  return (
    <div>
      <h2>Login Page</h2>
      <Login validUsers={users} />
    </div>
  );
}

export default App;
