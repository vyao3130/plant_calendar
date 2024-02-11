import Image from "next/image";
async function getPlants(){
    const res = await fetch('http://127.0.0.1:8090/api/collections/plants/records?page1&perPage=30',
        {cache: 'no-store'}
    );
    
    const data = await res.json();

    return data?.items as any[];
}

export default async function PlantList() {
    const plants = await getPlants();
    console.log(plants);
    return(
        <div className="mt-16 flex items-center flex-col">
            <h1>Plants List</h1>
            <div className="grid items-center mt-16 flex flex-col grid-cols-3">
                {plants?.map((plant) => {
                    return <Plant key={plant.id} plant={plant}/>;
                })}
            </div>
        </div>
    )
}

function Plant({plant}: any) {
    const{plant_name, id,created, plant_image, collectionId} = plant || {};
    return(
        <div className="">
            <h2>{plant_name}</h2>
            <h2>{created}</h2>
            <Image
                src={`http://127.0.0.1:8090/api/files/${collectionId}/${id}/${plant_image}`}
                width={100}
                height={100}
                alt={`Image of ${plant}`}/>
        </div>
    )
}

