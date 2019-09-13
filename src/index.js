import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './css/estilos.css';
import icono from './img/icono_cerveza.png';
import Home from './components/Home.page';
import Form from './components/Form';
import Listado from './components/Listado';
import ListPag from './components/ListPag';
import Edicion from './components/Edicion';
import Borrado from './components/Borrado';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import registerServiceWorker from './registerServiceWorker';

const Header = () => (
    <div className="cabecera">
    <header>
        <img src={icono} alt="icono de cerveza" height="30px" width="30px"></img>
        <h3>Neurobeer</h3>
        <NavLink className="navlink" activeClassName='is-active' to='/' exact>Inicio</NavLink>
        <NavLink className="navlink" activeClassName='is-active' to='/insertar'>Insertar</NavLink>
        <NavLink className="navlink" activeClassName='is-active' to='/listado'>Listado</NavLink>
        <NavLink className="navlink" activeClassName='is-active' to='/listadoP'>Listado Pag</NavLink>
    </header>
    </div>
);

const Footer = () => (
    <footer>
        <img src={icono} alt="icono de cerveza" height="30px" width="30px"></img>
        <p className="pie">Neurobeer<FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> Murcia 2018</p>
        <img src={icono} alt="icono de cerveza" height="30px" width="30px"></img>
    </footer>
)

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <Header/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/insertar' component={Form} exact/>
                <Route path='/listado' component={Listado} exact/>
                <Route path='/listadoP' component={ListPag} exact/>
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
