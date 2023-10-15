import Form from 'react-bootstrap/Form';

function Entry2() {
  return (
    <>

      <Form>
      <span>BLDG WIRING</span>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
      </Form>
    </>
  );
}

export default Entry2;