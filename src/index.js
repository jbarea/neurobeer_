import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './css/estilos.css';
import icono from './img/icono_cerveza.png';
import Home from './components/Home.page';
import Form from './components/Form';
import Listado from './components/Listado';
import PorNombre from './components/PorNombre';
import PorTipo from './components/PorTipo';
import PorGraduacion from './components/PorGraduacion';
import PorGraduacionDesc from './components/PorGraduacionDesc';
import PorID from './components/PorID';
import PorPrecio from './components/PorPrecio';
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
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/insertar' component={Form} exact/>
                <Route path='/listado' component={Listado} exact/>
                <Route path='/edicion/:id' component={Edicion} exact/>
                <Route path='/borrado/:id' component={Borrado} exact/>
                <Route path='/listado/porNombre/' component={PorNombre} exact/>
                <Route path='/listado/porTipo/' component={PorTipo} exact/>
                <Route path='/listado/porGraduacion/' component={PorGraduacion} exact/>
                <Route path='/listado/porGraduacionDesc/' component={PorGraduacionDesc} exact/>
                <Route path='/listado/porID/' component={PorID} exact/>
                <Route path='/listado/porPrecio/' component={PorPrecio} exact/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
)

ReactDOM.render((
    <AppRouter />),
     document.getElementById('root'));
registerServiceWorker();
