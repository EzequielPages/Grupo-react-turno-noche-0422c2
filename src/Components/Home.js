import React from 'react'

const Home = () => {
  return (
    <div className="hero min-h-screen fixed" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">¿A DONDE QUIERES VIAJAR?</h1>
          <p className="mb-5">
            En TravelN te ayudaremos a encontrar los mejores paquetes para que disfrutes tus proximas vacaciones!
          </p>
          <button className="btn btn-primary">Buscar Vuelos</button>
        </div>
      </div>
    </div>
  );
}

export default Home