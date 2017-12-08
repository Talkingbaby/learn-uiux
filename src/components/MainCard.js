import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    width: 275,
    height: '15rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  title: {
    fontSize: '5rem',
    color: theme.palette.text.secondary,
  },
});

function MainCard(props) {
  const { classes, choice } = props;

  return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            {choice}
          </Typography>
        </CardContent>
      </Card>
  );
}

MainCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainCard);