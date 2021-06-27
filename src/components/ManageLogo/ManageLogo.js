import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniCard from "../MiniCard/MiniCard";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAd,
  faAddressBook,
  faBook,
  faBookmark,
  faEdit,
  faPlusSquare,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";

const ManageLogo = () => {
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
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    margin: "2% 5%",
    fontSize: "17px", //TODO
  };
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          margin: "3% 5%",
          padding: "5px 0%",
          backgroundColor: "lightgreen",
          borderRadius: "10px",
        }}
      >
        <Link style={linkStyle} to="/ManageLogo">
          <FontAwesomeIcon icon={faBook} style={{ color: "black" }} />
          &nbsp; Manage
        </Link>
        <Link style={linkStyle} to="/AddLogo">
          <FontAwesomeIcon icon={faPlusSquare} style={{ color: "black" }} />
          &nbsp; Add
        </Link>
        <Link style={linkStyle} to="/EditLogo">
          <FontAwesomeIcon icon={faEdit} style={{ color: "black" }} />
          &nbsp; Edit
        </Link>
      </div>
      <div>
        {loading ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {images.map((image) => (
              <MiniCard key={image._id} imageInfo={image}></MiniCard>
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
    </div>
  );
};

export default ManageLogo;
