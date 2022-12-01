import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './pcsrt.jpg';


function BasicExample() {
  return (
    <div class="cd" id="cd">
{[
  'Dark',
].map((variant) => (
  <Card
    bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '14rem' }}
    className="mb-2"
  >
    {/* <Card.Header>Header</Card.Header> */}
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>Name :</Card.Title>
  <Card.Text>
    Andre Tamboto
  </Card.Text>
  <Card.Title>Age :</Card.Title>
  <Card.Text>
    20
  </Card.Text>
  <Card.Title>Gender :</Card.Title>
  <Card.Text>
    Man
  </Card.Text>
    </Card.Body>
  </Card>
))}
</div>
  );
}

export default BasicExample;