import "./module.header.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function Header() {
    return (
        <div>
            <h1 className="letrero">POKEMONES</h1>
            {/* <Link to="Eres">Eres</Link>
            <br></br>
            <Link to="Vrg">Vrg</Link> */}
        </div>
    );
}