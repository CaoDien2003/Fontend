import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post('/api/login', { email, password });

      if (response.data.success) {
        console.log('Đăng nhập thành công!');
        setLoggedIn(true);
      } else {
        console.log('Đăng nhập thất bại!');
      }
    } catch (error) {
      console.error('Đã xảy ra lỗi:', error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Chào mừng!</h2>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <div>
          <h2>Đăng nhập</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Mật khẩu:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Đăng nhập</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
