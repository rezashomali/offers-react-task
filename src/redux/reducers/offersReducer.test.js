import { offersReducer } from "./offersReducer";
import * as types from "../actions/actionTypes";

describe("offersReducer reducer", () => {
  it("should return the initial state", () => {
    expect(offersReducer(undefined, {})).toEqual({
      loading: true,
      offers: [],
      error: "",
    });
  });

  it("should handle FETCH_OFFERS_REQUEST", () => {
    expect(
      offersReducer([], {
        type: types.FETCH_OFFERS_REQUEST,
      })
    ).toEqual({
      loading: true,
    });
  });

  it("should handle FETCH_OFFERS_SUCCESS", () => {
    expect(
      offersReducer([{ loading: true, offers: [], error: "" }], {
        type: types.FETCH_OFFERS_SUCCESS,
        payload: [],
      })
    ).toEqual({
      loading: false,
      offers: [],
      error: "",
    });
  });

  it("should handle FETCH_OFFERS_FAILURE", () => {
    expect(
      offersReducer([{ loading: true, offers: [], error: "" }], {
        type: types.FETCH_OFFERS_FAILURE,
        payload: "error",
      })
    ).toEqual({
      loading: false,
      offers: [],
      error: "error",
    });
  });
});
