import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './componentes/header'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Header />
  
);

