import { login, startLogin, logout, startLogout } from "../../actions/auth";

test("should setup login expense action object", () => {
  const uid = "132123";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid,
  });
});

test("should setup logout expense action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT",
  });
});
