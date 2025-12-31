'use client'
import {useState} from "react";
import {Box} from "@mui/material";
import Link from "next/link"

const Page = () => {


    const [myState, setMyState] = useState("heelo");
    return (
        <>
            <Box component={"div"} p={"40px"}>


                <h2>Here is some examples of how to create and manage the pages in next </h2>

                <h3>Basics</h3>
                <p>In Next App Router - everything is working by the folder structure.</p>
                <Box>For running a page - you need to create it and put it under the specific folder,
                    under app. this will be the structure of the path.
                    For creating a page create page.js file (U MUST follow this name), and put the react
                    component you want.
                    Than route to http://localhost:3000/the_folder_name
                    and you should see the page.

                </Box>
                <Box color="info.main" component={"p"}>
                    For example this page reside in the project under
                    app/docs/ui-understanding/page.js
                    and the URL is :

                    <a href={"http://localhost:3000/pages/docs/ui-understanding"}
                       target={"blank"}>http://localhost:3000/pages/docs/ui-understanding</a>
                </Box>

                <Box color={"warning.main"} component={"p"}>
                    This is unlike create a web service which you put there route.js.
                    Pay attention that you need to pass <b>only one</b> of route.js OR page.js,
                    because if you create them both - next will confused which one to choose.
                </Box>

                <Box color={"warning.main"} component={"p"}>Pay attention that for using react useState and useEffect,
                    you need to add 'use client'
                    notation at the file head. See in this file if you remove it - how you get bugs... </Box>
                <p>State = {myState}</p>

                <Box component={"p"}>
                    The above can work with the nested you want you can do as you want.

                    <a href="http://localhost:3000/pages/docs/ui-understanding/a/b/c/z"
                       target={"_blank"}
                    >This is page ui-understand/a/b/c/z</a>


                </Box>
                <h3>Layout</h3>
                <Box component={"p"}>

                    Layout provide outer layout to the component and its children (what reside under it).
                    It's great for menus, and for the website or specific features frame.
                    <br/>
                    This is the same concept - you create where you want the "layout.js" file, and wrap with it the
                    children.

                    See the "layout.js" inside the docs - for understand it...


                </Box>

                <h3>Many Cool Stuff</h3>


                <Box component={"p"}>
                    In the doc page, you can find many cool and useful things about the structure issues.
                    For example - you have many sort of <a
                    href="https://nextjs.org/docs/app/getting-started/project-structure#routing-files">
                    files you can define.

                </a>.

                    <a href={"http://localhost:3000/pages/d2"} target={"_blank"}>This
                    </a>is some 404 unique that have created by the not-found.jsx.
                    (Seems that inside nexted, layout comes but not all).




                </Box>
                <Box component={"p"}>

                    Here you can see some <Link href={"ui-understanding/a"}>

                    missing page
                </Link> and there are a lot of other option.

                </Box>

                <h3>Recommended Working flow</h3>

                <Box component={"p"}>
                    Since Next is New Way to combine client of React And Server of node js,
                    at simple level and at the start I recommend to use the route pages mainly as entry point, sort of Lobby.
                    From there to pass the data to pure client component.
                    In this way you can use the robust options of the routing options from one side, and from the other side - you continue to work
                    with react classic way.

                    Remember that we cannot use this pages in "useState" and "useEffect" aren't available in server component.


                </Box>


            </Box>
        </>
    )
}

export default Page;