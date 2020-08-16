import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import './App.css';
import { CssBaseline, Grid } from '@material-ui/core/';
import Home from './container/Home';
import Create from './container/Create';
import List from './container/List';
import NavBar from './components/NavBar';
import AuthContextProvider from './contexts/authContext';
import { ThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'

const App = () => {

  // const defaultTheme = createMuiTheme();
  const theme = createMuiTheme({
    /* mixins: {
      gutters: (styles = {}) => ({
        paddingLeft: defaultTheme.spacing.unit * 2,
        paddingRight: defaultTheme.spacing.unit * 2,
        ...styles,
        [defaultTheme.breakpoints.up('sm')]: {
          paddingLeft: defaultTheme.spacing.unit * 7,
          paddingRight: defaultTheme.spacing.unit * 7,
          ...styles[defaultTheme.breakpoints.up('sm')],
        },
      }),
    }, */
    overrides: {
      /* MuiAppBar: {
        colorPrimary: {
          backgroundColor: "#333"
        }

      }, */
      /* MuiToolbar: {
        gutters: {
          [defaultTheme.breakpoints.up('sm')]: {
            paddingLeft: '30px',
            paddingRight: '16px',
          },
        },
      }, */

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
              <Route exact path="/" component={Home} />
              <Route exact path="/:username/list/:urlTitle" component={List} />
              <PrivateRoute path="/create" component={Create} />
            </Switch>

          </Router>
        </AuthContextProvider>
      </div>

    </ThemeProvider>
  );
}

export default App;
