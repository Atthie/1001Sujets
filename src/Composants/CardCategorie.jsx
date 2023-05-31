import {
  Carousel,
  Row,
  Card,
  Container,
  Col,
  CardTitle,
  Icon,
} from "react-materialize";
function CardCategorie(props) {
  return (
    <>
      <Col m={3} s={12}>
        <Card
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image={props.couverture} reveal waves="light" />}
          title={props.titre}
        
        >
          <p>
            <a href="#"><h6>{props.nbArticle} Articles publiés</h6> </a>
          </p>
        </Card>
      </Col>
    </>
  );
}
export default CardCategorie;
