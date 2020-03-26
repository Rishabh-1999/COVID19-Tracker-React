import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import DataHeader from "../DataHeader/DataHeader";
import List from "../List/List";

class Mainpart extends Component {
  state = {
    summary: Object,
    data: []
  };

  componentDidMount() {
    this.getData();
  }

  async addTotal() {
    var d = this.state.data;
    d.map(s => {
      s.total = s.confirmedCasesIndian + s.confirmedCasesForeign;
      return s;
    });
    this.setState({ data: d });
  }

  async getData() {
    await axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then(res => {
        return res.data.data;
      })
      .then(res => {
        console.log(res);
        this.setState({ summary: res.summary });
        this.setState({ data: res.regional });
        this.addTotal();
      });
  }

  render() {
    return (
      <Container>
        <DataHeader summary={this.state.summary} />
        <List getData={this.getData} states={this.state.data} />
      </Container>
    );
  }
}

export default Mainpart;
