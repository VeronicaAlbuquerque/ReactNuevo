import "./itemList.css";


const ItemList = ({product}) =>{
    return (
        <div className="items">
            <img src ={product.photo} alt="imgCard" />
            <h3>{product.name}</h3>
            <span>{`$ ${product.price}`}</span>
        </div>
    );
};
export default ItemList; 