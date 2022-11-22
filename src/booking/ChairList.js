import React, { Component } from "react";
import { connect } from "react-redux";
import Chair from "./Chair";

class ChairList extends Component {
  render() {
    const { chairList } = this.props;

    return (
      <div>
        {chairList.map((item) => {
          return (
            <div key={item.hang} className="d-flex">
              <p className="p-3 text-white" style={{ width: "45px" }}>
                {item.hang}
              </p>
              <div className="row">
                {item.danhSachGhe.map((chair) => {
                  return (
                    <div key={chair.soGhe} className="col-1">
                      <Chair chair={chair} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairList: state.chair.chairList,
  };
};

export default connect(mapStateToProps)(ChairList);
