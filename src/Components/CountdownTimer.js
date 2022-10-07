import React, { useState, useEffect } from 'react';

function CountdownTimer(){
    const [expiryTime, setExpiryTime] = useState("20 oct 2022 00:00:00");
    const [countdownTime, setCountdownTime]= useState(
        {
            countdownDays:'',
            countdownHours:'',
            countdownlMinutes:'',
            countdownSeconds:''
        }
    );
     const countdownTimer=()=>{
     
         const timeInterval= setInterval(() => {
           const countdownDateTime = new Date(expiryTime).getTime(); 
           const currentTime = new Date().getTime();
           const remainingDayTime = countdownDateTime - currentTime;
           const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
           const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
           const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
      
           const runningCountdownTime={
              countdownDays: totalDays,
              countdownHours: totalHours,
              countdownMinutes: totalMinutes,
              countdownSeconds: totalSeconds
           }
        
           setCountdownTime(runningCountdownTime);
      
           if (remainingDayTime < 0) {
              clearInterval(timeInterval);
              setExpiryTime(false);
             }
      
          }, 1000);
     }
      
     useEffect(() => {
         countdownTimer();
     });
    
     return(
        <div className="grid grid-flow-col gap-1 md:gap-4 text-center auto-cols-max pt-3 countdownStyle">
       {expiryTime!==false?
       <>
        <div className="flex-col flex-col p-1 py-2 bg-second-color rounded-box text-sixth-color w-12 h-15">
          <span className="countdown font-mono text-5x1 size-grid">{countdownTime.countdownDays}</span>
          Días
        </div> 
        <div className="flex-col flex-col p-1 py-2 bg-second-color rounded-box text-sixth-color w-12 h-15">
          <span className="countdown font-mono text-5xl size-grid">{countdownTime.countdownHours}</span>
          Hs.
        </div> 
        <div className="flex-col flex-col p-1 py-2 bg-second-color rounded-box text-sixth-color w-12 h-15">
          <span className="countdown font-mono text-5xl size-grid">{countdownTime.countdownMinutes}</span>
          Min.
        </div> 
        <div className="flex-col flex-col p-1 py-2 bg-second-color rounded-box text-sixth-color w-12 h-15">
          <span className="countdown font-mono text-5xl size-grid">{countdownTime.countdownSeconds}</span>
          Seg.
        </div>
        </>
          :<p className="font-bold">Proximamente nuevas ofertas!</p>}
        </div>
     )
 }
 export default CountdownTimer;