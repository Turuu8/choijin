import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HomeBody } from "./home-body/Body";
import { HomeFooter } from "./home-footer/Footer";
import { useMenuBarContext } from "../../context/MenuBarContext";
import { useLoginAndDataContext } from "../../context/LoginAndData";
import { MainLogo } from "./home-header/main-logo/MainLogo";
import { BookATableButton } from "./home-header/book-a-table/BookATableButton";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Tooltip } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Service } from "./service/Service";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  backgroundColor: "black",
  color: "white",
  display: "flex",
  justifyContent: "center",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: "black",
  color: "white",
  display: "flex",
  justifyContent: "center",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  position: "absolute",
  top: "0",
  width: drawerWidth,
  height: "100px",
  padding: theme.spacing(1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const HomePage = () => {

  const navigate = useNavigate();

  const { small } = useMenuBarContext();
  const { userCheck, signOutFromFirebase } = useLoginAndDataContext();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Logout = () => {
    signOutFromFirebase();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        id="llll"
        position="fixed"
        open={open}
        sx={{
          height: small ? "15vh" : "30vh",
          boxShadow: "none",
          transform: open ? "translateY(-100%)" : "translateX(0)",
          backgroundColor: small ? "black" : "transparent",
          justifyContent: small ? "space-around" : "center",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          width: "100%",
          transition: "0.5s",
        }}
      >
        <Toolbar
          sx={{
            width: "100px",
            position: "absolute",
            left: "5%",
            height: "100px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            // edge="start"
            sx={{
              marginRight: 5,
              fontSize: 18,
              color: "primary.light",
              transition: "0.5s",
              ":hover": {
                color: "primary.main",
              },
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon /> Menu
          </IconButton>
        </Toolbar>
        <MainLogo />
        <BookATableButton />
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{ color: "white", ...(!open && { display: "none" }) }}
          >
            <ChevronLeftIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* <<<<<<< left bar icons >>>>>>>>>  */}
          <ListItemButton
            href="#"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "white",
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Эхлэл" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          {/* ----- about ------ */}
          <ListItemButton
            href='#order'
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "white",
              }}
            >
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Бидний тухай" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          {/* ----- menu ------ */}
          <ListItemButton
            href="#menu"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "white",
              }}
            >
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          {/* ----- book a table  ------ */}
          <ListItemButton
            href='#order'
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "white",
              }}
            >
              <TableRestaurantIcon />
            </ListItemIcon>
            <ListItemText primary="Ширээ захиалага" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          {/* ----- login ------ */}
          {!userCheck ? (
            <Tooltip title="Нэвтрэх">
              <ListItemButton
                onClick={() => navigate('/login')}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <AccountCircleRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Нэвтрэх"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          ) : (
            <Tooltip title="Гарах">
              <ListItemButton
                onClick={() => Logout()}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Гарах" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          )}
          {/* <<<<<<< left bar icons >>>>>>>>>  */}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <HomeBody />
        <Service/>
        {/* <BookATable/> */}
        <HomeFooter />
      </Box>
    </Box>
  );
};