import { LinkContainer } from "react-router-bootstrap";
import DripPage from "../assets/images/DripPage.png"
import {Form,Button} from "react-bootstrap"
function Drip({loggedIn,usertype}) {
  
  console.log(usertype)
  return (
     
    <div
      className="Drip"
      style={{
        backgroundImage: "url(" + DripPage + ")",
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
      <Form style={{
        position:"relative",
        top:"40%",
        width:"40%"
      }} >
  <Form.Group className="mb-3 " controlId="formBasicText">
    <Form.Label style={{
      color:"white"
    }}>Location To Drip</Form.Label>
    <Form.Control type="text" placeholder="Enter drip location"  />
    
  </Form.Group>
  <Form.Group className="mb-3 " controlId="formBasicText">
    <Form.Label style={{
      color:"white"
    }}>Type of blood</Form.Label>
    <Form.Control type="text" placeholder="Type of blood"  />
    
  </Form.Group>
  <Form.Group className="mb-3 " controlId="formBasicText">
    <Form.Label style={{
      color:"white"
    }}>Unit of blood required</Form.Label>
    <Form.Control type="number" placeholder="Enter unit of blood required"  />
    
  </Form.Group>
  

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default Drip;
