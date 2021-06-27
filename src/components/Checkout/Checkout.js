import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { selectedImageContext, UserContext } from "../../App";

const Checkout = () => {
  const [SignedInUser, setSignedInUser] = useContext(UserContext);
  const [selectedImageInfo, setSelectedImageInfo] = useContext(
    selectedImageContext
  );
  const { name, imageURL, designer, price } = selectedImageInfo;

  const orderDetails = {
    ...SignedInUser,
    ...selectedImageInfo,
    orderTime: new Date(),
  };
  const handleCheckoutButton = (props) => {
    fetch("https://pumpkin-cobbler-17367.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your order placed Successfully!  Now go to ORDERS");
        }
      });
  };

  const titleStyle = {
    width: "30%",
    textAlign: "center",
    color: "Black",
    fontSize: "18px",
    fontWeight: "500",
  };
  const infoStyle = {
    width: "30%",
    textAlign: "center",
    color: "grey",
    fontSize: "15px",
    margin: '1% 0%'
  };
  return (
    <div style={{backgroundColor: "#f5f5f5" }}>
      <div style={{ padding: "5% 2%"}}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "Black", borderBottom: "2px solid lightgrey" }}>
            CHECKOUT
          </h1>
          <img
            style={{ width: "60%", borderRadius: "10px", margin: '5%', boxShadow: '3px 3px 8px grey'}}
            src={imageURL}
            alt=""
          ></img>
          <h4>{name}</h4>
          <h6 style={{color: 'grey'}}>By: {designer}</h6>
        </div>
        <div
          style={{
            backgroundColor: "white",
            margin: "4%",
            borderRadius: "15px",
            padding: "4%",
            boxShadow: '3px 3px 8px grey'
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid lightgrey",
            }}
          >
            <div style={titleStyle}>Item</div>
            <div style={titleStyle}>Quantity</div>
            <div style={titleStyle}>Price</div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid lightgrey",
            }}
          >
            <div style={infoStyle}>{name}</div>
            <div style={infoStyle}>1</div>
            <div style={infoStyle}>${price}</div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: 'center',
            }}
          >
            <div style={titleStyle}>Total</div>
            <div style={titleStyle}></div>
            <div style={titleStyle}>${price}</div>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <Button
            style={{
              backgroundColor: "green",
              color: "white",
              marginRight: "10%",
            }}
            onClick={() => handleCheckoutButton(orderDetails)}
          >
            CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
