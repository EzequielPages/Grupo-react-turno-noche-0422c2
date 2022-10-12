const CartItem = ({ data, deleteFromCart }) => {
  const { id, country, price, quantity, image } = data;

  let finalPrice = price * quantity

  return (
    <div className="card-item flex p-2">
      <img className="w-28 h-28 rounded" src={image} />
      <div className="flex flex-col justify-between ml-4">
        <h4 className="text-xl">Tu viaje a: {country}</h4>
        <h5>Precio unitario: ${price} </h5>
        <h5>Precio Total:</h5>
        <h5>{quantity} x $ {finalPrice}</h5>
      </div>
      <div className="btn-group btn-group-vertical gap-2">
        <button
          className="btn btn-sm dark:bg-third-night-color dark:text-seventh-night-color"
          onClick={() => deleteFromCart(id)}>
          Eliminar Uno
        </button>
        <button
          className="btn btn-sm dark:bg-third-night-color dark:text-seventh-night-color"
          onClick={() => deleteFromCart(id, true)}>
          Eliminar Todos
        </button>
      </div>
    </div>
  );
};
export default CartItem;
