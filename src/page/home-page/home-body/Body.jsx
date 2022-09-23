import { Box } from "@mui/system"
import { AboutAs } from "../about as/AboutAs"
import { BodyBody } from "./body-body/BodyBody"
import { BodyHeader } from "./body-header/BodyHeader"
export const HomeBody = () => {

    const styles = {
        body: {
            width: '100%',
        },
    }
    return (
        <Box id="body" component='div' display='flex' flexDirection='column' sx={styles.body}
        >
            <BodyHeader />
            <AboutAs/>
            <BodyBody />
        </Box>

    )
}