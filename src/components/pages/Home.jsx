import "/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

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
            <Card.Img
              variant="top"
              src="assets/kansascity.jpg"
              style={{ objectFit: "cover", width: "100%", height: "300px" }}
            />
            <Card.Body>
              <h1>Kansas City's Trusted Heating and Cooling Company</h1>
              <p>
                KC Air Repair is dedicated to delivering top-notch service and
                ensuring customer satisfaction in every aspect of our business.
                Reach out today and discover how KC Air can help you achieve
                your goals.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

function ServicesProvided() {
  return (
    <div className="services-provided">
      <Container className="mt-3 mb-3">
        <Row>
          <Col xs={12} md={6} className="pl-0">
            <Image
              src="assets/inspect.jpg"
              rounded
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div>
              <h1>Services We Offer</h1>
              <p>
                At KC Air Repair, we provide a wide range of heating and cooling
                services designed to ensure comfort and efficiency in homes and
                businesses throughout the Kansas City area. Our expert team
                specializes in
              </p>
              <ul>
                <li>A/C Repair</li>
                <li>A/C Tune-Up</li>
                <li>A/C Installation</li>
                <li>Furnace Installation</li>
                <li>Furnace Repair</li>
                <li>Furnace Tune-Up</li>
                <li>Water Heater Installation</li>
                <li>Humidifier Installation</li>
              </ul>
              <p>
                We prioritize customer satisfaction, offering personalized
                service and transparent communication every step of the way.
                Count on KC Air Repair for all your heating and cooling needs,
                and experience the difference of working with a trusted local
                service provider.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function ServiceArea() {
  return (
    <div
      className="service-area"
      style={{
        backgroundImage: `url("assets/kcmaps.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="overlay"></div>
      <Container className="mt-3 mb-3">
        <Row>
          <Col xs={12} md={6}>
            <div>
              <h1 style={{ color: "#ffffff" }}>
                Serving the KC Metro and neighboring communities
              </h1>
              <p style={{ color: "#ffffff" }}>
                We're proud to offer a full range of top quality heating and air
                conditioning services to homes and businesses across the Kansas
                City Metro and following area.
              </p>
              <ul className="cities" style={{ color: "#ffffff" }}>
                <li>Kansas City, MO</li>
                <li>Mission, KS</li>
                <li>Leawood, KS</li>
                <li>Overland Park, KS</li>
                <li>Prairie Village, KS</li>
                <li>Lenexa, KS</li>
                <li>Shawnee, KS</li>
                <li>Parkville, MO</li>
                <li>Olathe, KS</li>
                <li>Gladstone, MO</li>
                <li>Leavenworth, KS</li>
                <li>Lansing, KS</li>
                <li>Basehor, KS</li>
                <li>Bonner Springs, KS</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            {/* You can remove the Image component */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Choice() {
  return (
    <div className="choice">
      <Container style={{ marginBottom: '20px' }}> {/* Add margin-bottom to create spacing */}
        <Row>
          <Col xs={6} md={8}>
            <h1 style={{ textAlign: 'center' }}>Why choose us?</h1> {/* Center the h1 tag */}
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
          <Col xs={6} md={4}>
            <Image
              src="assets/coolfam.jpg"
              rounded
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
