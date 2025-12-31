import {Box} from "@mui/material";

const DocLayout = ({children}) => {//pay attention to import the children

    return (
        <>
            <Box component={"div"}>
                <Box component = "p" color = {"info.main"}>
                    This is the layout of the docs. <b>It will be shown in and under the docs only.. </b>


                </Box>
                {/*    Don't forget to add the children*/}

                {children}

            </Box>

        </>
    )
}

export default DocLayout;