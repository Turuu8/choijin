import { Button, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const PageBookATable = () => {
    const [onclickTable, setOnclickTable] = useState(false);
    const styles = {
        bookATable: {
            backgroundColor: "primary.light",
            color: 'primary.light'
        }
    }

    const Order = (i) => {
        setOnclickTable(!onclickTable)
    }

    const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
    return (
        <>
            <div>
                <Button onClick={handleToggle}>Show backdrop</Button>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <Box width='100px' height='100px' sx={{backgroundColor: 'primary.light'}} >

                    </Box>
                </Backdrop>
            </div>
            {/* <Button width="100%" height='100vh'  >

            </Button> */}
            {/* <Box width="100%" height='100vh' sx={styles.bookATable} >
                {Table.map((e, i) => {
                    return (
                        <Box key={i}>
                            <Button variant="outlined" sx={{ color: "primary.second", width: '200px' }}   onClick={() => Order(e)} >{e.tableNumber}</Button>
                            {onclickTable ? <TextField></TextField> : null}
                        </Box>
                    )
                })}
            </Box> */}
        </>
    )
}

const Table = [
    { tableNumber: 'T1', numberOfPeopleSitting: 6 },
    { tableNumber: 'T2', numberOfPeopleSitting: 6 },
    { tableNumber: 'T3', numberOfPeopleSitting: 6 },
    { tableNumber: 'T4', numberOfPeopleSitting: 6 },
    { tableNumber: 'T5', numberOfPeopleSitting: 6 },
    { tableNumber: 'T6', numberOfPeopleSitting: 6 },
    { tableNumber: 'T7', numberOfPeopleSitting: 4 },
    { tableNumber: 'T8', numberOfPeopleSitting: 4 },
    { tableNumber: 'T9', numberOfPeopleSitting: 4 },
]
