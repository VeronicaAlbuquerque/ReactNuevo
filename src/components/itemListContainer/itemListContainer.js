import {useEffect, useState} from "react";
import ItemList from "../itemList/itemList";
import Tortas from "../itemList/products";

const ItemListContainer = () => {
    const [tortas, setTortas] = useState ([]);

    const getDatos = (tortas) => 
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(tortas){
                resolve(tortas);
            }else {
                reject("No se encontraron Productos Disponibles");
            }
        }, 3000);

    });

    useEffect (() =>{
        getDatos(Tortas)
        .then((respuesta) => setTortas(respuesta))
        .catch((error)=> console.log(error));

    }, []);

    return(
        <>
        {tortas.length ? tortas.map((torta)=> (
            <ItemList product = {torta} key= {torta.id} />))
            : "Cargando ..."}
        </>


    );
};
    export default ItemListContainer; 