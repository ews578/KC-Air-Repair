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
            <Image src="assets/coolfam.jpg" rounded />{" "}
            {/* Use the Image component with the correct src */}
            <h1>Services We Offer</h1>
            <p>
              A/C Repair A/C Tune-Up A/C Installation Furnace Installation
              Furnace Repair Furncae Tune-Up Water Heater Installation
              Humidifier Installation
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function ServiceArea() {
  return (
    <div className="service-area">
      <h1>Areas We Service </h1>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="assets/kcmaps.jpg" rounded />{" "}
            <p>
              {" "}
              Kansas City, MO Mission, KS Leawood, KS Overland Park, KS Prairie
              Village, KS Lenexa, KS Shawnee, KS Parkville, MO Olathe, KS
              Gladstone, MO, Leavenworth, KS, Lansing, KS, Basehor, KS, Bonner
              Springs, KS
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Choice() {
  return (
    <div className="choice">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="assets/inspect.jpg" rounded style={{ width: '200%', height: 'auto' }} /> 
            <h1>Why choose us?</h1>
            <p>
              When it comes to your HVAC needs, choosing KC Air Repair means
              choosing reliability, expertise, and unparalleled customer
              service. With years of experience in the industry, our team of
              skilled technicians is committed to delivering high-quality
              repairs, installations, and maintenance services tailored to meet
              your specific requirements. We pride ourselves on our attention to
              detail and use of the latest technology to ensure efficient and
              effective solutions for your heating and cooling systems. At KC
              Air Repair, we prioritize customer satisfaction above all else,
              striving to exceed expectations with every job. Trust us to keep
              your home or business comfortable year-round.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
