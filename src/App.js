
import './App.css';
import Templatetest from './template';
import MostrarDatos from './listado';
import {
  Route,
  Routes,
  Link
} from 'react-router-dom'

import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Templatetest></Templatetest>} />


          <Route path='/Listado' element={<MostrarDatos></MostrarDatos>} />


        </Routes>

      </div>
    </HashRouter>

  );
}

export default App;
