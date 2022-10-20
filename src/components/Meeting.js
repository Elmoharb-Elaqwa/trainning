import React from 'react';
import { Col, Row } from 'react-bootstrap';
const Meeting = (props) => {
  const { person } = props;
  return (
    <Row className="justify-content-center">
      <Col className="p-2" sm="8">
        لديك {person.length} مواعيداليوم
      </Col>
    </Row>
  );
};

export default Meeting;
