import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Connexion from './Pages/Connexion';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/connexion' element={<Connexion/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
