import { Navbar, Icon, NavItem, Dropdown} from "react-materialize";
function Header() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#016b21", padding: '0px 0px 0px 0px' }}
        alignLinks="right"
        brand={
          <a className="brand-logo" href="/">
            1001 Sujets
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
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
        <NavItem href="/">Acceuil</NavItem>
        <NavItem href="/about">Sujets</NavItem>
        <NavItem href="/about">À propos</NavItem>
        <NavItem href="/contact">Contact</NavItem>
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
          trigger={
            <Icon>account_circle</Icon>
          }
        >
          <NavItem href="/connexion">Se connecter</NavItem>
          <NavItem href="/inscription">S'inscrire</NavItem>
        </Dropdown>
      </Navbar>
    </>
  );
}

export default Header;
