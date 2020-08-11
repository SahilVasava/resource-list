import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { CssBaseline, Grid } from '@material-ui/core/';
import Home from './container/Home';
import Create from './container/Create';
import NavBar from './components/NavBar';
import AuthContextProvider from './contexts/authContext';
import { ThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'

const App = () => {

  const theme = createMuiTheme({
    overrides: {
      MuiAppBar: {
        /* colorPrimary: {
          backgroundColor: "#333"
        } */

      }
    },
    palette: {
      type: 'dark',
      /* primary: {
        // main: '#3f50b5',
        dark: '#000',
        light: '#fff'
      },
      secondary: {
        // main: '#f44336',
        main: '#ba000d',
      }, */
      /* background: {
        paper: '#303030'
      } */
    },
  });

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <div className="App">
        <AuthContextProvider>
          <Router>
            <Grid container>
              <NavBar />
            </Grid>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
            </Switch>

          </Router>
        </AuthContextProvider>
      </div>

    </ThemeProvider>
  );
}

export default App;
