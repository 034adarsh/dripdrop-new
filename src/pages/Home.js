import { useState } from "react";

import HomePage from "../assets/images/HomePage.png";
import PlzLogin from "../assets/images/PlzLogin.png";
import Drop from "../assets/images/Drop.png";
import Drip from "../assets/images/Drip.png";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
function Home({ loggedIn }) {
  return (
    <div
      className="Home"
      style={{
        backgroundImage: loggedIn
          ? "url(" + HomePage + ")"
          : "url(" + PlzLogin + ")",
        backgroundColor: "black",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "91.9vh",
        width: "99.99vw",
        position: "relative",
        zIndex: "0",
      }}
    >
      {!loggedIn && (
        <p
          style={{
            zIndex: "1",
            color: "white",
            position: "absolute",
            top: "50vh",
            left: "29vw",
            fontSize: 50,
          }}
        >
          Please Login/Register First
        </p>
      )}
      {loggedIn && (
        <>
          <Link to="/drip">
            <div
              className="Drip"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "42vh",
                left: "17vw",
                color: "white",
              }}
            >
              <h1>Drip</h1>
              <img
                src={Drip}
                style={{
                  height: "40vh",
                  width: "20vw",
                }}
              />
            </div>
          </Link>
          <Link to="/drop">
             
          <div
            className="Drop"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "42vh",
              right: "22vw",
              color: "white",
            }}
          >
            <h1>Drop</h1>
            <img
              src={Drop}
              style={{
                height: "25vh",
                width: "15vw",
              }}
            />
          </div>
            </Link>
        </>
      )}
    </div>
  );
}

export default Home;
