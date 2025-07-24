import React, { useState } from 'react';

function Login({ validUsers }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const userFound = validUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      setMessage(`✅ Welcome, ${username}!`);
    } else {
      setMessage('❌ Wrong username or password!');
    }
  };

  return (
    <div style={{ maxWidth: '300px', padding: '20px', border: '1px solid #aaa' }}>
      <label>Username:</label><br />
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br /><br />
      <label>Password:</label><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />

      <button onClick={handleLogin}>Login</button>

      <p style={{ marginTop: '15px', color: message.includes("Welcome") ? 'green' : 'red' }}>
        {message}
      </p>
    </div>
  );
}

export default Login;
