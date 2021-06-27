import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const OrderCard = (props) => {
  const { name, imageURL, price, designer, email, orderTime } = props.imageInfo;
  const classes = useStyles();
  const typoStyle = {
    fontSize: "15px",
    color: "Black",
    widht: "100%",
  };
  return (
    <div>
      <Card
        className={classes.root}
        style={{
          margin: "3%",
          boxShadow: "3px 3px 6px grey",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={imageURL}
            title={name}
          />
          <CardContent>
            <Typography style={typoStyle}><span style={{color: 'Green'}}>{name}</span><span style={{color: 'Grey'}}> by {designer}</span></Typography>
            <Typography style={typoStyle}><span style={{color: 'grey',fontSize: '13px'}}>Ordered by {email}</span></Typography>
            <Typography style={typoStyle}><span style={{fontSize: '12px', color: 'red'}}>Placed On {orderTime}</span></Typography>
            <Typography style={typoStyle}><span style={{fontSize: '20px'}}>${price}</span></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default OrderCard;
