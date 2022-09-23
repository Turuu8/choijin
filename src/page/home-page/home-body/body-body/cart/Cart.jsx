import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
export const FoodCart = () => {
    return (
        <Card sx={{ maxWidth: 400 , padding: '0.5%', backgroundColor: 'primary.second', color: 'primary.light' , margin: '1%' ,boxShadow: '0 0 10px 0 #841c23'}}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    width='100%'
                    height="90%"
                    image='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{color: '#be101d'  , fontSize: '1.2em'}}>
                        Chicken and Seafood
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                        PEALLA
                    </Typography>
                    <Typography variant="body2" color="primary.light" fontSize={20}>
                        Chorizo, chicken breast, mixed seafood, Arborio rice, lemon, parmesan cheese
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    learn more
                </Button>
            </CardActions> */}
        </Card>
    )
}