import React, {Component} from "react";

class ListadoElemento extends Component {

render(){
    const{contactos}=this.props;
    return(
    <div>
        <div>Musica</div>
        <div>
            {contactos.map((item)=>{
             return(
                 <div key={item.id}>
                     {item.autor}
                 </div>
             )

             
            })}
        </div>
    </div>
    )
}
}
export default ListadoElemento