import PlantList from "./(plants)/PlantList";
import CalendarPage from "./CalendarPage";
import Image from 'next/image';

export default function homePage() {
    return(
        <div>
            <CalendarPage/>
            <p>plants</p>
            <PlantList/>
            <Image
                src="http://127.0.0.1:8090/api/files/m04se658h3mbc79/585vcn3dn50b7rn/lavendar_qT7DyHMH6a.JPG"
                width={100}
                height={100}
                alt={"FDJSFDSl"}
              />
        
        </div>
    )
};