import React,{Component} from "react";
import ListadoElemento from "./ListadoElemento";

const arregloContactos = [

   {id:1, autor:"luis fonsi", album:"Tierra Firme", precio:90},
    {id:2, autor:"Cristian Castro", album:"Lo mejor de mi", precio:80},
    {id:3, autor:"chayanne", album:"Atado a tu Amor", precio:70},
    {id:4, autor:"camila", album:"Todo Cambio", precio:60},
    {id:5, autor:"sin bandera", album:"Pasado", precio:50},
    {id:6, autor:"ha ash", album:"30 de febrero", precio:40},
    {id:7, autor:"Ricardo Montaner", album:"Ida y Vuelta", precio:30},
    {id:8, autor:"Kalimba", album:"Mi otro yo", precio:20},
    {id:9, autor:"Jerry Rivera", album:"Cuenta Conmigo", precio:10},
    {id:10,autor:"Juan Gabriel", album:"Recuerdos", precio:20},
 
] 
 
class Contenedor extends Component {
   
    constructor(){
        super()
        this.state={
            ListadoContactos:arregloContactos,
            ListaCarrito:[],
            total:0 
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
            if(contacto.autor.toLowerCase().startsWith(texto.toLowerCase())){
                listadofiltrado.push(contacto);           
            }
this.setState({ListadoContactos:listadofiltrado})
        }
    }

    agregarAlCarrito = (Musica) => {
        const {ListaCarrito}=this.state
        ListaCarrito.push(Musica);
        this.setState({ListaCarrito})
   let precioTotal = 0;
   ListaCarrito.forEach((item)=>{
       precioTotal=precioTotal+item.precio;
   })
   this.setState({ListaCarrito,total:precioTotal})
    }
    render(){
        const{ListadoContactos,ListaCarrito,total} = this.state;
console.log(ListadoContactos)
        return(
            <div>
             Buscador Musica
             <div style={{display:'flex',backgroundColor: 'pink'}}>
            
              <div style={{flex:1,backgroundColor:'yellow'}}>

              <div><input onChange={this.escribiendo} />
              <ListadoElemento agregarAlCarrito={this.agregarAlCarrito} contactos={ListadoContactos} />

              </div>

              </div>
              <div style={{flex:1,backgroundColor:'brown'}}>
                  Carrito de Compras
                  <div>total{total}</div>
             <ListadoElemento contactos = {ListaCarrito}/>

              
             </div>
             

             <div>
               
                 </div>
                
             </div>           
           </div>
        )
    } 

    
        }
    
export default Contenedor