import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/estilos.css';
import '../css/listado.css';
import { ordenarPor } from '../utils/actions';
import { seleccionTipo } from '../data/selectOptions';
import uuid from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faEraser, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'; //faArrowUp y faArrowDown para flechas de ordenacion

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

    handleDelete = (elemID) => {
        let datosBorrado = JSON.parse(localStorage.getItem("datos"));
        //var id = elemID;
        let ele = JSON.parse(localStorage.getItem("datos")).findIndex(function (iteracion) {
            return iteracion.id === elemID;
        });

        datosBorrado.splice(ele, 1);
        //console.log(ele);
        localStorage.removeItem("datos");
        localStorage.setItem("datos", JSON.stringify(datosBorrado));
        //this.setState(this.state.datosListado=JSON.parse(localStorage.getItem("datos")));
        this.setState(prevState => {
            return prevState = {
                ...prevState,
                porPrecio: false,
                porTipo: false,
                porNombre: false,
                datosListado: JSON.parse(localStorage.getItem("datos"))
            }
        })
        alert('Se ha eliminado la entrada correctamente!!!');
    }

    handleOrder = (opcion) => {
        switch(opcion){
            case 'graduacion':
                this.setState(this.state.datosListado.sort(ordenarPor("graduacion",true,parseFloat)));
                //console.log(this.state.datosListado);
                break;
            case 'graduacionD':
                this.setState(this.state.datosListado.sort(ordenarPor("graduacion",false,parseFloat)));
                break;
            case 'tipo':
                this.setState(this.state.datosListado.sort(ordenarPor("tipo",true)));
                break;
            case 'tipoD':
                this.setState(this.state.datosListado.sort(ordenarPor("tipo",false)));
                break;
            case 'nombre':
                this.setState(this.state.datosListado.sort(ordenarPor("nombre",true)));
                break;
            case 'nombreD':
                this.setState(this.state.datosListado.sort(ordenarPor("nombre",false)));
                break;
            case 'id':
                this.setState(this.state.datosListado.sort(ordenarPor("id",true)));
                break;
            case 'idD':
                this.setState(this.state.datosListado.sort(ordenarPor("id",false)));
                break;
            case 'precio':
                this.setState(this.state.datosListado.sort(ordenarPor("precio",true,parseFloat)));
                break;
            case 'precioD':
                this.setState(this.state.datosListado.sort(ordenarPor("precio",false,parseFloat)));
                //console.log(this.state.datosListado);
                break;
            default:
                break;
        }
    }

    render() {
        return(
        <div className="listadoContainer">
            <div>
                <div className="tablaListado titulosTabla" key={uuid()}>
                    <div className="elementoLista">ID
                        <FontAwesomeIcon icon={faArrowUp} onClick={() => this.handleOrder("id")}/>
                        <FontAwesomeIcon icon={faArrowDown} onClick={() => this.handleOrder("idD")}/>
                    </div>
                    <div className="elementoLista">Imagen</div>
                    <div className="elementoLista">Nombre
                        <FontAwesomeIcon icon={faArrowUp} onClick={() => this.handleOrder("nombre")} />
                        <FontAwesomeIcon icon={faArrowDown} onClick={() => this.handleOrder("nombreD")} />
                    </div>
                        <div className="elementoLista" >Grad
                        <FontAwesomeIcon icon={faArrowUp} onClick={() => this.handleOrder("graduacion")}/>
                        <FontAwesomeIcon icon={faArrowDown} onClick={() => this.handleOrder("graduacionD")}/>
                    </div>
                    <div className="elementoLista">Tipo
                        <FontAwesomeIcon icon={faArrowUp} onClick={() => this.handleOrder("tipo")} />
                        <FontAwesomeIcon icon={faArrowDown} onClick={() => this.handleOrder("tipoD")} />
                    </div>
                    <div className="elementoLista">Ingredientes</div>
                    <div className="elementoLista">Sin Gluten</div>
                    <div className="elementoLista">Precio
                        <FontAwesomeIcon icon={faArrowUp} onClick={() => this.handleOrder("precio")} />
                        <FontAwesomeIcon icon={faArrowDown} onClick={() => this.handleOrder("precioD")} />
                    </div>
                    {
                            /* this.porPrecio ? ordenarPorPrecio(this.state.datosListado, "precio") : this.porTipo ? ordenarPorTipo(this.state.datosListado, "tipo") :
                                this.porNombre ? ordenarPorNombre(this.state.datosListado, "nombre") : this.state.datosListado */
                    }
                </div>
                {
                    this.state.datosListado.map((item) => 
                    <div className="tablaListado" key={uuid()}>
                        <div className="elementoLista" key={item.id}>
                            <Link className="botonEditar" to={`/edicion/${item.id}`} state={item.id}><FontAwesomeIcon icon={faPencilAlt} /></Link>
                            <FontAwesomeIcon icon={faEraser} onClick={() => this.handleDelete(item.id)}/>
                            {/* <FontAwesomeIcon icon={faPencilAlt}/><Link className="botonEditar" to={`/edicion/${item.id}`} state={item.id}>Editar</Link> */}
                            {/* <FontAwesomeIcon icon={faEraser}/><Link className="botonBorrar" to={`/borrado/${item.id}`} state={item.id}>Borrar</Link> */}
                        </div>
                        <div className="elementoLista" >
                            <img id="imgSelected" src={"/img/" + item.imagen.substring(12)} width="100px" height="100px" name="imgSelected" 
                            alt="imagen seleccionada mediante cuadro de diálogo"></img>
                        </div>
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