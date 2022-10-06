
import { LinkContainer } from "react-router-bootstrap";
import DropPage from "../assets/images/DropPage.png"
function Drop({loggedIn,usertype}) {
  

  return (
    <div
      className="Drop"
      style={{
        backgroundImage: "url(" + DropPage + ")",
        
        backgroundColor: "black",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "91.9vh",
        width: "99.99vw",
        position:"relative",
        zIndex: "0",
      }}

    >
      <p style={{color:"white",
      position:"relative",
      top:"50%",
      left:"10%",
      fontSize:20
    }}>
        Blood donation camp at SRM Hospital
        <div>
          
        </div>
        <a href="https://www.google.com/maps/dir//srm+hospital/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52f70b53105bc7:0xc5d8b72fb4218091?sa=X&hl=en&ved=2ahUKEwiJ4uWBh6r4AhX82DgGHbfbBpYQ9Rd6BAgDEAQ" >Location of hospital</a>
      </p>

     
     
    </div>
  );
}

export default Drop;
