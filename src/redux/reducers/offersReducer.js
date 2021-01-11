import {
  FETCH_OFFERS_REQUEST,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  loading: true,
  offers: [],
  error: "",
};

export const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFERS_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_OFFERS_SUCCESS: {
      return {
        loading: false,
        offers: action.payload,
        error: "",
      };
    }
    case FETCH_OFFERS_FAILURE: {
      return { loading: false, offers: [], error: action.payload };
    }
    default:
      return state;
  }
};
