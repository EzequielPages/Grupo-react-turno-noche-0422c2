import React, { useState, useEffect } from 'react';

function CountdownTimer(){
    const [expiryTime, setExpiryTime] = useState("30 oct 2022 00:00:25");
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
        <div className="grid grid-flow-col gap-2 text-center auto-cols-max pt-4">
       {expiryTime!==false?
       <>
        <div className="flex flex-col p-2 bg-third-color rounded-box text-second-color w-12 h-14">
          <span className="countdown font-mono text-5xl size-grid pl-1">{countdownTime.countdownDays}</span>
          Días
        </div> 
        <div className="flex flex-col p-2 bg-third-color rounded-box text-second-color w-12 h-14">
          <span className="countdown font-mono text-5xl size-grid pl-1">{countdownTime.countdownHours}</span>
          Hs.
        </div> 
        <div className="flex flex-col p-2 bg-third-color rounded-box text-second-color w-12 h-14">
          <span className="countdown font-mono text-5xl size-grid pl-1">{countdownTime.countdownMinutes}</span>
          Min.
        </div> 
        <div className="flex flex-col p-2 bg-third-color rounded-box text-second-color w-12 h-14">
          <span className="countdown font-mono text-5xl size-grid pl-1">{countdownTime.countdownSeconds}</span>
          Seg.
        </div>
        </>
          :<p>Deal has been Expired</p>}
        </div>
     )
 }
 export default CountdownTimer;