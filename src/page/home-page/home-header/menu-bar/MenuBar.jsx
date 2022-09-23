import { Box, IconButton } from "@mui/material"
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import { useMenuBarContext } from "../../../../context/MenuBarContext";
import { LeftMenu } from "./left-menu/LeftMenu";

export const MenuBar = () => {

    const { setIsDrawerOpen } = useMenuBarContext()

    return (
        <>
            <Tooltip title="Menu" >
                <Box sx={{ position: 'sticky', left: '0', bottom: '0',width:'100px' , height:'100px' }} >

                    <IconButton sx={{
                        position: 'absolute',
                        left: '5%',
                        color: 'primary.light',
                        fontSize: '1em',
                        transition: "0.5s",
                        ":hover": {
                            color: 'primary.main'
                        }
                    }}
                        size="large"
                        edge='start'
                        aria-label="logo"
                        onClick={() => setIsDrawerOpen(true)}>

                        <MenuIcon /> MENU

                    </IconButton>
                </Box>
            </Tooltip>

            {/* ______________left menubar______________ */}
            {/* <LeftMenu /> */}
            {/* ______________left menubar______________ */}
        </>
    )
}