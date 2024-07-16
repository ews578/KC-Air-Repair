import "/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"; // Import the Image component
 


function Home() {
  return (
    <>

      <ContainerIntro />
      <ServicesProvided />
      <ServiceArea />
      <Choice />
    </>
  );
}

function ContainerIntro() {
  return (
    <div className="intro">
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="assets/kansascity.jpg" />
          </Card>
          <h1>Kansas City's Trusted Heating and Cooling Company</h1>
          <p>
            KC Air Repair is dedicated to delivering top-notch service and
            ensuring customer satisfaction in every aspect of our business.
            Reach out today and discover how KC Air can help you achieve your
            goals.
          </p>
        </Col>
      </Row>
    </div>
  );
}


function ServicesProvided() {
  return (
    <div className="services-provided">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="assets/coolfam.jpg" rounded /> {/* Use the Image component with the correct src */}
            <h1>Services We Offer</h1>
            <p>A list of services placed here</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function ServiceArea() {
  return (
    <div className="service-area">
      <h1>Areas we service</h1>
      <p>A table of cities of where we service will be placed here</p>
    </div>
  );
}

function Choice() {
  return (
    <div className="choice">
      <h1>Why choose us?</h1>
      <p>A paragraph explaining why we are the best option for heating and cooling services in the Kansas City area</p>
    </div>
  );
}

export default Home;