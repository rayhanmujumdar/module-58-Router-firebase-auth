import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import Order from './Components/Order/Order';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<LogIn></LogIn>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/profile' element={
          <RequireAuth>
            <Profile></Profile>
          </RequireAuth>
          }></Route>
          <Route path='/orders' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
          }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
