import {Form,Button} from "react-bootstrap"
import PlzLogin from "../assets/images/PlzLogin.png";
import {useNavigate} from "react-router-dom"
import { useEffect ,useState} from "react";

function Register({type}) {
  const navigate = useNavigate()
  const [t,setT] = useState('')
  const handleSubmit = (event) =>{
    event.preventDefault();
    type(t)

    navigate('/login');



  }
  return (
    <div className="Register" style={{
      backgroundImage:  "url(" + PlzLogin + ")",
      opacity:"0.8",
      backgroundColor: "black",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "91.9vh",
      width: "99.99vw",
      position:"relative",
      zIndex: "0",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Form style={{
        width:"40%"
      }} onSubmit={handleSubmit}>
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label style={{
      color:"white"
    }}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  />
    
  </Form.Group>
  <Form.Group className="mb-3 " controlId="formBasicText">
    <Form.Label style={{
      color:"white"
    }}>Enter Type: P for personal , G for goverenment</Form.Label>
    <Form.Control type="text" placeholder="Enter type" value={t} onChange={e => setT(e.target.value)}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{
      color:"white"
    }}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{
      color:"white"
    }}>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default Register;
