import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  tool: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

function Nav(props) {
  const { classes } = props;
  return (
      <AppBar className={classes.root} position="static" color="default">
        <Toolbar className={classes.tool}>
          <Typography type="title" color="inherit">
            Learn UI/UX
          </Typography>
          <a href="https://github.com/Talkingbaby/learn-uiux"><i className="fa fa-github" aria-hidden="true" /></a>
        </Toolbar>
      </AppBar>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);