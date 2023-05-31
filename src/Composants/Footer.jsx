import { Footer, Row, Col } from "react-materialize";
function Footers() {
  return (
    <>
      <Footer
        style={{ backgroundColor: "rgba(1,107,33,255)", paddingTop: "0" }}
        copyrights="&copy 2015 Copyright Text"
        moreLinks={
          <Row>
            <Col s={3}>
              <a
                href="lien_vers_facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </Col>
            <Col s={3}>
              <a
                href="lien_vers_instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </Col>
            <Col s={3}>
              <a
                href="lien_vers_twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </Col>
            <Col s={3}>
              <a
                href="lien_vers_linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </Col>
          </Row>
        }
      ></Footer>
    </>
  );
}
export default Footers;
