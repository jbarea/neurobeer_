import React, { Component } from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import '../css/estilos.css';
import '../css/listado.css';
import { ordenarPor } from '../utils/actions';
import { seleccionTipo } from '../data/selectOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faEraser, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

class PorID extends Component {
    constructor(props){
        super(props);
        this.state = {
            datosListado: JSON.parse(localStorage.getItem("datos")) || []
        }
        this.state.datosListado.sort(ordenarPor("id", true));
    }

    render() {
        return (
            <div className="listadoContainer">
                <div>
                    <div className="tablaListado titulosTabla" key={uuid()}>
                        <div className="elementoLista">ID
                            <Link to={`/listado/porID/`}>
                                <FontAwesomeIcon icon={faArrowUp} />
                            </Link>
                            <Link to={`/listado/porIDDesc/`}>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </Link>
                        </div>
                        <div className="elementoLista">Imagen</div>
                        <div className="elementoLista"><Link to={`/listado/porNombre/`}>Nombre</Link></div>
                        <div className="elementoLista">Grad
                            <Link to={`/listado/porGraduacion/`}>
                                <FontAwesomeIcon icon={faArrowUp} />
                            </Link>
                            <Link to={`/listado/porGraduacionDesc/`}>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </Link>
                        </div>
                        <div className="elementoLista"><Link to={`/listado/porTipo/`}>Tipo</Link></div>
                        <div className="elementoLista">Ingredientes</div>
                        <div className="elementoLista">Sin Gluten</div>
                        <div className="elementoLista"><Link to={`/listado/porPrecio/`}>Precio</Link></div>
                    </div>
                    {
                        this.state.datosListado.map((item) =>
                            <div className="tablaListado" key={uuid()}>
                                <div className="elementoLista" key={item.id}>
                                    <Link className="botonEditar" to={`/edicion/${item.id}`} state={item.id}><FontAwesomeIcon icon={faPencilAlt} /></Link>
                                    <Link className="botonBorrar" to={`/borrado/${item.id}`} state={item.id}><FontAwesomeIcon icon={faEraser} /></Link>
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

export default PorID;