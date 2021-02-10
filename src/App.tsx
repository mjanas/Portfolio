import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import Theme from "./Theme";

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Theme>
        <div className="App">
          <Header />
        </div>
      </Theme>
    </React.Fragment>
  );
}

export default App;
