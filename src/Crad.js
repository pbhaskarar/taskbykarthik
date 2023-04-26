import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LapImg from './assets/lap.jpg'

export default function ActionAreaCard(props) {
    const {data, title} = props;
  return (
    <>
    
   {data.map((item) =>(
     <Card  sx={{ maxWidth: 345}}>
        <Typography gutterBottom variant='h5'>{title}{item.product}</Typography>
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image={LapImg}
         alt="green iguana"
         name={item.product}
       />
       <CardContent>
         <Typography gutterBottom variant="h6" component="div" color="red">
          Total Quantity : {item.quanity}
         </Typography>
         <Typography gutterBottom variant="h6" color="green">
          Total Price : {item.price}
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   ))}
    </>
  );
}