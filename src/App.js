import Home from './pages/home/index.js';
import Login from './pages/login/index.js';
import Register from  './pages/register/index.js';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';



function App() {
  return (
      //<div className="App">
    //    <Home></Home>
    //  </div>


      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="*" element={<h1>Not found 404!</h1>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
