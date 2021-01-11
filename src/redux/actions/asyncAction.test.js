import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect"; // You can use any testing library
import * as actions from "./actions";
import * as types from "./actionTypes";

describe("async actions test", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_OFFERS_SUCCESS when fetching offers has been done", () => {
    fetchMock.getOnce("/offers", {
      payload: [],
    });

    const expectedActions = ["FETCH_OFFERS_SUCCESS"];
    const store = mockStore([]);

    return store.dispatch(actions.fetchOffers()).then(() => {
      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
