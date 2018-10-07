import React, { Component } from 'react';

class Borrado extends Component {
    constructor(props){
        super(props);
        var datosBorrado = JSON.parse(localStorage.getItem("datos"));
        var id = this.props.match.params.id;
        var ele = JSON.parse(localStorage.getItem("datos")).findIndex(function (iteracion) {
            return iteracion.id === id;
        });
        datosBorrado.splice(ele,1);
        //console.log(ele);
        localStorage.removeItem("datos");
        localStorage.setItem("datos", JSON.stringify(datosBorrado));
        alert('Se ha eliminado la entrada correctamente!!!');
    } 

    render(){
        return(
            <div></div>
        );
    }
}

export default Borrado;