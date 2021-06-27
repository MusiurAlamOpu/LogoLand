import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { selectedImageContext } from "../../App";
import { Link } from "react-router-dom";
import "./LogoCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const LogoCard = (props) => {
  const [selectedImageInfo, setSelectedImageInfo] =
    useContext(selectedImageContext);
  const { name, imageURL, _id, designer, price } = props.imageInfo;
  const selectedImageData = {
    name: name,
    id: _id,
    imageURL: imageURL,
    designer: designer,
    price: price,
  };
  const classes = useStyles();
  return (
    <div>
      <Card
        id="card"
        className={classes.root}
        style={{
          margin: "3%",
          boxShadow: "3px 3px 6px grey",
          borderRadius: "10px",
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
            <Typography
              style={{
                fontSize: "20px",
                color: "Black",
                widht: "100%",
                textAlign: "center",
              }}
            >
              {name}
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                color: "grey",
                widht: "100%",
                textAlign: "center",
              }}
            >
              by {designer}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            style={{
              backgroundColor: "#f5f5f5",
              color: "green",
              border: "1px solid green",
              borderRadius: "10px",
              padding: "1% 4%",
            }}
          >
            ${price}
          </Button>
          <Button
            onClick={() => {
              setSelectedImageInfo(selectedImageData);
            }}
            size="small"
            style={{
              backgroundColor: "green",
              marginLeft: "44%",
              borderRadius: "10px",
              padding: "2% 4%",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "12px",
              }}
              to="/Checkout"
            >
              BUY NOW
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default LogoCard;
