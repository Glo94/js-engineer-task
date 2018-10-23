import React, { Component } from "react";
import Filter from "./components/Filter/Filter";
import Result from "./components/Result/Result";

class Home extends Component {
  state = {
    cars: []
  };

  componentWillMount() {
    const carsAPI = "http://localhost:3001/cars";
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
          cars: [...data.cars]
        }))
      );
  }

  render() {
    return (
      <div className="home-company container-fluid">
        <div className="row m-0">
          <div className="col-12 col-sm-4">
            <Filter cars={this.state.cars} />
          </div>
          <div className="col-12 col-sm-8">
            <Result />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
