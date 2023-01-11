
import './App.css';
import Templatetest from './template';
import MostrarDatos from './listado';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'

import { HashRouter } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='container'>
        <HashRouter>
          <Route path='/' element={<Templatetest></Templatetest>} />


          <Route path='/Listado' element={<MostrarDatos></MostrarDatos>} />


        </HashRouter>

      </div>
    </Router>

  );
}

export default App;
