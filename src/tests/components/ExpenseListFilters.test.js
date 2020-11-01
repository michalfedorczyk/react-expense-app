import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import expenses from "../fixtures/expenses";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render expense list filters with alt data correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should ", () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "New text";
  wrapper.find("input").simulate("change", { target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.find("option").at(1).simulate("change", { target: { value } });
  expect(sortByDate).value.toBe(value);
});

test("should sort by amount", () => {});

test("should handle date changes", () => {});

test("should handle focus changes", () => {});
