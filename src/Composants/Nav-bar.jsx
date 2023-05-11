import { Navbar, Icon, NavItem, Dropdown } from "react-materialize";
function Header() {
  return (
    <>
      <Navbar
        style={{ backgroundColor: "white", padding: "0px 0px 0px 0px" }}
        alignLinks="right"
        brand={
          <a style={{ color: "#016b21" }} className="brand-logo" href="/">
            <b>1001 Sujets</b>
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon style={{ color: "#016b21" }}>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem style={{ color: "#016b21" }} href="/">
          Acceuil
        </NavItem>
        <NavItem style={{ color: "#016b21" }} href="/about">
          Sujets
        </NavItem>
        <NavItem style={{ color: "#016b21" }} href="/about">
          À propos
        </NavItem>
        <NavItem style={{ color: "#016b21" }} href="/contact">
          Contact
        </NavItem>
        <Dropdown
          id="profile-dropdown"
          options={{
            alignment: "right",
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: false,
            hover: false,
            inDuration: 150,
            outDuration: 250,
          }}
          trigger={<Icon>account_circle</Icon>}
        >
          <NavItem href="/connexion">Se connecter</NavItem>
          <NavItem href="/inscription">S'inscrire</NavItem>
        </Dropdown>
      </Navbar>
    </>
  );
}

export default Header;
