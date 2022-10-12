const CartItem = ({ data, deleteFromCart }) => {
  const { id, country, price, quantity, image } = data;

  return (
    <div className="card-item flex">
      <img className="w-28 h-28 rounded" src={image}/>
      <div className='flex flex-col justify-between ml-4'>
        <h4 className='text-xl'>Tu viaje a: {country}</h4>
        <h5>
          $ {price} 
        </h5>
      </div>
      <div className="btn-group btn-group-vertical gap-2">
        <button className="btn btn-sm  dark:bg-third-night-color dark:text-seventh-night-color" onClick={() => deleteFromCart(id)}>Eliminar Uno</button>
        <button className="btn btn-sm  dark:bg-third-night-color dark:text-seventh-night-color" onClick={() => deleteFromCart(id, true)}>Eliminar Todos</button>
      </div>
    </div>
  );
};
export default CartItem;
