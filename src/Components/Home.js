import React from 'react'

const Home = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://source.unsplash.com/1920x1080/?'travel')` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-second-color dark:text-second-night-color">¿A DONDE QUIERES VIAJAR?</h1>
          <p className="mb-5">
            En TravelN te ayudaremos a encontrar los mejores paquetes para que disfrutes tus proximas vacaciones!
          </p>
          <button className="btn btn-primary bg-seventh-color text-fourth-color dark:bg-third-night-color dark:text-seventh-night-color">Buscar Vuelos</button>
        </div>
      </div>
    </div>
  );
}

export default Home