import { render } from "../../test-utils";
import OffersList from "./OffersList";

it("OffersList snapshot", () => {
  const initialState = {
    loading: true,
    offers: [],
    error: "",
  };

  const container = render(<OffersList />, { initialState: initialState });
  expect(container.firstChild).toMatchSnapshot();
});
