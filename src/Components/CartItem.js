import "./CartItem.css"

const CartItem = ({ data, deleteFromCart, addToCart }) => {
  const { id, country, price, quantity, image } = data;

  let finalPrice = price * quantity

  return (
    <div className="card-item flex p-2">
      <img className="rounded w-14 h-24 object-cover" src={image} alt="img" />
      <div className="flex flex-col justify-between ml-4 textSize">
        <h4 className="font-bold ">Tu viaje a: {country}</h4>
        <h5 className="text-third-color">Valor del Tour: ${price} </h5>
        <h5 className="text-third-color">Precio Total:</h5>
        <h5 className="text-third-color">{quantity} x $ {finalPrice}</h5>
      </div>
      <div className="btn-group btn-group-vertical gap-2">
        <button
          className="btn btn-sm dark:bg-third-night-color dark:text-seventh-night-color"
          onClick={() => deleteFromCart(id, true)}>
          Eliminar Todos
        </button>
        <button
          className="btn btn-sm dark:bg-third-night-color dark:text-seventh-night-color"
          onClick={() => addToCart(id)}>
          +
        </button>
        <button
          className="btn btn-sm dark:bg-third-night-color dark:text-seventh-night-color"
          onClick={() => deleteFromCart(id)}>
          -
        </button>
      </div>
    </div>
  );
};
export default CartItem;
