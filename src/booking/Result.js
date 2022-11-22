import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    const { chairSelectedList, handleDeleteChair, handlePay } = this.props;

    return (
      <div>
        <h3 className="text-white">DANH SÁCH GHẾ BẠN CHỌN</h3>
        <table className="text-white table table-bordered">
          <thead>
            <tr>
              <td>Số ghế</td>
              <td>Giá</td>
              <td>Hủy</td>
            </tr>
          </thead>
          <tbody>
            {chairSelectedList.map((item) => {
              return (
                <tr key={item.soGhe}>
                  <td>{item.soGhe}</td>
                  <td>{item.gia.toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDeleteChair(item);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td>Tổng tiền</td>
              <td>
                {chairSelectedList
                  .reduce((total, item) => total + item.gia, 0)
                  .toLocaleString()}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="text-white d-flex justify-content-end">
          <button onClick={handlePay} className="btn btn-success">
            Thanh toán
          </button>
        </div>
      </div>
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
    handleDeleteChair: (chair) => {
      dispatch({ type: "CHANGE_CHAIR", payload: chair });
    },
    handlePay: () => {
      dispatch({ type: "PAY" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
