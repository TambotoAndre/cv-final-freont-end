import Card from 'react-bootstrap/Card';





function Sk() {
    return (
 <div class="sk" id="sk">
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
      <Card.Title><h1>SKILLS  </h1></Card.Title>
      <Card.Text> 
      <br></br>
      <h4>C,C++,C#<br></br></h4>
       <h4>HTML,CSS,JS<br></br></h4>
       <h4>JAVA<br></br></h4>
       <h4>PYTHON<br></br></h4>
       <h4>SQL<br></br></h4>
       <h4>FIGMA<br></br></h4>
      </Card.Text>
    </Card.Body>
  </Card>
))}
</div>

      
    );
  }
  
  export default Sk;