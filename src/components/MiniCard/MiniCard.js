import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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

const MiniCard = (props) => {
  const [deleteClicked, setDeleteClicked] = useState(false);
  const { name, _id, designer, price, imageURL } = props.imageInfo;

  const deleteLogo = (props) => {
    fetch(`https://pumpkin-cobbler-17367.herokuapp.com/deleteLogo/${props}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Logo deleted Successfully!");
      });
    setDeleteClicked(true);
  };
  const classes = useStyles();
  const typoStyle = {
    fontSize: "15px",
    color: "Black",
    widht: "100%",
  };
  return (
    <div>
      {deleteClicked ? (
        <div style={{ display: "none" }}></div>
      ) : (
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
                <Typography style={typoStyle}>
                  <span style={{ color: "Green" }}>{name}</span>
                  <span style={{ color: "Grey" }}> by {designer}</span>
                </Typography>
                <Typography style={typoStyle}>
                  <span style={{ fontSize: "20px" }}>${price}</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => deleteLogo(_id)}
                  style={{ backgroundColor: "#e91e63", color: 'white', marginLeft: '35%'}}
                >
                  <FontAwesomeIcon icon={faTrashAlt} style={{color: 'white'}} />
                  &nbsp;Delete
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MiniCard;
