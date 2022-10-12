



const Products = ({ data, addToCart }) => {
  const { id, image, country, price } = data;

  return (
    <div className="products">
      <img className="w-28 h-28 rounded" src={image}/>
      <h4>{country}</h4>
      <h5>$ {price}</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};
export default Products;
