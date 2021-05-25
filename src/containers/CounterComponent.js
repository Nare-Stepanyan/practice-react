import React, { Component } from "react";
import Button from "../components/Button";
import { connect } from "react-redux";
import {
  incrementCount,
  decrementCount,
  resetCount,
  addCount,
} from "../actions/index";

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class CounterComponent extends Component {
  state = {
    value: 0,
    color: "#0d3b66",
  };
  handleBtnActionIncrement = () => {
    this.setState({ color: getRandomColor() });
    this.props.onIncrementClick(this.props.count);
  };

  handleBtnActionDecrement = () => {
    this.setState({ color: getRandomColor() });
    this.props.onDecrementClick(this.props.count);
  };
  handleReset = () => {
    this.setState({ color: "#0d3b66" });
    this.props.onResetClick();
  };
  handleAdd = () => {
    this.setState({ color: getRandomColor() });
    this.props.onAddCount(this.props.count, this.state.value);
    this.setState({
      value: 0,
    });
  };
  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      value,
    });
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <h1 style={{ color: this.state.color }}>Count: {count}</h1>
        <div className="input">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </div>
        <div className="buttons">
          <Button action={this.handleBtnActionIncrement} buttonTitle="+" />
          <Button action={this.handleBtnActionDecrement} buttonTitle="-" />
          <Button action={this.handleAdd} buttonTitle="add" />
          <Button action={this.handleReset} buttonTitle="reset" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: (count) => {
      dispatch(incrementCount(count));
    },
    onDecrementClick: (count) => {
      dispatch(decrementCount(count));
    },
    onResetClick: () => {
      dispatch(resetCount());
    },
    onAddCount: (count, val) => {
      dispatch(addCount(count, val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
