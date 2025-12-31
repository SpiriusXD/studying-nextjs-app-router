'use client'
import {Box} from "@mui/material";
import Link from "next/link";
import {usePathname} from "next/navigation";


export const CrudExample=()=> {

    const pathname = usePathname();
    return (
        <Box component={"div"} p={"40px"}>

            <h1>Crud Examples</h1>
            <p>Here we will see how to make CRUD flow in the app
                by the three classic ways: Inner Crud (mock of the client), Server Crud (will refersh on server reload),
                DB which saving the data properly.
                </p>
            <h2>CRUD </h2>
            <ol>
                <li><Link href={`${pathname}/inner`}>Demonstrate Simple inner CRUD with client fake data.</Link></li>
                <li><Link href={`${pathname}/server`}>Demonstrate  CRUD to the server - but without DB</Link></li>
                <li><Link href={`${pathname}/db`}>Demonstrate  CRUD to the server - With full DB support</Link></li>

            </ol>
            <h2>Another thoughts? </h2>
            <ol>
                <li>If you want to add somthing - write it here. </li>

            </ol>


        </Box>
    );
}
export default CrudExample;