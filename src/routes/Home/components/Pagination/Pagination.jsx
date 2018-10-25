import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { page, totalPageCount, movePage } = this.props;
    return (
      <div className="pagination-company">
        <button
          id="first"
          className="pagination-company__button"
          onClick={movePage}
        >
          First
        </button>
        <button
          id="previous"
          className="pagination-company__button"
          onClick={movePage}
        >
          Previous
        </button>
        <label>{`Page ${page} of ${totalPageCount}`}</label>
        <button
          id="next"
          className="pagination-company__button"
          onClick={movePage}
        >
          Next
        </button>
        <button
          id="last"
          className="pagination-company__button"
          onClick={movePage}
        >
          Last
        </button>
      </div>
    );
  }
}

export default Pagination;
