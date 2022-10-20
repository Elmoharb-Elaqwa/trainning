import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Controller = (props) => {
  const { deletePersonData, putPersonData } = props;
  return (
    <Row className="justify-content-center my-3">
      <Col className="d-flex justify-content-between" sm="8">
        <button onClick={deletePersonData} className="btn-style p-2">
          مسح الكل
        </button>
        <button onClick={putPersonData} className="btn-style p-2">
          {' '}
          عرض البيانات{' '}
        </button>
      </Col>
    </Row>
  );
};

export default Controller;
