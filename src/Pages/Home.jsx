import Header from "../Composants/Nav-bar";
import Footers from "../Composants/Footer";
import {
  Carousel,
  Row,
  Card,
  Container,
  Col,
  CardTitle,
  Icon,
  Button,
  Footer,
} from "react-materialize";
import ban1 from "../Assets/banniere1.jpg";
import famille from "../Assets/famille.jpg";
import amitie from "../Assets/amitie.jpg";
import compassion from "../Assets/compassion.jpg";
import mariage from "../Assets/mariage.jpg";
import "../Styles/Home.scss";
import CardCategorie from "../Composants/CardCategorie";
import CardService from "../Composants/CardArticle";
function Home() {
  return (
    <>
      <div>
        <Header />
        <div>
          <Carousel
            carouselId="Carousel-38"
            className="white-text center"
            options={{
              fullWidth: true,
              indicators: true,
            }}
          >
            <div className="un">
              <h2>First Panel</h2>
              <p>This is your first panel</p>
            </div>
            <div className="green">
              <h2>Second Panel</h2>
              <p>This is your second panel</p>
            </div>
          </Carousel>
        </div>
        <div className="container-categorie">
          <Container className="categorie">
            <div className="EnteteCategorie">
              <h3 className="center-align">Top 4 de Sujets</h3>
              <p>
                Découvrez notre sélection des 4 catégories qui a les plus
                d'acticles
              </p>
            </div>
            <Row className="blocCategorie center-align">
              <CardCategorie
                className="cardCat"
                couverture={famille}
                description="Dans cette catégorie, vous trouverez des articles sur différents aspects de la vie de famille, tels que les relations entre parents et enfants, la gestion des conflits familiaux, léducation des enfants, et bien plus encore. Nous partagerons également des histoires inspirantes de familles qui ont surmonté des défis difficiles ensemble, ainsi que des astuces et des conseils pour créer des souvenirs inoubliables avec vos proches"
                titre="Famille"
                nbArticle="10"
              />
              <CardCategorie
                className="cardCat"
                couverture={amitie}
                description="Dans cette catégorie, vous trouverez des articles sur différents aspects de la vie de famille, tels que les relations entre parents et enfants, la gestion des conflits familiaux, léducation des enfants, et bien plus encore. Nous partagerons également des histoires inspirantes de familles qui ont surmonté des défis difficiles ensemble, ainsi que des astuces et des conseils pour créer des souvenirs inoubliables avec vos proches"
                titre="Amitié"
                nbArticle="8"
              />

              <CardCategorie
                className="cardCat"
                couverture={compassion}
                description="Dans cette catégorie, vous trouverez des articles sur différents aspects de la vie de famille, tels que les relations entre parents et enfants, la gestion des conflits familiaux, léducation des enfants, et bien plus encore. Nous partagerons également des histoires inspirantes de familles qui ont surmonté des défis difficiles ensemble, ainsi que des astuces et des conseils pour créer des souvenirs inoubliables avec vos proches"
                titre="Compassion"
                nbArticle="6"
              />
              <CardCategorie
                className="cardCat"
                couverture={mariage}
                description="Dans cette catégorie, vous trouverez des articles sur différents aspects de la vie de famille, tels que les relations entre parents et enfants, la gestion des conflits familiaux, léducation des enfants, et bien plus encore. Nous partagerons également des histoires inspirantes de familles qui ont surmonté des défis difficiles ensemble, ainsi que des astuces et des conseils pour créer des souvenirs inoubliables avec vos proches"
                titre="Mariage"
                nbArticle="3"
              />
            </Row>
          </Container>
        </div>

        <div className="container-article">
          <Container className="articles">
            <div className="EnteteArticles">
              <h3 className="center-align">Articles Recents</h3>
              <p className="desArticle">
                Ne manquez pas nos dernièrs articles et decouvrez les nouveautés
                sur nos sujet
              </p>
            </div>
            <div className="article">
              <Row>
                <CardService />
                <CardService />
              </Row>
              <Row>
                <CardService />
                <CardService />
              </Row>
            </div>

            <Button className="voirPlus" node="button" waves="light">
              Voir plus
            </Button>
          </Container>
        </div>
        <div className="container-activite">
          <Container className="activite">
            <div className="EnteteActivite">
              <h3 className="center-align">1001 Sujets pour 1001 Activités </h3>
              <p className="desActivite">
                 Ne manquez pas nos prochaines activités ! Restez à jour en
                consultant régulièrement notre section activité.
              </p>
            </div>

            <Carousel
              carouselId="Carousel-34"
              images={[
                "https://picsum.photos/200/300?image=0",
                "https://picsum.photos/200/300?image=1",
                "https://picsum.photos/200/300?image=2",
                "https://picsum.photos/200/300?image=3",
                "https://picsum.photos/200/300?image=4",
              ]}
              options={{
                dist: -100,
                duration: 200,
                fullWidth: false,
                indicators: false,
                noWrap: false,
                numVisible: 5,
                onCycleTo: null,
                padding: 0,
                shift: 0,
              }}
            />
          </Container>
        </div>
       
      </div>
    </>
  );
}
export default Home;
