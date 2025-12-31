// import {Geist, Geist_Mono} from "next/font/google";
'use client'
import "./globals.css";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v16-appRouter';
import GlobalTheme from "@/app/global-theme";
import {AppBar, Box, Button, Container, IconButton, ThemeProvider, Toolbar, Typography, Menu} from "@mui/material";
import {Roboto} from "next/font/google";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link'

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});


export default function RootLayout({children}) {
    return (
        <html lang="en" className={roboto.className}>
        <body>
        <AppRouterCacheProvider>
            <ThemeProvider theme={GlobalTheme}>
                <p>Here can come the layout of all website... <b>This will be shown in all pages of the app.</b></p>
                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static">

                        <Container maxWidth="xl">

                            <Toolbar disableGutters>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{mr: 2}}
                                    component = {Link}
                                    href ="/"
                                >
                                    <HomeIcon/>
                                </IconButton>


                                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}

                                >


                                    <Button sx={{my: 2, color: 'white', display: 'block'}}
                                            component={Link}
                                            href="/pages/docs"
                                    >
                                        Docs


                                    </Button>
                                    <Button sx={{my: 2, color: 'white', display: 'block'}}
                                            component={Link}
                                            href="/pages/memory-game">
                                        Memory Game

                                    </Button>

                                    <Button sx={{my: 2, color: 'white', display: 'block'}}
                                            component={Link}
                                            href="/pages/draft">
                                        Draft
                                    </Button>


                                    {/*{pages.map((page) => (*/}
                                    {/*    <Button*/}
                                    {/*        key={page}*/}
                                    {/*        onClick={handleCloseNavMenu}*/}
                                    {/*        sx={{ my: 2, color: 'white', display: 'block' }}*/}
                                    {/*    >*/}
                                    {/*        {page}*/}
                                    {/*    </Button>*/}
                                    {/*))}*/}
                                </Box>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    News
                                </Typography>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </Box>


                {children}

                <p>Here will come the footer of the whole app. </p>

            </ThemeProvider>

        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
