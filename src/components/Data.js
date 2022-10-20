import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Data = (props) => {
  const { person } = props;
  return (
    <Row className="justify-content-center">
      <Col className="" sm="8">
        <div className="rectangle p-2 ">
          {person.length ? (
            person.map((person) => {
              return (
                <div key={person.id} className="d-flex border-bottom m-3">
                  <img src={person.img} className="img-avatar" alt="" />
                  <div className="px-3">
                    <p className="d-inline fs-5">{person.name}</p>
                    <p className="fs-6">{person.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center ">لا يوجد مواعيد اليوم</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Data;
