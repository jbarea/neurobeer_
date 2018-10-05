import React, { Component } from 'react';
//import { Edicion } from './Edicion';
import { Link } from 'react-router-dom';
import '../css/estilos.css';
import '../css/listado.css';
import uuid from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faEraser } from '@fortawesome/free-solid-svg-icons';
class Listado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datosListado: JSON.parse(localStorage.getItem("datos")) || []
        }
    }

    render() {
        return(
        <div className="listadoContainer">
            <div>
                <div className="tablaListado titulosTabla" key={uuid()}>
                    <div className="elementoLista">ID</div>
                    <div className="elementoLista">Imagen</div>
                    <div className="elementoLista">Nombre</div>
                    <div className="elementoLista">Graduación</div>
                    <div className="elementoLista">Tipo</div>
                    <div className="elementoLista">Ingredientes</div>
                    <div className="elementoLista">Sin Gluten</div>
                    <div className="elementoLista">Precio</div>
                </div>
                {

                    this.state.datosListado.map((item) => 
                    <div className="tablaListado" key={uuid()}>
                        <div className="elementoLista" key={item.id}>
                            <FontAwesomeIcon icon={faPencilAlt}/><Link to={`/edicion/${item.id}`} state={item.id}>Editar</Link>
                            <FontAwesomeIcon icon={faEraser}/><Link to={`/borrado/${item.id}`} state={item.id}>Borrar</Link>
                        {item.id}</div>
                        <div className="elementoLista" >{item.imagen}</div>
                        <div className="elementoLista" >{item.nombre}</div>
                        <div className="elementoLista" >{item.graduacion}</div>
                        <div className="elementoLista" >{item.tipo}</div>
                        <div className="elementoLista" >{item.ingredientes}</div>
                        <div className="elementoLista" >{item.check}</div>
                        <div className="elementoLista" >{item.precio}</div>
                    </div>
                    )
                }
            </div>
        </div>
        )
    }
 }

export default Listado;