'use client'
import {useState} from "react";
import {Box} from "@mui/material";


const Page = () => {


    const [myState, setMyState]= useState("heelo");
    return (
        <>
            <Box component={"div"} p ={"40px"}>


               <h2>This is a nested page... </h2>



            </Box>
        </>
    )
}

export default Page;