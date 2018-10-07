import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/estilos.css';
import '../css/listado.css';
//import { ordenarPorTipo, ordenarPorPrecio, ordenarPorNombre } from '../utils/actions';
import { seleccionTipo } from '../data/selectOptions';
import uuid from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faEraser } from '@fortawesome/free-solid-svg-icons';
class Listado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            porPrecio: false,
            porTipo: false,
            porNombre: false,
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
                    <div className="elementoLista"><Link to={`/listado/porNombre/`}>Nombre</Link></div>
                    <div className="elementoLista"><Link to={`/listado/porGraduacion/`}>Grad</Link></div>
                    <div className="elementoLista"><Link to={`/listado/porTipo/`}>Tipo</Link></div>
                    <div className="elementoLista">Ingredientes</div>
                    <div className="elementoLista">Sin Gluten</div>
                    <div className="elementoLista">Precio</div>
                    {
                            /* this.porPrecio ? ordenarPorPrecio(this.state.datosListado, "precio") : this.porTipo ? ordenarPorTipo(this.state.datosListado, "tipo") :
                                this.porNombre ? ordenarPorNombre(this.state.datosListado, "nombre") : this.state.datosListado */
                    }
                </div>
                {
                    this.state.datosListado.map((item) => 
                    <div className="tablaListado" key={uuid()}>
                        <div className="elementoLista" key={item.id}>
                            <FontAwesomeIcon icon={faPencilAlt}/><Link className="botonEditar" to={`/edicion/${item.id}`} state={item.id}>Editar</Link>
                            <FontAwesomeIcon icon={faEraser}/><Link className="botonBorrar" to={`/borrado/${item.id}`} state={item.id}>Borrar</Link>
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

export default Listado;