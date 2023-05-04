import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/connexion' element={<Connexion/>}/>
            <Route path='/inscription' element={<Inscription/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
