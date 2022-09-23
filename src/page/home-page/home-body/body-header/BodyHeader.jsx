import { Box } from "@mui/system"
import Europe from '../../../../images/europe.svg'
export const BodyHeader = () => {
    const style = {
        bodyHeader: {
            width: '100%', height: '92vh',
            background: 'linear-gradient(black 100% , transparent 100% )',
            display: 'flex', justifyContent: 'space-around', alignItems: 'center',
            position: 'relative'
        },
        europe: {
            display: 'flex', alignItems: 'flex-end',
            height: '75%'
        },
        h1: {
            zIndex:'1',
            color: 'primary.light',
        } 
    }
    return (
        <Box sx={style.bodyHeader} >
            {/* <Box component='h1' sx={style.h1} >Mediterranean restaurant </Box> */}
            {/* <Box component='img' sx={style.europe} src={Europe}></Box> */}
            <Box component='img' sx={{position:'absolute' , top:"28vh" ,opacity:'0.3' ,zIndex: '0' , boxShadow: 'inset 0 0 20px 20px gold' , ":before": {boxShadow: 'inset 5em 1em gold' , contain: ''}}} width='90%' height='108%' src="https://images.unsplash.com/photo-1606791422814-b32c705e3e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80" ></Box>
            <Box width='90%' height='108%'sx={{position:'absolute' , top:"28vh" ,boxShadow: 'inset 0 0 100px 120px black'}}  ></Box>
        </Box>
    )
}