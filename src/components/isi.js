
import Card from 'react-bootstrap/Card';


function Isi() {
    return (

<div id="info">
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
      <Card.Title><h1>PERSONAL INFORMATION</h1></Card.Title>
      <Card.Text> 
      <br></br>
      <h4>Name : Andre Tamboto <br></br></h4>
        <h4>Day of Birth : Tondano, 13 Maret 2002 <br></br></h4>
        <h4>Addres : Batukota, Manado <br></br></h4>
        <h4>Email : s22020021@student.unklab.ac.id <br></br></h4>
        <h4>Phone/Whatsup : +62 895 3972 44713 <br></br></h4> <br></br>
    
      </Card.Text>
    </Card.Body>
  </Card>
))}
</div>



    );
  }
  
  export default Isi;