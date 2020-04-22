import React, { Component } from "react";
import Axios from "axios";
import moment from "moment";
import { Line } from "react-chartjs-2";

moment.locale("vi");
export default class Chart extends Component {
  state = {
    cases: [],
    dates: [],
    recovered: [],
  };
  componentDidMount() {
    Axios.get(
      "https://api.ipdata.co/?api-key=77c1ffbb8a17b90760b1bf78304ae94541c6300de1908abd7ea9a524"
    ).then((response) => {
      function getRecovered() {
        return Axios.get(
          `https://api.covid19api.com/dayone/country/${response.data.country_name.toLowerCase()}/status/confirmed`
        );
        function getRecovered() {
          return Axios.get(
            `https://api.covid19api.com/dayone/country/${response.data.country_name.toLowerCase()}/status/confirmed`
          );
      }
    });
  }
  render() {
    return (
      <div style={{ width: 1000 }}>
        {/* <Line
          width={500}
          height={200}
          data={{
            labels: this.state.dates,
            datasets: [
              {
                label: "COVID - 19 Vietnam",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                data: this.state.cases,
              },
            ],
          }}
        /> */}
      </div>
    );
  }
}
