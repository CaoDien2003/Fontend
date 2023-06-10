import { Routes, BrowserRouter, Route } from 'react-router-dom'
import * as React from 'react';

import Product from './table/product';
import Manager from './pages/manager';
import Login from './table/login';
import User from './table/users';
import Create_user from './table/create_user';

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' exact element={<Login />} />
          <Route path='/manager' element={<Manager />} />
          <Route path='/product' element={<Product />} />
          <Route path='/user' element={<User />} />
          <Route path='/createuser' element={<Create_user />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App