import Form from 'react-bootstrap/Form';

function Entry() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="address" placeholder="Enter Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="city" placeholder="Enter City" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicState">
        <Form.Label>State</Form.Label>
        <Form.Control type="state" placeholder="Enter State" />
      </Form.Group> 
    </Form>
  )
}

export default Entry