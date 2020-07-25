import React from 'react';
import './App.css';
import { CssBaseline, Grid } from '@material-ui/core/';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <Grid>
          <NavBar />
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default App;
