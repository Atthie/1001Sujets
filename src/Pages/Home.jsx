import Header from "../Composants/Nav-bar";
import {
  Carousel,
  Row,
  Card,
  Container,
  Col,
  CardTitle, Icon
} from "react-materialize";
import ban1 from "../Assets/banniere1.jpg";
import famille from "../Assets/famille.jpg";
import amitie from "../Assets/amitie.jpg";
import compassion from "../Assets/compassion.jpg";
import mariage from "../Assets/mariage.jpg";
import "../Styles/Home.scss";
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
            <h2 className="center-align">Top 4 de Sujets</h2>
            <Row className="center-align">
              <Col m={3} s={12}>
                <Card
                  closeIcon={<Icon>close</Icon>}
                  header={<CardTitle image={famille} reveal waves="light" />}
                  reveal={
                    <p>
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  }
                  revealIcon={<Icon>more_vert</Icon>}
                  title="Famille"
                >
                  <p>
                    <a href="#">4 Articles publiés</a>
                  </p>
                </Card>
              </Col>
              <Col m={3} s={12}>
                <Card
                  closeIcon={<Icon>close</Icon>}
                  header={<CardTitle image={amitie} reveal waves="light" />}
                  reveal={
                    <p>
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  }
                  revealIcon={<Icon>more_vert</Icon>}
                  title="Amitié"
                >
                  <p>
                    <a href="#">2 Articles publiés</a>
                  </p>
                </Card>
              </Col>
              <Col m={3} s={12}>
                <Card
                  closeIcon={<Icon>close</Icon>}
                  header={<CardTitle image={mariage} reveal waves="light" />}
                  reveal={
                    <p>
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  }
                  revealIcon={<Icon>more_vert</Icon>}
                  title="Mariage"
                >
                  <p>
                    <a href="#">3 Articles publiés</a>
                  </p>
                </Card>
              </Col>
              <Col m={3} s={12}>
                <Card
                  closeIcon={<Icon>close</Icon>}
                  header={<CardTitle image={compassion} reveal waves="light" />}
                  reveal={
                    <p>
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  }
                  revealIcon={<Icon>more_vert</Icon>}
                  title="Compassion"
                >
                  <p>
                    <a href="#">7 Articles publiés</a>
                  </p>
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
