import Image from "next/image";
import {Box} from "@mui/material";

export default function Draft() {

    const length = 9;
    const cardLength = 20;


    return (
        <>
            <h1>Here will come the Draft work</h1>

            <h2>Let's start make POC for memoroy-game</h2>

            <p>First, let's show Grid of cards: </p>

            <Box component={"div"}
                 sx={{
                     display: "grid",
                     gridTemplateColumns: "repeat(3, 1fr)",
                     gridTemplateRows: "repeat(3, 1fr)",
                     gap: "16px",
                     padding: 4

                 }}>

                {Array.from({length: length}).map((_, i) => (

                    <Box component={"div"} sx={{
                        width: cardLength, height: cardLength,
                        border: "1px solid black"
                    }}>


                    </Box>
                ))}
            </Box>


            </>


            );


            }
