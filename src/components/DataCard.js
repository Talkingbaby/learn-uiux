import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    width: 275,
    // height: '20rem',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginLeft: '2rem',
    // marginRight: '2rem',
  },
  title: {
    fontSize: '1.5rem',
    color: theme.palette.text.secondary,
  },
});

function DataCard(props) {
  const { classes, ui } = props;

  return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            {ui.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={ui.url} dense>Learn More</Button>
        </CardActions>
      </Card>
  );
}

DataCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataCard);