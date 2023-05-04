import { Col, TextInput, Icon, Button, NavItem} from "react-materialize";
import { useState } from "react";
import '../Styles/Connexion.scss'
import { NavLink } from "react-router-dom";
function Inscription() {
    const [showPassword, setShowPassword] = useState(true);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
  return (
    <div className="parent">
     
      <Col className="container my-form" >
        <div className="titre"><h4>Creer un compte</h4></div>
        <TextInput placeholder="UserName" style={{ textIndent: "10px" }} />
        <TextInput placeholder="Adresse mail" style={{ textIndent: "10px" }} type="email"/>

        <TextInput placeholder="Mot de passe" 
            icon={<Icon onClick={toggleShowPassword}>remove_red_eye</Icon>}
            type={showPassword ? "password":"text"}
            style={{ textIndent: "10px" }}
        />
         <TextInput placeholder="Confirmer votre mot de passe" 
            icon={<Icon onClick={toggleShowPassword}>remove_red_eye</Icon>}
            type={showPassword ? "password":"text"}
            style={{ textIndent: "10px" }}
        />
        <Button type="submit">Envoyer</Button>
        <h6 className="p2">Vous avez déjà un compte? <NavItem href='/connexion'>Connexion</NavItem></h6>
        <NavItem href="/"> Retour à l'acceuil</NavItem>
      </Col>
    </div>
  );
}
export default Inscription;
