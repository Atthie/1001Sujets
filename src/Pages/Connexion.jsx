import { Col, TextInput, Icon, Button, NavItem} from "react-materialize";
import { useState } from "react";
import '../Styles/Connexion.scss'
import { NavLink } from "react-router-dom";

function Connexion() {
    const [showPassword, setShowPassword] = useState(true);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
  return (
    <div className="parent">
     
      <Col className="container my-form" >
        <div className="titre"><h4>Connexion</h4></div>
        <TextInput placeholder="UserName" style={{ textIndent: "10px" }} />
        <TextInput placeholder="Mot de passe" 
            icon={<Icon onClick={toggleShowPassword}>remove_red_eye</Icon>}
            type={showPassword ? "password":"text"}
            style={{ textIndent: "10px" }}
        />
        <NavLink><h6>Mot de passe oublié ?</h6></NavLink>
        <Button type="submit">Envoyer</Button>
        <h6 className="p2">Vous n'avez pas de compte ? <NavItem href='/inscription'>Inscription</NavItem></h6>
        <NavItem href="/"> Retour à l'acceuil</NavItem>
      </Col>
    </div>
  );
}
export default Connexion;
