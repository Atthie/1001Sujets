import Header from "../Composants/Nav-bar";
import {
  Carousel,
  Row,
  Card,
  Container,
  Col,
  CardTitle,
  Icon,
} from "react-materialize";
import ban1 from "../Assets/banniere1.jpg";
import famille from "../Assets/famille.jpg";
import amitie from "../Assets/amitie.jpg";
import compassion from "../Assets/compassion.jpg";
import mariage from "../Assets/mariage.jpg";
import "../Styles/Home.scss";
import CardCategorie from "../Composants/CardCategorie";
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
        <div>
          <Container>
            <h3 className="center-align">Top 4 de Sujets</h3>
            <h5>Découvrez notre sélection des 4 catégories qui a les plus d'acticles</h5>
            
            <Row className="center-align">
              <CardCategorie  
                couverture={famille} 
                description='Dans cette catégorie, vous trouverez des articles sur différents aspects de la vie de famille, tels que les relations entre parents et enfants, la gestion des conflits familiaux, léducation des enfants, et bien plus encore. Nous partagerons également des histoires inspirantes de familles qui ont surmonté des défis difficiles ensemble, ainsi que des astuces et des conseils pour créer des souvenirs inoubliables avec vos proches' 
                titre='Famille'
                nbArticle='10'
                />
                 <CardCategorie  
                couverture={amitie} 
                description='Dans cette catégorie, vous trouverez des articles sur différents aspects de la vie de famille, tels que les relations entre parents et enfants, la gestion des conflits familiaux, léducation des enfants, et bien plus encore. Nous partagerons également des histoires inspirantes de familles qui ont surmonté des défis difficiles ensemble, ainsi que des astuces et des conseils pour créer des souvenirs inoubliables avec vos proches' 
                titre='Amitié'
                nbArticle='8'
                />
                 <CardCategorie  
                couverture={compassion} 
                description='Dans cette catégorie, vous trouverez des articles sur différents aspects de la vie de famille, tels que les relations entre parents et enfants, la gestion des conflits familiaux, léducation des enfants, et bien plus encore. Nous partagerons également des histoires inspirantes de familles qui ont surmonté des défis difficiles ensemble, ainsi que des astuces et des conseils pour créer des souvenirs inoubliables avec vos proches' 
                titre='Compassion'
                nbArticle='6'
                />
                 <CardCategorie  
                couverture={mariage} 
                description='Dans cette catégorie, vous trouverez des articles sur différents aspects de la vie de famille, tels que les relations entre parents et enfants, la gestion des conflits familiaux, léducation des enfants, et bien plus encore. Nous partagerons également des histoires inspirantes de familles qui ont surmonté des défis difficiles ensemble, ainsi que des astuces et des conseils pour créer des souvenirs inoubliables avec vos proches' 
                titre='Mariage'
                nbArticle='3'
                />
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <h2 className="center-align">Top 4 de Sujets</h2>
            <Row>
              <Col m={6} s={12}>
                <Card
                  actions={[
                    <a key="1" href="#">
                      This is a link
                    </a>,
                  ]}
                  closeIcon={<Icon>close</Icon>}
                  header={
                    <CardTitle image="https://materializecss.com/images/sample-1.jpg" />
                  }
                  horizontal
                  revealIcon={<Icon>more_vert</Icon>}
                >
                  Here is the standard card with a horizontal image.
                </Card>
              </Col>
              <Col m={6} s={12}>
                <Card
                  actions={[
                    <a key="1" href="#">
                      This is a link
                    </a>,
                  ]}
                  closeIcon={<Icon>close</Icon>}
                  header={
                    <CardTitle image="https://materializecss.com/images/sample-1.jpg" />
                  }
                  horizontal
                  revealIcon={<Icon>more_vert</Icon>}
                >
                  Here is the standard card with a horizontal image.
                </Card>
              </Col>
            </Row>
            <Row>
              <Col m={6} s={12}>
                <Card
                  actions={[
                    <a key="1" href="#">
                      This is a link
                    </a>,
                  ]}
                  closeIcon={<Icon>close</Icon>}
                  header={
                    <CardTitle image="https://materializecss.com/images/sample-1.jpg" />
                  }
                  horizontal
                  revealIcon={<Icon>more_vert</Icon>}
                >
                  Here is the standard card with a horizontal image.
                </Card>
              </Col>
              <Col m={6} s={12}>
                <Card
                  actions={[
                    <a key="1" href="#">
                      This is a link
                    </a>,
                  ]}
                  closeIcon={<Icon>close</Icon>}
                  header={
                    <CardTitle image="https://materializecss.com/images/sample-1.jpg" />
                  }
                  horizontal
                  revealIcon={<Icon>more_vert</Icon>}
                >
                  Here is the standard card with a horizontal image.
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
export default Home;
