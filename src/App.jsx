import './App.css'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import {Profile} from './pages/Profile';
import { AddProject} from './pages/AddProject';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navigate to={"/"}/>}/>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/addproject' element={<AddProject/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
