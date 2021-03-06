import React from 'react';
import Navigation from './Navigation';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import grey from '@material-ui/core/colors/grey';
import headerStyle from './style';

export default function SearchAppBar() {
  const classes = headerStyle();

  return (
    <div className={classes.root}>
      <AppBar position='static' color='transparent'>
        <Container>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='open drawer'
            >
              <MenuIcon />
            </IconButton>

            <Navigation />

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: grey[700] }} />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
