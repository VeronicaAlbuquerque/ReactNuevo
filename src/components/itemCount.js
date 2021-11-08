import React from "react";
import { useState } from "react";


const ItemCount = () => {
    const [contador, setContador] = useState(0);
    const stockMin = 0;
  
    return (
        <>
        
        <h1>Contador : {contador}</h1>
        <button
          title= "Agregar al carrito"
          onClick = {() => {
            if(stockMin >=0 && contador <=9){
              setContador (contador + 1)
            }else {
              alert("no hay mas stock del producto")
            }
          }
        }>+</button>
        <button
        title="Quitar del carrito"
        onClick={() => {
          if(contador >=1){
            setContador (contador - 1)
          }else{
            alert("La cantidad seleccionada no puede ser menor a 0")
          }

        }}>-</button>
        </>
    )
};
export default ItemCount;