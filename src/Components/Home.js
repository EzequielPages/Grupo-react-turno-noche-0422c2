import React, {useState} from 'react'
import {DatePicker} from "@material-ui/pickers";


const Home = () => {
  const [selectedFirstDate, setSelectedFirstDate] = useState(new Date())
  const [selectedSecondDate2, setSelectedSecondDate2] = useState(new Date())

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://source.unsplash.com/1920x1080/?'travel')` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-center text-neutral-content justify-items-center">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-second-color dark:text-second-night-color">¿A DONDE QUIERES VIAJAR?</h1>
          <p className="mb-5">
            En TravelN te ayudamos a encontrar los mejores paquetes para que disfrutes tus próximas vacaciones.
          </p>
          <div className='grid lg:grid-cols-4 md:grid-rows-4 sm:grid-rows-4 md:gap-3 gap-y-4 w-full px-5'>
            <DatePicker disableToolbar inputProps={{
          style: {
            textAlign: "center" 
            },
        }} disablePast label="." autoOk className=' bg-seventh-color rounded-md' value={selectedFirstDate} onChange={setSelectedFirstDate} />
            <DatePicker disableToolbar inputProps={{
          style: {
            textAlign: "center"
            },
        }} disablePast label="." autoOk className=' bg-seventh-color rounded-md' value={selectedSecondDate2} onChange={setSelectedSecondDate2} />
            <select className="select select-bordered text-center select-accent w-full ">
              <option disabled selected>ELEGIR DESTINO</option>
              <option>MADRID</option>
              <option>LONDRES</option>
              <option>QATAR</option>
              <option>ITALIA</option>
              <option>MIAMI</option>
            </select>
            <button className="btn btn-primary bg-seventh-color dark:bg-third-night-color dark:text-seventh-night-color">Buscar Vuelos</button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Home