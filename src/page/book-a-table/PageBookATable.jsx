import {
  Button,
  Divider,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import DarkLogo from "../../images/Logo.svg";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/Firebase";
import { collection , addDoc } from "firebase/firestore";

export const PageBookATable = () => {
  const navigate = useNavigate();
  const [clickTable, setclickTable] = useState(false);
  const [peopleNumber, setPeopleNumber] = useState();
  const [manyPeople, setManyPeople] = useState();
  const [open, setOpen] = useState(true);
  const [orderCheck, setOrderCheck] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [ table , setTable] = useState('')
  const usersCollection = collection(db, "users")
  const TookNumberPeople = () => {
    setOpen(!open);
    setManyPeople(peopleNumber);
  };
  const PeopleNumberCheck = () => {
    !peopleNumber
      ? alert("Та хүний тоогоо оруулнуу")
      : peopleNumber >= 12
      ? alert("Хүний тоо хэтэрсэн байна")
      : TookNumberPeople();
  };
  const TableOrder = (e) => {
    manyPeople < 5
      ? e.numberOfPeopleSitting === 6
        ? alert("Боломжгүй ширээ")
        : e.numberOfPeopleSitting >= manyPeople
        ? setclickTable(!clickTable)
        : alert("nono")
      : e.numberOfPeopleSitting >= manyPeople
      ? setclickTable(!clickTable)
      : alert("no");
      setTable(e)
  };
  const Check = () => {
    name === ""
      ? alert("Та нэрээ оруулнуу")
      : phone.length === 8
      ? setOrderCheck(!orderCheck)
      : alert("Та дугаараа оруулнуу");
  };
  const OrderTable = async() => { 
    await (usersCollection , { 
      peopleNumber : {manyPeople},
      name: {name},
      phone: {phone},
      table: {table},
     }).then(setOrderCheck(!orderCheck))
  }
  return (
    <>
      <Box p={4} sx={style.howManyPeople}>
        <Box sx={style.backgroundImage}></Box>
        {/*  <<<<<<<<< people number >>>>>>>>> */}
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
            <Button onClick={() => PeopleNumberCheck()}>Үргэжлүүлэх</Button>
            <Button onClick={() => navigate("/")}>Буцах</Button>
          </Box>
        </Backdrop>
        {/* <<<<<< Table positiob >>>>>>>> */}
        <Box p={2} width="1200px" height="900px" sx={style.tableposition}>
          {!open &&
            Table.map((e, i) => {
              return (
                <Button
                  key={i}
                  variant={
                    manyPeople < 5
                      ? e.numberOfPeopleSitting === 6
                        ? "outlined"
                        : e.numberOfPeopleSitting >= manyPeople
                        ? "contained"
                        : "outlined"
                      : e.numberOfPeopleSitting === 6
                      ? "contained"
                      : "outlined"
                  }
                  sx={{
                    color: "primary.light",
                    width: "100%",
                    height: "100%",
                    border:
                      manyPeople < 5
                        ? e.numberOfPeopleSitting === 6
                          ? ""
                          : e.numberOfPeopleSitting >= manyPeople
                          ? "1px solid white"
                          : ""
                        : e.numberOfPeopleSitting === 6
                        ? "1px solid white"
                        : "",
                  }}
                  onClick={() => TableOrder(e)}
                >
                  <Typography variant="h6" textAlign="center">
                    {e.tableNumber}
                  </Typography>
                  <Divider />
                  {/* <Typography variant="span" >{e.numberOfPeopleSitting} hunii sheere</Typography> */}
                </Button>
              );
            })}
          <div style={{ gridArea: "3 / 1 / 4 / 5" }}></div>
          <div style={{ gridArea: "2 / 2 / 3 / 3" }}></div>
        </Box>
        <Backdrop open={clickTable}>
          <Box display="flex" p={1.5} sx={style.peopleNumberInputSection}>
            <Typography variant="h5" textAlign="center">
              Hэр утасны дугаар аа үлдээн үү
            </Typography>
            <TextField
              type="text"
              label="Нэр"
              onChange={(e) => setName(e.target.value)}
            ></TextField>
            <TextField
              type="number"
              label="Утасны дугаар"
              onChange={(e) => setPhone(e.target.value)}
            ></TextField>
            <Button type="submit" onClick={() => Check()}>
              Баталгаажуулах
            </Button>
            <Button onClick={() => setclickTable(!clickTable)}>Буцах</Button>
          </Box>
        </Backdrop>
        <Backdrop open={orderCheck}>
          <List sx={style.orderList}>
            <Typography variant="h4" textAlign="center">
              Нэр:  <Typography variant="span">{name}</Typography>
            </Typography>
            <Typography variant="h4" textAlign="center">
              Утас:  <Typography variant="span">{phone}</Typography>
            </Typography>
            <Typography variant="h4" textAlign="center">
              Хүний тоо:  <Typography variant="span">{manyPeople}</Typography>
            </Typography>
            <Button variant="contained" onClick={() => OrderTable()} >Ширээ захиалах</Button>
          </List>
        </Backdrop>
      </Box>
    </>
  );
};

const Table = [
  { tableNumber: "T1", numberOfPeopleSitting: 4 },
  { tableNumber: "T2", numberOfPeopleSitting: 4 },
  { tableNumber: "T3", numberOfPeopleSitting: 4 },
  { tableNumber: "T4", numberOfPeopleSitting: 4 },
  { tableNumber: "T5", numberOfPeopleSitting: 4 },
  { tableNumber: "T6", numberOfPeopleSitting: 4 },
  { tableNumber: "Өвгөн", numberOfPeopleSitting: 6 },
  { tableNumber: "T7", numberOfPeopleSitting: 4 },
  { tableNumber: "T8", numberOfPeopleSitting: 4 },
  { tableNumber: "T9", numberOfPeopleSitting: 4 },
  { tableNumber: "Цонх", numberOfPeopleSitting: 4 },
  { tableNumber: "Жан", numberOfPeopleSitting: 4 },
  { tableNumber: "Жан булан", numberOfPeopleSitting: 4 },
];

const style = {
  howManyPeople: {
    width: "100%",
    height: "100vh",
    backgroundColor: "primary.second",
    display: "flex",
    justifyContent: "center",
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
    opacity: "0.3",
    background: `url(${DarkLogo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "40%",
  },
  peopleNumberInputSection: {
    width: "400px",
    height: "270px",
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
  tableposition: {
    display: "grid",
    gridTemplateColumns: "repeat( 6 , 1fr )",
    gridGap: "5%",
  },
  orderList: {
    height: "400px",
    backgroundColor: "primary.light",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2%",
    backgroundColor: "primary.light",
    boxShadow: "5px 5px 10px grey",
    ":hover": {
      boxShadow: "10px 10px 20px grey",
    },
  },
};
