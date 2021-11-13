import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import Tortas from "../../Assets/Productos/products";

const ItemDetailContainer = () => {
    const [tortas, setTortas] = useState (null);

    const getItem = (tortas) => 
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(tortas){
                resolve(tortas);
            }else {
                reject("No se encontraron Productos Disponibles");
            }
        }, 2000);

    });
   
    useEffect (() =>{
        getItem(Tortas)
        fetch("..\Assets\img\cheesecake.jpeg")
        .then((response)=> response.json())
        .then((torta) => {
            setTortas(torta.results);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, []);

    return(
        <>
        {tortas?.map((torta)=> {
            <ItemDetail key= {torta.name} product= {torta.name} product= {torta.photo}/>
        })}
        </>


    );
}

export default ItemDetailContainer;
