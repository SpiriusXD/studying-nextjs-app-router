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
'use client'

import {generateId} from "@/app/global-services/utils";
import {Box, TextField} from "@mui/material";
import {useEffect, useState} from "react";

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

    //PROPERTIES
    const [apartments, setApartments] = useState([]);//empty on default - for preventing crushes

    const [newApartment, setNewApartment] = useState({
        id: null,
        address: "",
        rooms: 0,
        floor: 0,
        type: "",
        isCommercial: false,
        price: 0
    });
    //FUNCTIONS

    const handleNewApartmentChanges = (ev) => {
        const {name, value} = ev.target;
        if(name !== "isCommercial"){
            setNewApartment(previousState=>{
                return {
                    ...previousState,//we copying all the object
                    [name]: value//changing only the specific property
                }
            })
        }else{//handling checkbox
            setNewApartment(previousState=>{
                return {
                    ...previousState,//we copying all the object
                    [name]: ev.target.checked//changing only the specific property
                }
            })
        }
    }

    //EFFECTS
    useEffect(() => {

        setApartments(mockData);

    }, []);
    return (
        <>
            <Box component={"div"}>

                <h3>Apartment inner CRUD example</h3>
                <p>We use only inner state without passing data as props. </p>
                <p>I use here very simple component, just for quick example. </p>
                <p>We can do it with advanced component like card or table.</p>

                <h3>All Apartments: </h3>


                {mockData.map(item => {

                    return <p key={item.id}>
                        ID = {item.id} | {item.address}, {item.rooms} rooms, floor {item.floor},
                        type is {item.type}, <b>{item.isCommercial ? "Allowed for Commercial use" :
                        "Only for private use"}</b>,
                        &nbsp;
                        {item.price}$

                    </p>

                })}
                {/*{
        id: generateId(),
        address: "HA'Ary 5",
        rooms: 5,
        floor: 1,
        type: "OLD",
        isCommercial: false,
        price: 2600
    },*/}
                <h2>Add Apartments</h2>
                <Box>

                    {/*The input of mui*/}
                    <TextField
                        variant={"outlined"}
                        label={"Address"}
                        value={newApartment.address}
                        name="address"
                        onChange={handleNewApartmentChanges}

                    >


                    </TextField>


                </Box>

            </Box>

        </>
    )

}

export default ApartmentClient;