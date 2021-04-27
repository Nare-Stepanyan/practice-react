import React, { Component } from "react";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class MovingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      count: 0,
      color: "red",
    };
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
      color: getRandomColor(),
      clicked: true,
    });
  };

  render() {
    return (
      <div
        className={this.state.clicked ? "box animation" : "box"}
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}>
        {this.state.count}
      </div>
    );
  }
}

export default MovingBox;
