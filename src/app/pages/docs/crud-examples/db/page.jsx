import {Box} from "@mui/material";
import ApartmentClient from "@/app/pages/components/ApartmentClient";
import Apartment2Server from "@/app/pages/components/Apartment2Server";


export const Inner=()=> {

    return (
        <Box component={"div"} p={"40px"}>

            <h2>Connected To DB CRUD</h2>
            <p>

                This data is connected to server crud <br/>
                http://localhost:3000/api/apartment
            </p>
            <Apartment2Server/>
            <ol>
                {/*<li><Link href={`${pathname}/inner`}>Demonstrate Simple inner CRUD with client fake data.</Link></li>*/}
                {/*<li><Link href={`${pathname}/server`}>Demonstrate  CRUD to the server - but without DB</Link></li>*/}
                {/*<li><Link href={`${pathname}/db`}>Demonstrate  CRUD to the server - With full DB support</Link></li>*/}

            </ol>


        </Box>
    );
}
export default Inner;