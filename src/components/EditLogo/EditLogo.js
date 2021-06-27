import { faBook, faEdit, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const EditLogo = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    margin: "0% 5%",
    fontSize: "15px", //TODO
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
        Comming soon.....
    </div>
  );
};

export default EditLogo;
