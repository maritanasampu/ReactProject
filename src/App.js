import React from 'react';
import './App.scss';
import { Login, Register } from "./componenets/login/index.jsx"

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoginActive : true,
    };
  }

  render() {
    const { isLoginActive } = this.state;
    return(
        <div className="app">
          <div className="login">
            <div className="container">
                {isLoginActive && <Login containerRef={(ref) => this.current = ref}/>}
                {!isLoginActive && <Register containerRef={(ref) => this.current = ref}/>}
            </div>
            <RightSide current={current} containerRef={ref => this.rightSide = ref}/>
          </div>
        </div>
    )
  }
}

const RightSide = props => {
  return (
      <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
        <div className="inner-container">
          <div className="text">{props.current}</div>
        </div>
      </div>
  );
};

export default App;
