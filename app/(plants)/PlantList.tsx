import Image from "next/image";
async function getPlants(){
    const res = await fetch('http://127.0.0.1:8090/api/collections/plants/records?page1&perPage=30');
    const data = await res.json();

    return data?.items as any[];
}

export default async function PlantList() {
    const plants = await getPlants();
    console.log(plants);
    return(
        <div>
            <h1>Plants List</h1>
            <div className="styles.grid">
                {plants?.map((plant) => {
                    return <Plant key={plant.id} plant={plant}/>;
                })}
            </div>
        </div>
    )
}

function Plant({plant}: any) {
    const{id,created, plant_image, collectionId} = plant || {};
    return(
        <div>
            <h2>{id}</h2>
            <h2>{created}</h2>
            {/* <Image
                // src={`http://127.0.0.1:8090/api/files/${collectionId}/${id}/${plant_image}`}
                width={100}
                height={100}
                alt={"AJFKJSDLF"}/> */}
        </div>
    )
}

