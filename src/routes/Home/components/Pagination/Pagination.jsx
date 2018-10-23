import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { page, totalPageCount, length } = this.props;
    const totalPage = totalPageCount / length;
    return (
      <div className="pagination-company">
        <a href="./">First</a>
        <a href="./">Previous</a>
        <label>{`Page ${page} of ${totalPage}`}</label>
        <a href="./">Next</a>
        <a href="./">Last</a>
      </div>
    );
  }
}

export default Pagination;
