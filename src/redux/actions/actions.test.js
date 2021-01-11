import * as actions from "./actions";
import * as types from "./actionTypes";

describe("actions", () => {
  it("should create an action to fetch Offers Request", () => {
    const expectedAction = {
      type: types.FETCH_OFFERS_REQUEST,
    };
    expect(actions.fetchOffersRequest()).toEqual(expectedAction);
  });
  it("should create an action to fetch Offers success", () => {
    const data = [];
    const expectedAction = {
      type: types.FETCH_OFFERS_SUCCESS,
      payload: data,
    };
    expect(actions.fetchOffersSuccess(data)).toEqual(expectedAction);
  });
  it("should create an action to fetch Offers failure", () => {
    const error = "error";
    const expectedAction = {
      type: types.FETCH_OFFERS_FAILURE,
      payload: error,
    };
    expect(actions.fetchOffersFailure(error)).toEqual(expectedAction);
  });
});
