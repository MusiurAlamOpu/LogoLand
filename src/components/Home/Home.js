import { Button, Input } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LogoCard from "../LogoCard/LogoCard";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://pumpkin-cobbler-17367.herokuapp.com/addImage")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(true);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#f8f8f8", paddingBottom: "5%" }}>
      <div style={{ textAlign: "center", padding: "2% 0%" }}>
        <Input
          style={{
            border: "1px solid lightgreen",
            width: "50%",
            margin: "0% 2%",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
          type="text"
          placeholder="Search logo"
        ></Input>
        <Button style={{ backgroundColor: "lightgreen" }}>SEARCH</Button>
      </div>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "2%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {images.map((image) => (
            <LogoCard key={image._id} imageInfo={image}></LogoCard>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "20%" }}>
          <ReactBootstrap.Spinner animation="grow" variant="primary" />
          <ReactBootstrap.Spinner animation="grow" variant="warning" />
          <ReactBootstrap.Spinner animation="grow" variant="success" />
        </div>
      )}
    </div>
  );
};

export default Home;
