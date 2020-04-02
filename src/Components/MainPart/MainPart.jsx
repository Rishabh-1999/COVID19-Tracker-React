import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import DataHeader from "../DataHeader/DataHeader";
import List from "../List/List";
import FavListItem from "../FavStates/FavStates";

class Mainpart extends Component {
  state = {
    summary: Object,
    states: [],
    favstates: []
  };

  componentDidMount() {
    this.addToFav.bind(this);
    this.getData();
  }

  async addTotalAndFav(d) {
    d.map(s => {
      s.fav = this.state.fav.find(loc => loc === s.loc) !== undefined;
      s.total = s.confirmedCasesIndian + s.confirmedCasesForeign;
      return s;
    });
    return d;
  }

  async checkHighLow(res) {
    let high = 0;
    res.map(state => {
      if (high < state.total) {
        high = state.total;
      }
      return state;
    });
    /* Break into  three modules starting from 1 to highest in country 
            ----------  highest  ------------- middle --------- low(1)
                red    divider_h    yellow     divider_m     
        */
    let divider_h = high - (high - 1) / 3,
      divider_m = high - 2 * ((high - 1) / 3);
    res.map(state => {
      if (state.total >= divider_h) state.high = true;
      else if (state.total > divider_m) state.medium = true;
      return state;
    });
    return res;
  }

  async manipulateData(res) {
    res = await this.checkHighLow(await this.addTotalAndFav(res));
    let temp_states = this.state.states;
    let temp_favstates = this.state.favstates;

    for (let i = 0; i < res.length; i++) {
      if (res[i].fav) {
        temp_favstates.push(res[i]);
      } else {
        temp_states.push(res[i]);
      }
    }
    this.setState({ states: temp_states, favstates: temp_favstates });
  }

  async getData() {
    let fav_temp = JSON.parse(
      await window.localStorage.getItem("covidstatesfav")
    );
    if (fav_temp === undefined || fav_temp === null) this.setState({ fav: [] });
    else this.setState({ fav: fav_temp });
    await axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then(res => {
        return res.data.data;
      })
      .then(res => {
        this.setState({ summary: res.summary });
        this.manipulateData(res.regional);
        //this.setState({ data: res.regional });
      });
  }

  async addToFav(event) {
    this.state.fav.push(event);
    window.localStorage.setItem(
      "covidstatesfav",
      JSON.stringify(this.state.fav)
    );
    window.location.reload();
  }

  render() {
    return (
      <Container>
        <DataHeader summary={this.state.summary} />
        <FavListItem states={this.state.favstates} getData={this.getData} />
        <List
          states={this.state.states}
          getData={this.getData}
          addToFav={this.addToFav.bind(this)}
        />
      </Container>
    );
  }
}

export default Mainpart;
