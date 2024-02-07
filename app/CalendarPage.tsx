'use client'

import {useState} from "react";
import Calendar from "./(calendar)/Calendar";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return(
    <div className="mt-16 flex flex-col items-center">
      <h1 className="text-5xl">🌱 Plant Calendar 🌱</h1>
      <p> Some content</p>
      <Calendar value={currentDate} onChange={setCurrentDate}/>
    </div>    
  )
};

export default CalendarPage;