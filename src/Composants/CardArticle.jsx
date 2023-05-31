import {
  Card,
  Col,
  CardTitle,
  Icon,
} from "react-materialize";
import '../Styles/CardArticle.scss'
import article1 from '../Assets/Articles/article1.jpg'
function CardArticle(props) {
  return (
    <>
      <Col m={6} s={12}>
        <Card className="card-article"
          actions={[
            <a style={{ color: "rgba(1,107,33,255)" }} key="1" href="#">
              Lire plus
            </a>,
          ]}
          closeIcon={<Icon>close</Icon>}
          header={
            <CardTitle image={article1} />
          }
          horizontal
          revealIcon={<Icon>more_vert</Icon>}
        >
          <p className="textContent titre"><h5>Comment vivre un mariage heureux</h5></p>
          <p className="textContent description">Here is the standard card with a horizontal image.</p> 
        </Card>
      </Col>
    </>
  );
}
export default CardArticle;
