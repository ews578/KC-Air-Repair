import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Services({ handlePageChange }) {
  const handleHeatingClick = () => {
    handlePageChange('Heating');
  };

  const handleCoolingClick = () => {
    handlePageChange('Cooling');
  };

  const handleMaintenanceClick = () => {
    handlePageChange('Maintenance');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '10px' }}>
        <Card style={{ display: 'flex', alignItems: 'center' }}>
          <Card.Img variant="top" src="assets/burners.jpg" style={{ width: '300px', objectFit: 'cover' }} />
          <Card.Body style={{ textAlign: 'center', marginLeft: '10px' }}>
            <Card.Title>Heating</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={handleHeatingClick}>Go to Heating</Button>
          </Card.Body>
        </Card>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <Card style={{ display: 'flex', alignItems: 'center' }}>
          <Card.Img variant="top" src="assets/ac.jpg" style={{ width: '300px', objectFit: 'cover' }} />
          <Card.Body style={{ textAlign: 'center', marginLeft: '10px' }}>
            <Card.Title>Cooling</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={handleCoolingClick}>Go to Cooling</Button>
          </Card.Body>
        </Card>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <Card style={{ display: 'flex', alignItems: 'center' }}>
          <Card.Img variant="top" src="assets/maintenance.jpg" style={{ width: '300px', objectFit: 'cover' }} />
          <Card.Body style={{ textAlign: 'center', marginLeft: '10px' }}>
            <Card.Title>Preventative Maintenance</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={handleMaintenanceClick}>Go to Maintenance</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Services;