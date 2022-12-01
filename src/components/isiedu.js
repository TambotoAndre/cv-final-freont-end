
import Card from 'react-bootstrap/Card';


function Isiedu() {
    return (

      <div class="edu" id="edu">
{[
  // 'Primary',
  // 'Secondary',
  // 'Success',
  // 'Danger',
  // 'Warning',
  // 'Info',
  // 'Light',
  'Dark',
].map((variant) => (
  <Card
    bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '78.9rem' }}
    className="mb-2"
  >
    {/* <Card.Header>Header</Card.Header> */}
    <Card.Body>
      <Card.Title><h1>EDUCATION</h1></Card.Title>
      <Card.Text> 
      <br></br>
      <h4>2013 : RANOTANA ADVENTIST EDUCATION SCHOOL MANADO<br></br></h4>
       <h4>2016 : RANOTANA ADVENTIST EDUCATION SCHOOL MANADO<br></br></h4>
       <h4>2016 : RANOTANA ADVENTIST EDUCATION SCHOOL MANADO<br></br></h4>
       <h4>2019 : KLABAT ADVENTIST ACADEMY MANADO<br></br></h4>
       <h4>Now  : KLABAT UNIVERSITY<br></br></h4> <br></br>
      </Card.Text>
    </Card.Body>
  </Card>
))}
</div>




    );
  }
  
  export default Isiedu;