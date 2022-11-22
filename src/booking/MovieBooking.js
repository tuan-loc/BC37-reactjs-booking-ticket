import React, { Component } from "react";
import ChairList from "./ChairList";
import Result from "./Result";
import "./chair.css";

export default class MovieBooking extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <div className="container">
          <h2 className="text-center fw-bold p-3 text-white">
            Đặt vé xem phim Cyber-Movie
          </h2>
          <div className="row">
            <div className="col-8">
              <div className="screen">
                <p className="position-absolute w-100 text-center mt-1">
                  Screen
                </p>
              </div>
              <ChairList />
            </div>
            <div className="col-4">
              <Result />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
