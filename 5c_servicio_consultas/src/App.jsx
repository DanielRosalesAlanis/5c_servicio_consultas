import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import UsersList from './pages/UsersList';
import CreateUser from './pages/CreateUser';
import UserDetails from './pages/UserDetails.jsx';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route element={<ProtectedRoute/>}>
            <Route path='/usersList' element={<UsersList/>}/>
            <Route path='/createUser' element={<CreateUser/>}/>
            <Route path='/userDetails/:id' element={<UserDetails/>}/>
        </Route>

    </Routes>
  )
}

export default App