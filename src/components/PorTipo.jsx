import React, { Component } from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import '../css/estilos.css';
import '../css/listado.css';
import { ordenarPor } from '../utils/actions';
import { seleccionTipo } from '../data/selectOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faEraser } from '@fortawesome/free-solid-svg-icons';

class PorTipo extends Component {
    constructor(props){
        super(props);
        this.state = {
            datosListado: JSON.parse(localStorage.getItem("datos")) || []
        }
        console.log(this.state.datosListado);
        this.state.datosListado.sort(ordenarPor("tipo", true));
        console.log(this.state.datosListado)

    }

    render(){
        return(
            <div className="listadoContainer">
                <div>
                    <div className="tablaListado titulosTabla" key={uuid()}>
                        <div className="elementoLista">ID</div>
                        <div className="elementoLista">Imagen</div>
                        <div className="elementoLista"><Link to={`/listado/porNombre/`}>Nombre</Link></div>
                        <div className="elementoLista"><Link to={`/listado/porGraduacion/`}>Grad</Link></div>
                        <div className="elementoLista"><Link to={`/listado/porTipo/`}>Tipo</Link></div>
                        <div className="elementoLista">Ingredientes</div>
                        <div className="elementoLista">Sin Gluten</div>
                        <div className="elementoLista">Precio</div>
                    </div>
                    {
                        this.state.datosListado.map((item) =>
                            <div className="tablaListado" key={uuid()}>
                                <div className="elementoLista" key={item.id}>
                                    <FontAwesomeIcon icon={faPencilAlt} /><Link to={`/edicion/${item.id}`} state={item.id}>Editar</Link>
                                    <FontAwesomeIcon icon={faEraser} /><Link to={`/borrado/${item.id}`} state={item.id}>Borrar</Link>
                                    {item.id}</div>
                                <div className="elementoLista" >{item.imagen}</div>
                                <div className="elementoLista" >{item.nombre}</div>
                                <div className="elementoLista" >{item.graduacion}</div>
                                <div className="elementoLista" >{seleccionTipo[item.tipo]}</div>
                                <div className="elementoLista" >{item.ingredientes}</div>
                                <div className="elementoLista" >{item.check === true ? "Sin Gluten" : ""}</div>
                                <div className="elementoLista" >{item.precio}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default PorTipo;