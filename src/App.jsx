import './App.css'
import Home from './Page/Home'
import { Routes, Route} from "react-router-dom";
import Login from './Page/Login';
import Dashboard from './Page/Dashboard';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
