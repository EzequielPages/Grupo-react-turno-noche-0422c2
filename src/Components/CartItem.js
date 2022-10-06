const CartItem = ({ data, deleteFromCart }) => {
  const { id, name, price, quantity, img } = data;

  return (
    <div className="card-item flex">
      <img className="w-28 h-28 rounded" src={img}/>
      <div className='flex flex-col justify-between ml-4'>
      <h4 className='text-xl'>Tu viaje a: {name}</h4>
      <h5>
        $ {price} x {quantity} = ${price * quantity}
      </h5>
      </div>
      <button onClick={() => deleteFromCart(id)}>Eliminar Uno</button>
      <button onClick={() => deleteFromCart(id, true)}>Eliminar Todos</button>
    </div>
  );
};
export default CartItem;
