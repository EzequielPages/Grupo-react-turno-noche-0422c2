import React, {useState} from 'react'
import {DatePicker} from "@material-ui/pickers";

const Home = () => {
  const [selectedFirstDate, setSelectedFirstDate] = useState(new Date())
  const [selectedSecondDate2, setSelectedSecondDate2] = useState(new Date())

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://source.unsplash.com/1920x1080/?'travel')` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-center text-neutral-content justify-items-center">
        <div className="max-w-2xl lg:gap-2">
          <h1 className="mb-5 text-5xl font-bold text-second-color dark:text-second-night-color">¿A DONDE QUIERES VIAJAR?</h1>
          <p className="mb-5">
            En TravelN te ayudaremos a encontrar los mejores paquetes para que disfrutes tus proximas vacaciones!
          </p>
          <div className='grid grid-cols-4 gap-16 md:gap-4 auto-cols-min'>
            <DatePicker disableToolbar disablePast label="DESDE" okLabel cancelLabel autoOk  className='bg-seventh-color' value={selectedFirstDate} onChange={setSelectedFirstDate} />
            <DatePicker disableToolbar disablePast label="HASTA" okLabel cancelLabel autoOk  className='bg-seventh-color' value={selectedSecondDate2} onChange={setSelectedSecondDate2} />
            <select className="select select-accent w-full max-w-xs  text-fourth-color dark:text-second-night-color">
              <option disabled selected>ELEGIR DESTINO</option>
              <option>MADRID</option>
              <option>LONDRES</option>
              <option>QATAR</option>
              <option>ITALIA</option>
              <option>MIAMI</option>
            </select>
            <button className="btn btn-primary bg-seventh-color text-fourth-color dark:bg-third-night-color dark:text-seventh-night-color">Buscar Vuelos</button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Home