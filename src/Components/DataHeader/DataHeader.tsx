import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Dataheader(props: any) {
  return (
    <Container
      style={{
        fontSize: "150%",
        fontStyle: "bold",
        margin: "10px 0px 10px 0px",
        background: "#FFFFFF",
      }}
    >
      <Row>
        <Col>
          <b>Total</b> : {props.summary.total} &nbsp;
          <i className="fa fa-arrow-up"></i>
          {props.todays.cases}
        </Col>
        <Col>
          <b>Recovered</b> : {props.summary.discharged} &nbsp;
          <i className="fa fa-arrow-up" style={{ color: "green" }}></i>
          {props.todays.recovered}
        </Col>
        <Col>
          <b>Deaths</b> : {props.summary.deaths}
          &nbsp;
          <i className="fa fa-arrow-up" style={{ color: "red" }}></i>
          {props.todays.death}
        </Col>
      </Row>
    </Container>
  );
}

export default Dataheader;
