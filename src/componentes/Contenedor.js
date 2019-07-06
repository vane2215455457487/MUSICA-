import React,{Component} from "react";
import ListadoElemento from "./ListadoElemento";

const arregloContactos = [

   {id:1, autor:"luis fonsi", album:"Tierra Firme"},
    {id:2, autor:"Cristian Castro", album:"Lo mejor de mi"},
    {id:3, autor:"chayanne", album:"Atado a tu Amor"},
    {id:4, autor:"camila", album:"Todo Cambio"},
    {id:5, autor:"sin bandera", album:"Pasado"},
    {id:6, autor:"ha ash", album:"30 de febrero"},
    {id:7, autor:"Ricardo Montaner", album:"Ida y Vuelta"},
    {id:8, autor:"Kalimba", album:"Mi otro yo"},
    {id:9, autor:"Jerry Rivera", album:"Cuenta Conmigo"},
    {id:10,autor:"Juan Gabriel", album:"Recuerdos"},

]

class Contenedor extends Component {
   
    constructor(){
        super()
        this.state={
            ListadoContactos:arregloContactos
        }
        
    }
   
    escribiendo = (evento)=>{
       // console.log("escribiendo",event.target.value)
        const texto = evento.target.value;
        this.filtrar(texto)

    }

    filtrar = (texto)=>{
        const listadofiltrado = [];
     
        for (let i=0; i < arregloContactos.length; i++){
            const contacto = arregloContactos[i];
            if(contacto.autor   .startsWith(texto)){
                listadofiltrado.push(contacto);
            }
this.setState({ListadoContactos:listadofiltrado})
        }
    }
    render(){
        const{ListadoContactos} = this.state;
console.log(ListadoContactos)
        return(
            <div>
             Buscador Musica
             <div>
                 <div><input onChange={this.escribiendo} /></div>
                <ListadoElemento contactos={ListadoContactos} />
             </div>
           </div>
        )
    } 

    
        }
    
export default Contenedor