import authReducer from "../../reducers/auth";

test("should setup default auth reducers values", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});

test("should set uid for login", () => {
  const uid = "1231313";
  const action = { type: "LOGIN", uid };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should clear uid for logout", () => {
  const action = { type: "LOGOUT" };
  const state = authReducer({ uid: "afaf" }, action);
  expect(state).toEqual({});
});
