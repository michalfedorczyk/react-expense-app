import moment from "moment";

export default [
  {
    id: "1",
    description: "Gum",
    note: "Pies Gum",
    amount: 123,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Pies",
    note: "Pies Pies",
    amount: 1222,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Jamnik",
    note: "Pies Jamnik",
    amount: 1,
    createdAt: moment(0).add(4, "month").valueOf(),
  },
];
