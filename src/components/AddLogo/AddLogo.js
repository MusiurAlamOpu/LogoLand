import { faFly } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faCheckCircle,
  faCheckDouble,
  faCloudUploadAlt,
  faEdit,
  faPlusSquare,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const AddLogo = () => {
  const { register, handleSubmit } = useForm(); //watch, errors
  const [imageUrl, setImageUrl] = useState(null);
  const onSubmit = (data) => {
    const imageInfo = {
      name: data.name,
      imageURL: imageUrl,
      designer: data.designer,
      price: data.price,
    };
    fetch("https://pumpkin-cobbler-17367.herokuapp.com/addImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imageInfo),
    })
      .then((res) => res.json())
      .then((res) =>
        alert(
          "New logo Information submitted successfully! Now you can go to ORDERS."
        )
      );
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "4bc0ef2d0e2b3db4bc25cd82e27c7def");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
        alert("Logo Data added in Database Successfully! Please Submit Now");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const labelStyle = {
    fontSize: "15px",
    fontWeight: "500",
    color: "grey",
    margin: "3px 0px",
  };
  const inputBoxStyle = {
    width: "90%",
    color: "grey",
    border: "1px solid lightgrey",
    borderRadius: "7px",
    backgroundColor: "white"
  };
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    margin: "0% 5%",
    fontSize: "15px", //TODO
  };
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
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
      <div
        style={{
          borderRadius: "10px",
          width: "90%",
          margin: "5%",
          padding: "2%",
          backgroundColor: "white",
          boxShadow: "3px 3px 8px grey",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "50%" }}>
              <h6 style={labelStyle}>Name</h6>
              <input
                style={inputBoxStyle}
                name="name"
                defaultValue="New Image"
                ref={register}
              />
              <br />
              <h6 style={labelStyle}>Price</h6>
              <input
                style={inputBoxStyle}
                name="price"
                defaultValue="0"
                ref={register}
              />
              <br />
            </div>
            <div style={{ width: "50%" }}>
              <h6 style={labelStyle}>Designer Name</h6>
              <input
                style={inputBoxStyle}
                name="designer"
                defaultValue="Musiur"
                ref={register}
              />
              <br />
              <h6 style={labelStyle}>Upload Logo</h6>
              <input
                name="exampleRequired"
                type="file"
                onChange={handleImageUpload}
                style={{ color: "grey", width: "90%" }}
              />
              <br />
            </div>
          </div>
          <div style={{ margin: "3%" }}>
            <p style={{ color: "grey" }}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: "grey" }} />
              &nbsp;Please wait ultill you get notification which will releted
              to Database to add information about your Logo.
            </p>
            <p style={{ color: "grey" }}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: "grey" }} />
              &nbsp;After adding information to database you have to click
              submit and will have to wait untill you get next notification.
            </p>
          </div>
          <div style={{ textAlign: "right", marginRight: "10%" }}>
            <Button
              style={{
                backgroundColor: "Green",
                color: "white",
                borderRadius: "5px",
              }}
              type="submit"
            >
              <FontAwesomeIcon
                icon={faCloudUploadAlt}
                style={{ color: "white" }}
              />
              &nbsp; SUBMIT
            </Button>
            {/* <Link style={{textDecoration: 'None', color: 'white'}}  to='/AddLogo'>SUBMIT</Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLogo;
