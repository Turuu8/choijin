import { Box, Drawer, Typography } from "@mui/material"
import { useMenuBarContext } from "../../../../../context/MenuBarContext";
import { LeftMenuButtons } from "./left-buttons/LeftMenuButtons";


export const LeftMenu = () => {

    const { isDrawerOpen, setIsDrawerOpen } = useMenuBarContext()

    return (
        <>
            <Drawer anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <Box p={2} width='500px' height='100%' sx={{
                    backgroundColor: 'primary.second',
                    color: "primary.light",
                    borderRight: "0.2px solid grey",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'

                }} textAlign='center' role='presentation'>
                    <Typography variant="h6" component='div'
                    >
                        MENU
                        <Box sx={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
                            {/* ------- left menubar items  ------- */}
                            <LeftMenuButtons />
                            {/* ------- left menubar items  ------- */}
                        </Box>
                    </Typography>
                    {/* ----------------------------------------- */}
                </Box>
            </Drawer>
        </>
    )
}