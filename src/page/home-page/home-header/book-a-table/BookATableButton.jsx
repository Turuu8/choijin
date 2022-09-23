import { Button } from "@mui/material"
import Tooltip from '@mui/material/Tooltip';

export const BookATableButton = () => {
    return (
        <Tooltip title="Book a table">
            <Button href="/bookatable" sx={{
                fontWeight: "bold",
                backgroundColor: "primary.main",
                color: '#ffffff',
                width: "200px",
                position: 'absolute',
                right: '5%',
                transition: "0.5s",
                ":hover": {
                    backgroundColor: "white",
                    color: 'primary.main'
                }
            }}>
                ШИРЭЭ ЗАХИАЛАХ
            </Button>
        </Tooltip>
    )
}