import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import DarkLogo from '../../images/Logo.svg'

export const PageBookATable = () => {
    const [clickTable, setclickTable] = useState(false);
    const [peopleNumber, setPeopleNumber] = useState();
    const [manyPeople, setManyPeople] = useState();
    const [open, setOpen] = useState(true);
    const TookNumberPeople = () => {
        setOpen(!open);
        setManyPeople(peopleNumber);
    };
    const PeopleNumberCheck = () => {
        !peopleNumber
            ? alert("Та хүний тоогоо оруулнуу")
            : peopleNumber >= 7
                ? alert("Хүний тоо хэтэрсэн байна")
                : TookNumberPeople();
    };
    const TableOrder = (e) => {
        e.numberOfPeopleSitting >= manyPeople ? setclickTable(!clickTable) : alert("no")
        // setclickTable(!clickTable);
    };
    return (
        <>
            <Box p={4} sx={style.howManyPeople} >
                <Box sx={style.backgroundImage} ></Box>
                <Backdrop
                    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <Box display="flex" p={2} sx={style.peopleNumberInputSection}>
                        <Typography marginBottom="5%" textAlign="center" variant="h5">
                            Та хүний тоогоо оруулнуу уу?
                        </Typography>
                        <TextField
                            onChange={(e) => setPeopleNumber(e.target.value)}
                            type="number"
                        ></TextField>
                        <Button onClick={() => PeopleNumberCheck()}>Болсон</Button>
                    </Box>
                </Backdrop>
                <Box width='70%' height='70%' >

                </Box>
                <Grid container p={10} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} width='100%'>
                    {Table.map((e, i) => {
                        return (
                            <Button
                                key={i}
                                variant="outlined"
                                sx={{ color: "primary.light", width: "200px", height: '100px' }}
                                onClick={() => TableOrder(e)}
                            >
                                {e.tableNumber}
                                <Typography>{e.numberOfPeopleSitting} hunii sheere</Typography>
                            </Button>
                        );
                    })}
                </Grid>
                <Backdrop
                    open={clickTable}
                    sx={{ backgroundColor: "red" }}
                    onClick={() => setclickTable(!clickTable)}
                ></Backdrop>
            </Box>
        </>
    );
};

const Table = [
    { tableNumber: "T1", numberOfPeopleSitting: 6 },
    { tableNumber: "T2", numberOfPeopleSitting: 6 },
    { tableNumber: "T3", numberOfPeopleSitting: 6 },
    { tableNumber: "T4", numberOfPeopleSitting: 6 },
    { tableNumber: "T5", numberOfPeopleSitting: 6 },
    { tableNumber: "T6", numberOfPeopleSitting: 6 },
    { tableNumber: "T7", numberOfPeopleSitting: 4 },
    { tableNumber: "T8", numberOfPeopleSitting: 4 },
    { tableNumber: "T9", numberOfPeopleSitting: 4 },
];

const style = {
    howManyPeople: {
        width: "100%",
        height: "100vh",
        backgroundColor: 'primary.second',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        opacity: '0.3',
        background: `url(${DarkLogo})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "40%",
    },
    peopleNumberInputSection: {
        width: "400px",
        height: "200px",
        backgroundColor: "primary.light",
        boxShadow: "5px 5px 10px grey",
        ":hover": {
            boxShadow: "10px 10px 20px grey",
        },
        color: "primary.second",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },
};
