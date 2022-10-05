const Products = ({ data, addToCart }) => {
  const { id, name, price } = data;

  return (
    <div className="products">
      <h4>{name}</h4>
      <h5>$ {price}</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};
export default Products;
