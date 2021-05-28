import React, { Component } from "react";
import Button from "../components/Button";
import { connect } from "react-redux";
import {
  incrementCount,
  decrementCount,
  resetCount,
  addCount,
  minusCount,
  multCount,
  subtrCount,
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
  handleMinus = () => {
    this.setState({ color: getRandomColor() });
    this.props.onMinusCount(this.props.count, this.state.value);
    this.setState({
      value: 0,
    });
  };
  handleMult = () => {
    this.setState({ color: getRandomColor() });
    this.props.onMultCount(this.props.count, this.state.value);
    this.setState({
      value: 0,
    });
  };
  handleSubtr = () => {
    this.setState({ color: getRandomColor() });
    this.props.onSubtrCount(this.props.count, this.state.value);
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
        <h1 style={{ color: this.state.color }}>COUNT: {count}</h1>
        <div className="input">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </div>
        <div className="buttons">
          <div className="incr-decr">
            <Button action={this.handleBtnActionIncrement} buttonTitle="+1" />
            <Button action={this.handleBtnActionDecrement} buttonTitle="-1" />
          </div>
          <div className="oper">
            <Button action={this.handleAdd} buttonTitle="+" />
            <Button action={this.handleMinus} buttonTitle="-" />
            <Button action={this.handleMult} buttonTitle="x" />
            <Button action={this.handleSubtr} buttonTitle="/" />
          </div>
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
    onMinusCount: (count, val) => {
      dispatch(minusCount(count, val));
    },
    onMultCount: (count, val) => {
      dispatch(multCount(count, val));
    },
    onSubtrCount: (count, val) => {
      dispatch(subtrCount(count, val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
