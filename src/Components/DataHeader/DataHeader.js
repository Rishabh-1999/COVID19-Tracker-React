import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Dataheader(props) {
  return (
    <Container
      style={{
        fontSize: "150%",
        fontStyle: "bold",
        margin: "10px 0px 10px 0px",
        background: "#FFFFFF"
      }}
    >
      <Row>
        <Col>Total : {props.summary.total}</Col>
        <Col>Indians : {props.summary.confirmedCasesIndian}</Col>
        <Col>Foreign : {props.summary.confirmedCasesForeign}</Col>
        <Col>Discharged : {props.summary.discharged}</Col>
        <Col>Deaths : {props.summary.deaths}</Col>
      </Row>
    </Container>
  );
}

export default Dataheader;
