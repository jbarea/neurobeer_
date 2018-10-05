import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './css/estilos.css';
import Home from './components/Home.page';
import Form from './components/Form';
import Listado from './components/Listado';
import Edicion from './components/Edicion';
import Borrado from './components/Borrado';
import 'bootstrap/dist/css/bootstrap.css';

//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Header = () => (
    <div className="cabecera">
    <header>
        <h3>Neurobeer</h3>
        <NavLink className="navlink" activeClassName='is-active' to='/' exact>Inicio</NavLink>
        <NavLink className="navlink" activeClassName='is-active' to='/insertar'>Insertar</NavLink>
        {/* <NavLink className="navlink" activeClassName='is-active' to='/edicion'>Edicion</NavLink> */}
        <NavLink className="navlink" activeClassName='is-active' to='/listado'>Listado</NavLink>
    </header>
    </div>
);

const Footer = () => (
    <footer>
        <p>Murcia 2018</p>
    </footer>
)

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/insertar' component={Form} exact/>
                <Route path='/listado' component={Listado} exact/>
                <Route path='/edicion/:id' component={Edicion} exact/>
                <Route path='/borrado/:id' component={Borrado} exact/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
)

ReactDOM.render((
    <AppRouter />),
     document.getElementById('root'));
registerServiceWorker();
