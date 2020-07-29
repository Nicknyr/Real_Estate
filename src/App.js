import React from 'react';
import Home from './Home/Home';
import Search from './Search/Search';
import SignInModal from './SignIn';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PaginationLink from './Search/MaterialPagination';
import Map from './Search/Map';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/signin">
            <SignInModal />
          </Route>
          <Route exact path="/pagination">
            <PaginationLink />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
