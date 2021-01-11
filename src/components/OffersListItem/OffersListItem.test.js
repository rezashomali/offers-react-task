import { render } from "@testing-library/react";
import OffersListItem from "./OffersListItem";

test("offersListItem snapshot", () => {
  const data = {
    id: "2436432a-e1d5-4649-bece-f98834f6ee1d-XJAR",
    image:
      "//fileadmin/files/global/user_upload/fleet/png/630x360/bmw-x7-m50d-5d-white-2019.png",
    name: "BMW X7 M50",
    price: 797.97,
  };
  const container = render(<OffersListItem offer={data} />);
  expect(container.firstChild).toMatchSnapshot();
});
