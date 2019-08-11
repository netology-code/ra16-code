import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import AuthProvider from './components/AuthProvider/AuthProvider';
import ToolbarConsumer from './components/Toolbar/ToolbarConsumer';
import ToolbarFunctional from './components/Toolbar/ToolbarFunctional';
import ToolbarClassBased from './components/Toolbar/ToolbarClassBased';

function App() {
  return (
    <AuthProvider>
      <Fragment>
        <ToolbarConsumer />
        <ToolbarFunctional />
        <ToolbarClassBased />
      </Fragment>
    </AuthProvider>
  );
}

export default App;