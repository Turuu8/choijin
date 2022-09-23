import { Typography } from "@mui/material"
import { Box } from "@mui/system"

export const Service = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' sx={style.service} >
            <Box width="70%" p={2} display='flex' alignItems='center' height='60%' sx={{ backgroundColor: 'primary.second', }}>
                <Typography fontSize={25} color='primary.light' >
                    Манайхаас Авах Үйлчилгээ:
                </Typography>
            </Box>
        </Box>
    )
}
const style = {
    service: {
        width: '100%',
        height: '40vh',
        background: "linear-gradient(black ,black )",
    }
}