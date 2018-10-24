import React, { Component } from "react";
import Filter from "./components/Filter/Filter";
import Result from "./components/Result/Result";

class Home extends Component {
  state = {
    cars: [],
    colors: [],
    manufacturers: [],
    page: 1,
    totalPageCount: null
  };

  componentWillMount() {
    const carsAPI = `http://localhost:3001/cars?page=${this.state.page}`;
    const colorsAPI = "http://localhost:3001/colors";
    const manufacturersAPI = "http://localhost:3001/manufacturers";

    let init = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default"
    };

    fetch(carsAPI, init)
      .then(response => response.json())
      .then(data =>
        this.setState(prevState => ({
          cars: [...data.cars],
          totalPageCount: data.totalPageCount
        }))
      );
    fetch(colorsAPI, init)
      .then(response => response.json())
      .then(data =>
        this.setState(prevState => ({
          colors: [...data.colors]
        }))
      );
    fetch(manufacturersAPI, init)
      .then(response => response.json())
      .then(data =>
        this.setState(prevState => ({
          manufacturers: [...data.manufacturers]
        }))
      );
  }

  render() {
    const { cars, colors, manufacturers, totalPageCount, page } = this.state;
    return (
      <div className="home-company">
        <div className="home-company__row">
          <div className="column column--4">
            <Filter cars={cars} colors={colors} manufacturers={manufacturers} />
          </div>
          <div className="column column--8">
            <Result cars={cars} totalPageCount={totalPageCount} page={page} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
