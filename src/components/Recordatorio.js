import React, { Component } from "react";

export default class Recordatorio extends Component{
    render(){
        return(
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.eleccionPrevia}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul> {this.props.elegidos}</ul>
            </div>
        );
    }
}
