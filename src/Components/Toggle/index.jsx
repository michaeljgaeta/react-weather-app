import React from "react";
import "./index.css";

class Toggle extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: true
    };
  }

  switchToggle = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <div className="toggle">
        <p className="degrees">°C</p>
        <label className="switch">
          <input type="checkbox" /> <div></div>
        </label>
        <p className="degrees">°F</p>
        {/* <button onClick={this.switchToggle}>
          <img
            src={(this.state.clicked && "./toggle-c.png") || "./toggle-f.png"}
            alt="temperature"
          />
        </button> */}
      </div>
    );
  }
}

export default Toggle;
