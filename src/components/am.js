import Card from 'react-bootstrap/Card';

function BgColorExample() {
  return (
    <div class="abm" id="abm">
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
          style={{ width: '44rem' }}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title><h1>ABOUT ME<br></br><br></br></h1></Card.Title>
            <Card.Text><h5>
        "I'am a student collage of Computer science at Klabat University. <br></br><br></br>
        I like technology because technology is constantly evolving all the time. <br></br><br></br>
        I am interested in many things. I'm interested in programming, <br></br><br></br>
        I'm interested in physics, I'm interested in math,
         and I'm interested in <br></br><br></br>astronomy.
          I also like history and stories of ancient myths.<br></br><br></br>
       I like to watch movies like historical, sci-fi, horror and also action movies."
       <br></br><br></br></h5>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BgColorExample;