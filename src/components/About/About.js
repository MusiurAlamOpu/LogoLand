import React from "react";
import { Link } from "react-router-dom";
import Bismillah from "./Bismillah.png";
import MyPic from "./myPhoto.jpeg";

const About = () => {
    const linkStyle = {
        margin: '5%'
    }
    const pStyle = {
        color: 'grey'
    }
  return (
    <div style={{textAlign: 'center', margin: '2% 5%'}}>
      <img style={{width: '30%', margin:'1% 35%'}} src={Bismillah} alt="" />
      <img style={{width: '50%', margin: '3% 25', borderRadius: '10px', boxShadow: '3px 3px 6px grey'}} src={MyPic} alt="" />
      <h3 style={{marginTop: '5%', color: 'skyblue'}}>MUSIUR ALAM OPU</h3>
      <h6>BSc in Computer Science and Engineering</h6>
      <p style={pStyle}>North_South_University</p>
      <p style={pStyle}>learner at Programming Hero</p>
      <p style={pStyle}>Web_developement_with_JhankarMahbub</p>
      <br />
      <h3>Assignments Info</h3>
      <h2 style={{color: 'green'}}>LogoLand</h2>
      <h3>ingradients</h3>
      <p style={pStyle}>
        This website is made with [react], [react-bootstrap], [firebase-auth],
        [heroku], [javascript], [MongoDB]
      </p>
      <h3>features</h3>
      <p style={pStyle}>
        Visitors can see the home page with full of demo card of various type of
        logos. From there one can click the buy now button and that will
        redirect to log in page in case not logged in. After authentication step
        visitor can checkout their selection and click on checkout button that
        will confirm the order. Admins can add or remove the database
        information about specific logo item. More Specifically `Authentication
        with Google Sign In method` `Buying logo` `Add or remove logos from
        Admin panel` `Use data base for saving information about specific user`
        `Information about Developer At About page`
      </p>
      <h3>Links</h3>
      <Link style={linkStyle} to="https://logoland-ce573.web.app/">Live Site</Link>
      <Link style={linkStyle} to="https://github.com/Porgramming-Hero-web-course/full-stack-client-MusiurAlamOpu">Client Site GIT </Link>
      <Link style={linkStyle} to="https://github.com/Porgramming-Hero-web-course/full-stack-server-MusiurAlamOpu">Server Site GIT</Link>
    </div>
  );
};

export default About;
