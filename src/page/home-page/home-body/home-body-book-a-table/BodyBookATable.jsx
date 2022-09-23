import { Button, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const BookATable = () => {
    const style = {
        order: {
            backgroundColor: 'primary.second',
            // background: "linear-gradient(transparent  0% , black 1% )",
            width: '100%',
            height: '50vh',
        }
    }
    return (
        <Box component='div' id='order' display='flex' alignItems='center' justifyContent='center' sx={style.order}>
            <Box width='50%' height='70%' sx={{ position: 'relative' ,backgroundColor: 'white' }}>
                <Typography variant="h2" height='20%' fontWeight='bold' marginTop={2} textAlign='center' sx={{ borderBottom: '5px solid ', zIndex: '10', color: 'black' , }} >
                    Book A Table
                </Typography>
                <Box width='100%' height='78%' display='flex' justifyContent='center' alignItems='center' >
                    <TextField type='date' sx={{ color: 'white', borderColor: 'white', marginRight: '2%',  zIndex: '10' }} >
                    </TextField>
                    <TextField type='time' sx={{ marginRight: '2%',  zIndex: '10' }} >
                    </TextField>
                    <Button variant='contained' >Захиалах</Button>
                </Box>
                {/* <Box component='img' width='100%' height='100%' sx={{ position: 'absolute', top: '0', zIndex: '0' , opacity: '0.5' }} src='https://cdn.pixabay.com/photo/2020/03/21/18/13/chili-4954849_1280.jpg'></Box> */}
            </Box>
        </Box>
    )
}