import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { UserContext } from "../../App";
import UserIcon from './UserIcon.png';

const Header = () => {
  const [SignedInUser, setSignedInUser] = useContext(UserContext);
  const isLoggedIn = SignedInUser.isSignedIn;
  const linkStyle = {
    margin: "0px 30px",
    color: "black",
    fontWeight: "600",
    pointer: "hand",
    textDecoration: "none",
  };
  //#2196f3
  return (
    <div style={{borderBottom: '5px solid lightgreen'}}>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <span style={{ color: "Black", fontWeight: "800", fontSize: "30px"}}>
            LOGO
          </span>
          <span style={{ color: "#33cc33", fontWeight: "800", fontSize: "30px" }}>
            LAND
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link style={linkStyle} to="/">
              HOME
            </Link>
            <Link style={linkStyle} to="/Order">
              ORDERS
            </Link>
            <Link style={linkStyle} to="/Admin">
              ADMIN
            </Link>
            
            <Link style={linkStyle} to="/Checkout">
              CHECKOUT
            </Link>
            <Link style={linkStyle} to="/About">
              ABOUT
            </Link>
            {
              !isLoggedIn ? 
              <Button
              size="small"
              style={{ backgroundColor: "lightgreen"}}
            >
              <Link
                style={{
                  margin: "0px 10px",
                  color: "black",
                  fontWeight: "600",
                  pointer: "hand",
                  textDecoration: "none",
                }}
                to="/LogIn"
              >
                LOG IN
              </Link>
            </Button>
            :
            <div>
              <img style={{borderRadius: '50%', width: '30px', backgroundColor: 'lightgrey', margin: '0px 30px'}} src={UserIcon} alt=""></img>
            </div>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
