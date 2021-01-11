import axios from "axios";

import {
  FETCH_OFFERS_REQUEST,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_FAILURE,
} from "./actionTypes";

export const fetchOffersRequest = () => ({
  type: FETCH_OFFERS_REQUEST,
});

export const fetchOffersSuccess = (offers) => ({
  type: FETCH_OFFERS_SUCCESS,
  payload: offers,
});

export const fetchOffersFailure = (error) => ({
  type: FETCH_OFFERS_FAILURE,
  payload: error,
});

export const fetchOffers = () => (dispatch) => {
  dispatch(fetchOffersRequest);
  return axios
    .get("https://cdn.sixt.io/codingtask/offers.json")
    .then((res) => {
      const offers = res.data.offers.map((item) => ({
        id: item.id,
        name: item.vehicleGroupInfo.modelExample.name,
        price: item.prices.totalPrice.amount.value,
        image: item.images.medium,
      }));
      dispatch(fetchOffersSuccess(offers));
    })
    .catch((error) => {
      dispatch(fetchOffersFailure(error.message));
    });
};
