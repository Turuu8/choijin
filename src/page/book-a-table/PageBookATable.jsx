import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";

export const PageBookATable = () => {
  const [clickTable, setclickTable] = useState(false);
  const [ peopleNumber , setPeopleNumber] = useState();
  const [open, setOpen] = useState(true);

  const TookNumberPeople = () => {
    setOpen(!open);
    setPeopleNumber(peopleNumber)
  };
  const PeopleNumberCheck = () => {
    !peopleNumber ? alert('Та хүний тоогоо оруулнуу') : peopleNumber >= 13 ? alert('Хүний тоо хэтэрсэн байна') : TookNumberPeople();
    console.log(peopleNumber);
  };
  const TableOrder = () => { 
    setclickTable(!clickTable)
  }
  return (
    <>
      <Box  sx={style.howManyPeople} >
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
            <Box display='flex' p={2} sx={style.peopleNumberInputSection} >
                <Typography marginBottom='5%' textAlign='center' variant="h5" >Та хүний тоогоо оруулнуу уу?</Typography>
                <TextField onChange={(e) => setPeopleNumber(e.target.value)} type='number' ></TextField>
                <Button onClick={() => PeopleNumberCheck()}>Болсон</Button>
            </Box>
        </Backdrop>
        {Table.map((e, i) => {
          return (
            <Box key={i}>
              <Button
                variant="outlined"
                sx={{ color: "primary.light", width: "200px" }}
                onClick={() => TableOrder(e)}
              >
                {e.tableNumber}
                {Table.filter(e)}
              </Button>
            </Box>
          );
        })}
        <Backdrop
        open={clickTable}
        sx={{backgroundColor: 'red'}}
        onClick={() => setclickTable(!clickTable)}
        >

        </Backdrop>
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
    backgroundColor: 'primary.second',
    flexDirection: 'column',
    justifyContent: 'center' , alignItems: 'center',
    width: "100%",
    height: '100vh'
  },
  peopleNumberInputSection: {
    width: '30%',
    height: '30%',
    backgroundColor: 'primary.light',
    boxShadow: "5px 5px 10px grey",
          ":hover": {
            boxShadow: "10px 10px 20px grey",
          },
    color: "primary.second",
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-around' , alignItems: 'center',
  }
};
