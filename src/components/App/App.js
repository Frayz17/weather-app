import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Forecast from 'components/Forecast';
import CityList from 'components/CityList';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import './style/globalStyle.css';
import appStyle from './style';
import 'typeface-roboto';

// import grey from '@material-ui/core/colors/grey';
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: grey[500]
//     },
//     secondary: {
//       main: '#11cb5f'
//     }
//   }
// });

function App() {
  const classes = appStyle();

  return (
    <Box className={classes.root}>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <Header />
      <Container style={{ flexGrow: 1 }}>
        <Switch>
          <Route exact path={'/'}>
            <Forecast />
            <CityList />
          </Route>
        </Switch>
      </Container>
      <Footer />
      {/* </ThemeProvider> */}
    </Box>
  );
}

export default App;
