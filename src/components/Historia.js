import data from "./data.json";
import React, {Component} from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import Swal from 'sweetalert2'



const elegidos = [];

export default class Historia extends Component { 
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
            eleccionPrevia: "",
        };
    }

    componentDidMount(){
        Swal.fire({
            title: 'Comencemos la historia..',
            width: 600,
            padding: '3em',
            backdrop: `
              rgba(0,0,123,0.4)
              `
          })
        }
    componentDidUpdate( prevProps, prevState){
        if(prevState.contador !== this.state.contador){
            elegidos.push(this.state.eleccionPrevia);
        }
    }

    handleClick = (e) => {
        const id = e.target.id;
        if (this.state.contador >= 7){
            Swal.fire({
                title: "Fin",
                text:"Terminó la historia" ,
                icon: 'success',
              })
        }else if (id === "A" && this.state.eleccionPrevia !== "A"){
            this.setState({
                contador: this.state.contador + 1,
                eleccionPrevia: "A",
            });
        } else if ( id === "A" && this.state.eleccionPrevia === "A"){
            this.setState({
                contador: this.state.contador + 2,
            });
        }else if (id === "B" && this.state.eleccionPrevia === "A"){
            this.setState({
                contador: this.state.contador + 3,
                eleccionPrevia: "B",

            });
        } else if (id === "B"){
            this.setState({
                contador: this.state.contador +2,
                eleccionPrevia: "B",
            });
        }
        console.log(elegidos);
    };

    render(){
        return (
            <div className="layout">
            
                <h1 className= "historia">
                    {data[this.state.contador].historia}
                </h1>
                <Opciones
                    handleClick = {this.handleClick}
                    opcionA = {data[this.state.contador].opciones.a}
                    opcionB= {data[this.state.contador].opciones.b}/>
                <Recordatorio
                    eleccionPrevia= {this.state.eleccionPrevia}
                    elegidos = {elegidos.map((e, index) => (
                        <li key={index}>{e}</li>
                    ),
                    data[this.state.contador].id)}
                    />    
                
            </div>
        );
    }
}
