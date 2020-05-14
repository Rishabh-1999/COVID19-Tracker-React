import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import DataHeader from "../DataHeader/DataHeader";
import List from "../List/List";
import FavListItem from "../FavStates/FavStates";
import Chart from "../Chart/Chart";

class Mainpart extends Component {
  state = {
    summary: Object,
    todays: { recovered: 0, cases: 0, death: 0 },
    states: [],
    favstates: [],
    yesterday: [],
    chartData: {
      labels: [],
      datasets: [{ data: [], label: "", backgroundColor: [] }],
    },
  };

  async getRandomColor() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return "rgba(" + r + ", " + g + ", " + b + ", 0.6" + ")";
  }

  componentDidMount() {
    this.addToFav.bind(this);
    this.getDataOfLastest().then(() => {
      this.getDataOfHistory();
    });
  }

  async addTotalAndFav(d) {
    this.state.chartData.datasets[0].label = "State";
    await d.map(async (s) => {
      s.fav = this.state.fav.find((loc) => loc === s.loc) !== undefined;
      this.state.chartData.labels.push(s.loc);
      this.state.chartData.datasets[0].data.push(s.totalConfirmed);
      this.state.chartData.datasets[0].backgroundColor.push(
        await this.getRandomColor()
      );
      return s;
    });
    return d;
  }

  async checkHighLow(res) {
    let high = 0;
    res.map((state) => {
      if (high < state.totalConfirmed) {
        high = state.totalConfirmed;
      }
      return state;
    });
    /* Break into  three modules starting from 1 to highest in country 
            ----------  highest  ------------- middle --------- low(1)
                red    divider_h    yellow     divider_m     
        */
    let divider_h = high - (high - 1) / 3,
      divider_m = high - 2 * ((high - 1) / 3);
    res.map((state) => {
      if (state.totalConfirmed >= divider_h) state.high = true;
      else if (state.totalConfirmed > divider_m) state.medium = true;
      return state;
    });
    return res;
  }

  async findIncrease(res) {
    let ttodays = this.state.todays;
    res.map((state) => {
      let found = this.state.yesterday.find((s) => s.loc === state.loc);
      state.increase = state.totalConfirmed - found.totalConfirmed;
      ttodays.cases += state.increase;
      ttodays.recovered = state.discharged - found.discharged;
      ttodays.death = state.deaths - found.deaths;
    });
    this.setState({ todays: ttodays });
    return res;
  }

  async manipulateData(res) {
    res = await this.findIncrease(
      await this.checkHighLow(await this.addTotalAndFav(res))
    );
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

  async getDataOfHistory() {
    let fav_temp = JSON.parse(
      await window.localStorage.getItem("covidstatesfav")
    );
    if (fav_temp === undefined || fav_temp === null) this.setState({ fav: [] });
    else this.setState({ fav: fav_temp });
    await axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then((res) => {
        return res.data.data;
      })
      .then((res) => {
        this.setState({ summary: res.summary });
        this.manipulateData(res.regional);
        //this.setState({ data: res.regional });
      });
  }

  async getDataOfLastest() {
    await axios
      .get("https://api.rootnet.in/covid19-in/stats/history")
      .then((res) => {
        return res.data.data;
      })
      .then(async (res) => {
        this.setState({ yesterday: res[res.length - 2].regional });
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
        <DataHeader summary={this.state.summary} todays={this.state.todays} />
        <Chart chartData={this.state.chartData} />
        <FavListItem
          states={this.state.favstates}
          getDataOfHistory={this.getDataOfHistory}
        />
        <List
          states={this.state.states}
          getDataOfHistory={this.getDataOfHistory}
          addToFav={this.addToFav.bind(this)}
        />
      </Container>
    );
  }
}

export default Mainpart;
