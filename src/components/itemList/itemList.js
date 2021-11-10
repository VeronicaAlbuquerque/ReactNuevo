import "./itemList.css";

const ItemList = ({product}) =>{
    return (
        <div className="item">
            <img src ={product.photo} />
            <h3>{product.name}</h3>
            <span>${product.price}</span>
        </div>
    );
};
export default ItemList; 