import IconButton from "@mui/material/IconButton";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useLoginAndDataContext } from "../../../../context/LoginAndData";
import ClearIcon from "@mui/icons-material/Clear";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { storage } from "../../../../firebase/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { db } from "../../../../firebase/Firebase";
import { collection, setDoc, doc } from "firebase/firestore";
import { FoodCart } from "./cart/Cart";

export const BodyBody = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");


  // const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "foods");

  const [addCart, setAddCart] = useState(false);

  const [upload, setUpload] = useState(null);
  const [uploadList, setUploadList] = useState([]);

  console.log(newAge , newName , uploadList)


  const { userCheck } = useLoginAndDataContext();

  const AddFood = () => {
    setAddCart(!addCart);
  };

  const SaveFirebase = async () => {
    if (upload === null) return;
    const imageRef = ref(storage, `images/${upload.name + v4()}`);
    uploadBytes(imageRef, upload).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        setUploadList((prev) => [...prev, url]);
      });
    });
    // await addDoc(usersCollectionRef , { name: newName, age: newAge });
    await setDoc(doc(usersCollectionRef, "SeaFood"), {
      name: "San Francisco", state: "CA", country: "USA",
      capital: false, population: 860000,
      regions: ["west_coast", "norcal"]
    });
    setAddCart(!addCart);

  };

  return (
    <Box component="div" id="menu" display="flex" p={3} sx={style.bodyBody}>
      <Box textAlign="center" sx={{marginBottom: "2%"}}>
        {!addCart && (
          <Box width="100%" height="100px" sx={style.foods}>
            <Button sx={{ fontSize: "25px", color: 'white' }} >Appetizers</Button>
            <Button sx={{ fontSize: "25px", color: 'white' }} >Soup</Button>
            <Button sx={{ fontSize: "25px", color: 'white' }} >Pasta and Risotto</Button>
            <Button sx={{ fontSize: "25px", color: 'white' }} >Mediterranean Grill</Button>
            <Button sx={{ fontSize: "25px", color: 'white' }} >Side Dish And Dessert</Button>
          </Box>
        )}
      </Box>
      {userCheck && (
        <IconButton aria-label="delete" onClick={() => AddFood()}>
          <AddIcon sx={style.add} />
        </IconButton>
      )}
      {/* <Box width='100%' height='100%' p={2} display='flex'>
        <FoodCart />
        <FoodCart />
        <FoodCart />
        <FoodCart />
        <FoodCart />
      </Box> */}
      <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{display:'flex' , justifyContent:'center'}}>
        <FoodCart />
        <FoodCart />
        <FoodCart />
        <FoodCart />
        <FoodCart />
        <FoodCart />
        <FoodCart />
        <FoodCart />
      </Grid>
      {addCart && (
        <Box width="50%" height="100%" p={2} sx={style.addFood}>
          <Box>
            <Box
              style={style.upImage}
              component="img"
              src={upload ? URL.createObjectURL(upload) : null}
            ></Box>
            <Button variant="contained" sx={style.upButton} component="label">
              <CloudUploadIcon
                sx={{
                  color: "primary.second",
                  fontSize: 45,
                  ":hover": { color: "primary.light" },
                }}
              />
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={(e) => setUpload(e.target.files[0])}
              />
            </Button>
          </Box>

          <TextField
            sx={style.upFoodName}
            onChange={(event) => {
              setNewName(event.target.value);
            }}
            label="Food Name..."
          ></TextField>
          <TextField
            sx={style.upfoodIngredients}
            onChange={(event) => {
              setNewAge(event.target.value);
            }}
            label="Хоолны орц English"
          ></TextField>
          {/* <TextField
            sx={style.upfoodIngredients}
            onChange={(event) => {}}
            label="Хоолны орц Mongolian"
          ></TextField> */}

          <IconButton
            onClick={() => setAddCart(!addCart)}
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              color: "primary.main",
            }}
          >
            <ClearIcon />
          </IconButton>
          <Button
            onClick={() => {
              SaveFirebase();
            }}
            sx={style.uploadsSave}
          >
            Save
          </Button>
        </Box>
      )}
    </Box>
  );
};

const style = {
  bodyBody: {
    width: "100%",
    // height: "100vh",
    // background: "linear-gradient(transparent 0% , black 20%)",
    background: "black",
    flexDirection: "column",
    alingItems: "center",
  },
  foods: {
    margin: "0",
    color: "primary.light",
    borderBottom: "0.1px solid grey",
    display: "flex",
    alingItems: "center",
    justifyContent: "space-between",
    // fontSize: '1.5em'
  },
  add: {
    position: "absolute",
    right: "0",
    top: "0",
    color: "primary.light",
    fontSize: 40,
    backgroundColor: "primary.main",
    borderRadius: "50%",
  },
  file: {
    border: "none",
  },
  addFood: {
    backgroundColor: "white",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alingItems: "center",
    justifyContent: "space-between",
  },
  upImage: {
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    width: "300px",
    height: "300px",
    borderRadius: "10px",
    border: "1px solid black",
  },
  upButton: {
    width: "10px",
    boxShadow: "none",
    height: "30px",
    backgroundColor: "transparent",
    color: "primary.second",
    marginTop: "10px",
    ":hover": { backgroundColor: "primary.second", color: "primary.light" },
  },
  upFoodName: {
    margin: "10px 0 0 25%",
    width: " 50%",
  },
  upfoodIngredients: {
    margin: "30px 0 0 10%",
    width: "80%",
  },
  uploadsSave: {},
};
