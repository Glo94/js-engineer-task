import React, { Component } from "react";
import Filter from "./components/Filter/Filter";
import Result from "./components/Result/Result";

import {
  getCars,
  getColors,
  getManufacturers,
  getFilter,
  getSort,
  getMove
} from "../../js/service";

class Home extends Component {
  state = {
    cars: [],
    colors: ["All Colors"],
    manufacturers: [],
    page: 1,
    totalPageCount: null,
    valueOfSelect: {
      colors: "All Colors",
      manufacturers: "All manufacturers",
      sort: "None"
    },
    openSelect: {
      selectColors: false,
      selectSort: false,
      selectManufacturers: false
    },
    carsUrl: "http://localhost:3001/cars?page=1"
  };

  componentWillMount() {
    let cars = getCars();
    let colors = getColors();
    let manufacturers = getManufacturers();

    Promise.all([cars, colors, manufacturers]).then(result => {
      this.setState(prevState => ({
        cars: result[0].cars,
        totalPageCount: result[0].totalPageCount,
        colors: [...prevState.colors, ...result[1].colors],
        manufacturers: [...prevState.manufacturers, ...result[2].manufacturers]
      }));
    });
  }

  handleChangeSelectOption = e => {
    let colors = this.state.valueOfSelect.colors;
    let manufacturers = this.state.valueOfSelect.manufacturers;
    let sort = this.state.valueOfSelect.sort;
    let value = e.target.value;
    let id = e.target.id.split("-");

    switch (id[1].toLowerCase()) {
      case "colors":
        colors = value;
        break;
      case "sort":
        sort = value;
        break;
      case "manufacturers":
        manufacturers = value;
        break;
      default:
        break;
    }

    this.setState({
      valueOfSelect: {
        colors: colors,
        manufacturers: manufacturers,
        sort: sort
      }
    });
    let parentID = e.target.parentNode.previousSibling.id;
    let triggerClick = document.getElementById(parentID);
    triggerClick.click();
    if (parentID === "selectSort") this.sortResult(e);
  };

  resetOpenSelect = e => {
    let id = e.target.id;
    let open = this.state.openSelect;
    let initialState = {
      selectColors: "",
      selectSort: "",
      selectManufacturers: ""
    };
    Object.keys(initialState).filter(item => {
      let boolean = open[item];
      if (item === id) {
        return (initialState[item] = !boolean);
      } else {
        return (initialState[item] = false);
      }
    });
    this.setState({
      openSelect: initialState
    });
  };

  handleClickFilter = () => {
    let color = this.state.valueOfSelect.colors;
    let manufacturer = this.state.valueOfSelect.manufacturers;
    let page = this.state.page;

    let filterUrl = [
      "http://localhost:3001/cars?page=",
      "&color=",
      "&manufacturer="
    ];

    let url = filterUrl[0] + page;
    if (manufacturer !== "All manufacturers" && color === "All Colors") {
      url += filterUrl[2] + manufacturer;
    } else if (color !== "All Colors" && manufacturer === "All manufacturers") {
      url += filterUrl[1] + color;
    } else if (manufacturer !== "All manufacturers" && color !== "All Colors") {
      url += filterUrl[1] + color + filterUrl[2] + manufacturer;
    }
    let cars = getFilter(color, manufacturer, page, url);
    Promise.resolve(cars).then(result => {
      this.setState(prevState => ({
        cars: result.cars,
        totalPageCount: result.totalPageCount,
        carsUrl: url,
        valueOfSelect: {
          ...prevState.valueOfSelect,
          sort: "None"
        }
      }));
    });
  };

  movePage = e => {
    let carsUrl = this.state.carsUrl;
    let thisPage = this.state.page;
    console.log(thisPage);
    switch (e.target.id) {
      case "next":
        if (thisPage < this.state.totalPageCount) thisPage++;
        break;
      case "previous":
        if (thisPage > 1) thisPage--;
        break;
      case "first":
        thisPage = 1;
        break;
      case "last":
        thisPage = this.state.totalPageCount;
        break;
      default:
        break;
    }
    let split = carsUrl.split("&");
    let split2 = split[0].split("=");
    let newUrl = split2[0] + "=" + thisPage;
    if (split[1]) {
      newUrl += "&" + split[1];
    }
    let move = getMove(newUrl);
    console.log(newUrl);

    Promise.resolve(move).then(result => {
      this.setState({
        cars: result.cars,
        totalPageCount: result.totalPageCount,
        carsUrl: newUrl,
        page: thisPage
      });
    });
  };

  sortResult = e => {
    let url = this.state.carsUrl;
    let split = url.split("&sort=");
    let id = e.target.value.split(" - ");

    if (id[0] !== "None") {
      url = split[0] + `&sort=${id[1].substr(0, 3).toLowerCase()}`;
    } else {
      url = split[0];
    }
    console.log(url);
    let sort = getSort(url);
    Promise.resolve(sort).then(result => {
      this.setState({
        cars: result.cars,
        carsUrl: url
      });
    });

    /* this.setState(prevState => ({
      cars: [...prevState.cars],
      url: carsAPI
    })); */
  };

  render() {
    const {
      cars,
      colors,
      manufacturers,
      totalPageCount,
      page,
      valueOfSelect,
      openSelect
    } = this.state;
    return (
      <div className="home-company">
        <div className="home-company__row">
          <div className="column column--4">
            <Filter
              setStateFunction={this.handleChangeSelectOption}
              cars={cars}
              colors={colors}
              manufacturers={manufacturers}
              valueOfSelect={valueOfSelect}
              openSelect={openSelect}
              resetSelect={this.resetOpenSelect}
              handleClickFilter={this.handleClickFilter}
            />
          </div>
          <div className="column column--8">
            <Result
              setStateFunction={this.handleChangeSelectOption}
              cars={cars}
              totalPageCount={totalPageCount}
              page={page}
              valueOfSelect={valueOfSelect.sort}
              openSelect={openSelect}
              resetSelect={this.resetOpenSelect}
              movePage={this.movePage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
