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

          </div>
        </div>
    )
  }
}

export default App;
