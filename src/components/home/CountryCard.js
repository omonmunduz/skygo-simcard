import React from 'react';
import { Link } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '345px',
    minWidth: '345px',
    margin: '10px',
  },
  media: {
    height: '140px',
  },
});

const CountryCard = (props) =>  {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.item.imgUrl}
          title={props.item.country}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.country}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.remarks}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
export default CountryCard;
