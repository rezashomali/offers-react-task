import { Grid } from "@material-ui/core";
import OffersListItem from "../OffersListItem/OffersListItem";
import { useSelector } from "react-redux";

const OffersList = () => {
  const offers = useSelector((state) => state.offers);

  return (
    <Grid container spacing={2} justify="center">
      {offers.map((offer) => (
        <OffersListItem key={offer.id} offer={offer} />
      ))}
    </Grid>
  );
};

export default OffersList;
