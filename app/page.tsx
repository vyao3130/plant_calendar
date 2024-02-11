import PlantList from "./(plants)/PlantList";
import CalendarPage from "./CalendarPage";
import Image from 'next/image';

export default function homePage() {
    return(
        <div>
            <CalendarPage/>
            <p>plants</p>
            <PlantList/>
        
        </div>
    )
};