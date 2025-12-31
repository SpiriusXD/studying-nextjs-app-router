'use client'
import {Box} from "@mui/material";
import Link from "next/link";
import {usePathname} from "next/navigation";


export default function Docs() {

    const pathname = usePathname();
    return (
        <Box component={"div"} p={"40px"}>

            <h1>DOCS Area</h1>
            <p>Here will come studying things</p>
            <h2>Learning material</h2>
            <ol>
                <li><Link href={`${pathname}/ui-understanding`}>Understanding UI and creating page.</Link></li>

            </ol>
            <h2>Things to understand in the future </h2>
            <ol>
                <li>Server Component - what why how</li>
                <li>Rest Service - what why how</li>
                <li>Next is not SPA bu hybrid- what why how</li>

            </ol>


        </Box>
    );
}
