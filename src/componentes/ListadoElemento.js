import React, {Component} from "react";

class ListadoElemento extends Component {

    clickMusica =(item) =>{
        const {agregarAlCarrito} = this.props
             console.log('haciendo click en la musica..',item)

     if(typeof agregarAlCarrito === 'function'){
          agregarAlCarrito(item);
}
    }
render(){
    const{contactos}=this.props;
    return(
    <div>
       
        <div>
            {contactos.map((item,index)=>{
             return(
                 <div onClick={()=>{this.clickMusica(item)}} key={index}>
                     {item.autor} - {item.precio}
                 </div>


             )

             
            })}
        </div>
    </div>
    )
}
}
export default ListadoElemento