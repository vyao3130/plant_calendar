'use client'

import {useState} from "react";
import "react-datepicker/dist/react-datepicker.css"; 
import Calendar from "./(calendar)/Calendar";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarPage = () => {
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [springFrost, setSpringFrost] = useState(new Date());
  const [fallFrost, setFallFrost] = useState(new Date());
  
  return(
    <div className="mt-16 flex flex-col items-center">
      <h1 className="text-5xl">🌱 Plant Calendar 🌱</h1>
      <p> {"Never forget when you're supposed to start planting!"}</p>
      <Calendar value={currentDate} onChange={setCurrentDate} springFDate={springFrost} fallFDate={fallFrost}/>
      <div className="w-[70vw] grid grid-cols-7 items-center justify-center text-center">
        <div className="col-span-2 items-center">
          <DatePicker className="text-2xl col-span-3 items-center" selected={springFrost} onChange={(date) => setSpringFrost(date)}/>
        </div>
        <div className="col-span-3"></div>
        <div className="col-span-2">
          <DatePicker className="text-2xl col-span-3 items-center" selected={fallFrost} onChange={(date1) => setFallFrost(date1)}/>
        </div>
      </div>
    </div>    
  )
};

export default CalendarPage;