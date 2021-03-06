import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import uuid from 'uuid';
import '../css/estilos.css';
import '../css/form.css';
import 'bootstrap/dist/css/bootstrap.css';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: uuid().substring(0,8),
            imagen: '',
            grad: '',
            nombre: '',
            tipo: '',
            ingr: '',
            chk: '',
            precio: '',
            formErrors: { imagen: '', grad: '', nombre: '', tipo: '', ingr: '', precio: ''},
            imagenValid: false,
            gradValid: false,
            nombreValid: false,
            tipoValid: false,
            ingrValid: false,
            chkValid: false,
            precioValid: false,
            formValid: false,
            beerStore: JSON.parse(localStorage.getItem("datos")) || []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            id: uuid().substring(0,8),
            imagen: this.state.imagen,
            graduacion: this.state.grad,
            nombre: this.state.nombre,
            tipo: this.state.tipo,
            ingredientes: this.state.ingr,
            check: this.state.chk,
            precio: this.state.precio
        }
        this.state.beerStore.push(data);
        localStorage.setItem('datos', JSON.stringify(this.state.beerStore));
        this.setState(prevState => {
            return prevState = {
                ...prevState,
                imagen: '',
                grad: '',
                nombre: '',
                tipo: '',
                ingr: '',
                chk: '',
                precio: '',
                formValid: false
            }
        })
        alert("Se ha creado la entrada correctamente!. Pulse aceptar para continuar.");
    }

/*     readURL(input) {
    document.getElementById("imgSelected").style.display = "block";

    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('imgSelected').src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
        }
    } */

    handleUserInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) })
    }

    validateField(fieldName, value){
        let fieldValidationErrors = this.state.formErrors;
        let {
            imagenValid, gradValid, nombreValid, tipoValid, ingrValid, chkValid, precioValid
        } = this.state;

        switch(fieldName){
            case 'imagen':
                this.imagen = value;
                imagenValid = value.match(/[0-9a-zA-Z]/i);
                fieldValidationErrors.imagen = imagenValid ? '' : 'Error al seleccionar archivo!';
                break;
            case 'grad':
                this.grad = value;
                gradValid = value.match(/[0-9]/i);
                fieldValidationErrors.grad = gradValid ? '' : 'El campo Graduación debe ser numérico!';
                break;
            case 'nombre':
                this.nombre = value; 
                nombreValid = value.match(/[a-zA-Z]/i);
                fieldValidationErrors.nombre = nombreValid ? '' : 'El campo solo puede contener caracteres alfanuméricos';
                break;
            case 'tipo':
                tipoValid = document.getElementById("tipo").selectedIndex;
                let tipo2 = document.getElementById("tipo");
                this.tipo = tipo2.options[tipo2.selectedIndex].text;
                //console.log(this.tipo);
                if((tipoValid === null) || (tipoValid === 0)){
                    tipoValid = false; 
                }else{
                    tipoValid = true;
                }
                //console.log(tipoValid);
                fieldValidationErrors.tipo = tipoValid ? '' : 'Debe de seleccionar un tipo';
                break;
            case 'ingr':
                ingrValid = value.match(/[a-zA-Z]/i);
                fieldValidationErrors.ingr = ingrValid ? '' : 'El campo solo puede contener caracteres alfanuméricos';
                break;
            case 'chk':
                chkValid = value;
                //console.log(chkValid);
                if(!chkValid.checked){
                    chkValid = false;
                }else{
                    chkValid = true;
                }
                break;
            case 'precio':
                precioValid = value.match(/[0-9]/i);
                fieldValidationErrors.precio = precioValid ? '' : 'El campo precio debe de ser numérico';
                break;
            default:
                break;
        }

        this.setState(
            {formErrors: fieldValidationErrors,
            imagenValid: imagenValid,
            gradValid: gradValid,
            nombreValid: nombreValid,
            tipoValid: tipoValid,
            ingrValid: ingrValid,
            chkValid: chkValid,
            precioValid: precioValid}, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.imagenValid && this.state.gradValid && this.state.nombreValid && this.state.tipoValid && 
            this.state.precioValid
        });
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    render() {
        return(
            <form className="formBeer" method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <h2>Introduzca valores para la creación:</h2>
                <div className="formBorder">
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors}/>
                    </div>
                    <div className="form-group" id="img">
                        <label htmlFor="imagen">Imagen:</label>
                        <input type="file" className="form-control-file" id="img_in" name="imagen" value={this.state.imagen} 
                        onChange={(event) => this.handleUserInput(event)} required></input>
                        <img id="imgSelected" src={"/img/"+this.state.imagen.substring(12)} width="100px" height="100px" name="imgSelected" 
                            alt="imagen seleccionada mediante cuadro de diálogo">
                        </img>
                        <br/>
                    </div>
                    <div className="form-row">
                        <div className={`form-group col-md-4 ${this.errorClass(this.state.formErrors.nombre)}`} id="nom">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" className="form-control" name="nombre" value={this.state.nombre} 
                            onChange={(event) => this.handleUserInput(event)} required></input><br/>
                        </div>
                        <div className={`form-group col-md-2 ${this.errorClass(this.state.formErrors.grad)}`} id="grad">
                            <label htmlFor="grad">Graduación:</label>
                            <input type="text" className="form-control" size="3" name="grad" value={this.state.grad} 
                            onChange={(event) => this.handleUserInput(event)} required></input><br/>
                        </div>
                    </div>
                    <div className="form-group" id="sel">
                        <label htmlFor="sele">Selección</label>
                        <select id="tipo" name="tipo" onChange={(event) => this.handleUserInput(event)} required>
                            <option value="0">Seleccione Un tipo</option>
                            <option value="1">Ale</option>
                            <option value="2">De trigo</option>
                            <option value="3">IPA</option>
                            <option value="4">Lager</option>
                            <option value="5">Lambic</option>
                            <option value="6" >Pilsen</option>
                            <option value="7">Porter</option>
                            <option value="8">Stout</option>
                        </select><br/>
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.ingr)}`} id="ingr">
                        <label htmlFor="ingr">Ingredientes:</label><br/>
                        <textarea name="ingr" rows="4" cols="80" value={this.state.ingr} 
                        onChange={(event) => this.handleUserInput(event)}></textarea><br/>
                    </div>
                    <div className="form-group" id="check">
                        <label><input type="checkbox" name="chk" id="chk" value="Sin Gluten" 
                        onChange={(event) => this.handleUserInput(event)}></input>Sin gluten</label><br />
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.precio)}`} id="pre">
                        <label htmlFor="precio">Precio:</label><br/>
                        <input type="text" name="precio" value={this.state.precio} 
                        onChange={(event) => this.handleUserInput(event)} required></input><br/>

                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid} align="center">
                            Añadir
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;