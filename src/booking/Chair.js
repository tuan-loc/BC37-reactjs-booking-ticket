import React, { Component } from "react";
import clsx from "clsx";
import { connect } from "react-redux";

class Chair extends Component {
  render() {
    const { chairSelectedList, chair, handleSelectedChair } = this.props;

    return (
      <button
        onClick={() => {
          handleSelectedChair(chair);
        }}
        className={clsx("ghe mt-2", {
          booked: chair.daDat,
          booking: chairSelectedList.find((item) => item.soGhe === chair.soGhe),
        })}
        disabled={chair.daDat}
      >
        {chair.soGhe}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairSelectedList: state.chair.chairSelectedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectedChair: (chair) => {
      dispatch({ type: "CHANGE_CHAIR", payload: chair });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chair);
