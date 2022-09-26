import { Button } from "@mui/material"
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
import { useLoginAndDataContext } from "../../../../context/LoginAndData";

export const BookATableButton = () => {
    const { userCheck} = useLoginAndDataContext();
    const navigate = useNavigate()
    const Check = () => {
        if(userCheck === true){
            navigate("/bookatable")
        }
        else {
            alert("Ширээ захиалхийн өмнө та нэвтрэх хэрэгтэй");
            navigate("/login")
        }
    }
    return (
        <Tooltip title="Book a table">
            <Button
            onClick={() => Check()}
             sx={{
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