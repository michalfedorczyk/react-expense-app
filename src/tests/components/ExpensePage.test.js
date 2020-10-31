import React from "react";
import { shallow } from "enzyme";
import ExpensePage from "../../components/ExpensePage";

test("should render ExpensePage correctly", () => {
  const wrapper = shallow(<ExpensePage />);
  expect(wrapper).toMatchSnapshot();
});
