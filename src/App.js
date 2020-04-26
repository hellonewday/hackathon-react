import React, { useEffect } from "react";
import Chart from "./components/Chart";
import { Container, Typography, AppBar, Toolbar } from "@material-ui/core";
import "./App.css";
// import Register from "./components/Register";
import moment from "moment";
// import Editor from "./components/Editor";

function App() {
  useEffect(() => {
    console.log("Hello");
    moment.locale("vi");
    let startDate = new Date(moment().format("l"));
    console.log(startDate.getTime());
    let endDate = new Date("5/30/2020");
    console.log(endDate.getTime());
    let duration = (endDate - startDate) / (1000 * 3600 * 24);

    let month = parseInt(Math.random()) ? 31 : 30;

    let durationRemainder = duration % month;
    console.log(month);
    console.log(
      `You have estimately ${parseInt(
        duration / month
      )} month(s) and ${durationRemainder} day(s) left`
    );
  }, []);
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6">Thống kê COVID-19 tại Việt Nam</Typography>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Chart />
      </Container>
    </div>
  );
}

export default App;
