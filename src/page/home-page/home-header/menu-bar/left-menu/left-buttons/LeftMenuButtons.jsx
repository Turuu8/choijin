import { Button, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMenuBarContext } from "../../../../../../context/MenuBarContext";
import { useLoginAndDataContext } from "../../../../../../context/LoginAndData";

export const LeftMenuButtons = () => {


    const signout = () => {
        signOutFromFirebase()
        window.location.reload(false)
    }

    const { setIsDrawerOpen } = useMenuBarContext();
    const { signOutFromFirebase, isData, userCheck } = useLoginAndDataContext();
    return (
        <>
                <Button onClick={() => setIsDrawerOpen(false)} href="#root" sx={{ backgroundColor: "primary.light" }}>
                    header
                </Button>
                <Button onClick={() => setIsDrawerOpen(false)} href='#menu' sx={{ backgroundColor: "primary.light" }}>
                    MENU
                </Button>
                <Button onClick={() => setIsDrawerOpen(false)} href='#footer' sx={{ backgroundColor: "primary.light" }}>
                    footer
                </Button>

                {userCheck && (
                    <Typography margin={1} fontSize={20}>
                        {isData}
                    </Typography>
                )}
                {!userCheck && (
                    <Button onClick={() => setIsDrawerOpen(false)} href='/login' sx={{
                        fontWeight: 'bold'
                    }}
                        size='large'>
                        <AccountCircleIcon />
                    </Button>
                )}
            {userCheck && (<Button onClick={() => signout()} sx={{ backgroundColor: 'primary.light' }}>garah</Button>)}
        </>
    )
}