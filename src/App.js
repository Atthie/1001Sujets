import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import AccueilAuteur from './Pages/Dashboard/Admin/Accueil';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/connexion' element={<Connexion/>}/>
            <Route path='/inscription' element={<Inscription/>}/>
            <Route path='/auteurAccueil' element={<AccueilAuteur/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
