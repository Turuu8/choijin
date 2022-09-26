import { IconButton, Typography } from "@mui/material"
import { Box  } from "@mui/system"
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
export const HomeFooter = () => {
    const style = {
        footer: {
            background: 'linear-gradient(black ,black , black, transparent 100%  )',
             widht: '100%', display: 'flex', alignItems: "flex-end", flexDirection: 'column', justifyContent: "end",
            color: "primary.light"
        }
    }
    return (
        <>
            <Box id="footer" component='div' sx={style.footer}>
                <Box height='300px' width='100%' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    {/* <Box component='img' height='30%' marginRight={20} src={Logo}>
                    </Box> */}
                    <Box display='flex' flexDirection='column' width='250px' height='40%' sx={{ margin: 4, fontSize: 25, color: '#fff' ,}} >
                        Байршил:
                        <Typography p={1} sx={{ color: 'white', fontSize: 16 }} >
                            Гэрлэх ёслолын ордны хойно, Хувьсгалт намын байрны зүүн талд Центрум төвийн (цэнхэр шилэн) 1 давхарт.
                        </Typography>
                    </Box>
                    <Box component='div' height='30%' width='1px' sx={{backgroundColor: 'gray'}} >
                    </Box>
                    <Box display='flex' flexDirection='column' width='300px' height='40%' sx={{ margin: 4, fontSize: 25, color: '#fff' }} >
                        Холбоо барих:
                        <Typography p={1} sx={{ color: 'white', fontSize: 16 }} >
                            77034499, 80334499
                        </Typography>
                        <Typography p={1} sx={{ color: 'white', fontSize: 16 }} >
                            Email Хаяг : choijintemple@gamil,com
                        </Typography>
                    </Box>
                    <Box component='div' height='30%' width='1px' sx={{backgroundColor: 'gray'}} >
                    </Box>
                    <Box display='flex' flexDirection='column' width='250px' height='40%' sx={{ margin: 4, fontSize: 25, color: '#fff',  }} >
                            Social:
                            <Box>
                                <IconButton href="https://www.facebook.com/choijintemple/" sx={{ color: '#fff' }} >
                                    <FacebookIcon sx={{ fontSize: 35 }} />
                                </IconButton>
                                <IconButton sx={{ color: '#fff' }} >
                                    <EmailIcon sx={{ fontSize: 35 }} />
                                </IconButton>
                            </Box>
                        </Box>
                </Box>
                {/* <Box height='100px' width='100%' display='flex' justifyContent='space-between' alignItems='center' sx={{ borderTop: '0.2px solid grey'  }} >
                    <Box>

                    </Box>
                    <Typography sx={{marginRight:'2%'}}>
                    © Copyright Flesh & Buns 2022
                    |
                    Privacy Policy
                    </Typography>
                </Box> */}
            </Box>
        </>
    )
}