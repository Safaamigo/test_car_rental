import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CarCard = () => {
  return (
    <Card  sx={{ display: "flex" ,margin:2}}>
        
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia sx={{ maxWidth: 250,maxHeight: 160,marginLeft:-3}}
          component="img"
          image=""
          alt="green iguana"
          src='https://cdn.pixabay.com/photo/2024/03/21/14/29/car-8647805_640.jpg'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CarCard
