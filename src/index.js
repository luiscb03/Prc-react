import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './componentes/header'
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom"; 
import { Fragment } from 'react/cjs/react.production.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Header />
      <main>
        <Routes>
          {/* <Route exact path="/Eres"></Route>
          <Route exact path="/Vrg">Eres la monda</Route>  */}
        </Routes>
      </main>
  </Router>
);

