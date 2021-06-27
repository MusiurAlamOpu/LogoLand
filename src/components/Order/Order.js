import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import OrderCard from "./OrderCard/OrderCard";

const Order = () => {
  const [SignedInUser, setSignedInUser] = useContext(UserContext);
  const [OrdersDetails, setOrdersDetails] = useState([]);
  useEffect(() => {
    fetch("https://pumpkin-cobbler-17367.herokuapp.com/addOrder")
      .then((res) => res.json())
      .then((data) => {
        setOrdersDetails(data);
        // setLoading(true);
      });
  }, []);
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h3>Orders</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "2% 3%",
        }}
      >
        {OrdersDetails.map((order) => (
          //   key={order._id} imageInfo={order}
          <>
            {SignedInUser.email === order.email && (
              <OrderCard key={order._id} imageInfo={order}></OrderCard>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Order;
