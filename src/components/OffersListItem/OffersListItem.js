import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  carName: {
    height: "40px",
  },
  carImage: {
    width: "80%",
    margin: "auto",
    height: "auto",
  },
});

const OffersListItem = ({ offer }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component="img"
          className={classes.carImage}
          alt={offer.name}
          height="120"
          image={
            offer.image
              ? `https://www.sixt.de${offer.image}`
              : "https://www.sixt.com/fileadmin/files/global/user_upload/fleet/png/350x200/iveco-daily-kasten-weiss-sx-2015.png"
          }
          title={offer.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.carName}
          >
            {offer.name}
          </Typography>
        </CardContent>

        <CardActions>
          <Typography variant="subtitle2" color="textSecondary" component="h2">
            {`€ ${offer.price} day`}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default OffersListItem;
