import { Box } from "@mui/material"
import DarkLogo from '../../../../images/DarkLogo.png'

export const MainLogo = () => {
    return (
        <>
            <Box
                component="img"
                sx={{
                    position: 'absolute',
                    right: '0',
                    left: '0',
                    margin: 'auto',
                    height: '100%',
                }}
                src={DarkLogo}
            >
            </Box>
        </>
    )
}