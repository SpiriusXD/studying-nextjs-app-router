//     The object is :
//     {
//         id: generateId(),
//             address: "Ezel 1 Petach Tikva",
//         rooms: 2,
//         floor: 1,
//         type: "OLD",
//         isCommercial: false,
//         price: 2600
//     }


import {generateId} from "@/app/global-services/utils";
import {Box} from "@mui/material";

const mockData = [

    {
        id: generateId(),
        address: "HA'Ary 5",
        rooms: 5,
        floor: 1,
        type: "OLD",
        isCommercial: false,
        price: 2600
    },
    {
        id: generateId(),
        address: "Shalom Alechem",
        rooms: 2.5,
        floor: 1,
        type: "Villa",
        isCommercial: false,
        price: 3400
    },
    {
        id: generateId(),
        address: "Jerusalem 40",
        rooms: 12.5,
        floor: 1,
        type: "Complex",
        isCommercial: false,
        price: 8500
    },
    {
        id: generateId(),
        address: "Tel Giborim",
        rooms: 10,
        floor: 2,
        type: "Tower",
        isCommercial: true,
        price: 3500
    }

]
const ApartmentClient = () => {


    return(
        <>
            <Box component={"div"}>

                <h3>Apartment inner CRUD example</h3>
                <p>We use only inner state without passing data as props. </p>
                <p>I use here very simple component, just for quick example. </p>
                <p>We can do it with advanced component like card or table.</p>

                <h3>All Apartments: </h3>

                {/*{
        id: generateId(),
        address: "HA'Ary 5",
        rooms: 5,
        floor: 1,
        type: "OLD",
        isCommercial: false,
        price: 2600
    },*/}
                {mockData.map(item=>{

                    return <p key = {item.id}>
                        ID = {item.id} | {item.address}, {item.rooms} rooms, floor {item.floor},
                        type is {item.type}, <b>{item.isCommercial? "Allowed for Commercial use" :
                        "Only for private use"}</b>,
                        &nbsp;
                        {item.price}$

                    </p>

                })}

            </Box>

        </>
    )

}

export default ApartmentClient;