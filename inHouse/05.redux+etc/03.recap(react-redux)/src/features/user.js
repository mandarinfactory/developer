import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  // createSlice를 사용해서(toolkit)보다 쉽게 reducer를 생성할 수 있다.
  name: "user",
  initialState: { value: initialStateValue }, // 초기state값(=기본 useState)
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    }, //각각의 reducer들(이건 login-reducer이다.)
    logout: (state) => {
      state.value = initialStateValue;
    },
  }, // 실제로 값을 변경할때 쓰일수 있는 reducer들을 생성해 놓는다.(=setState)
});
// 여기에 user에서 쓸 useState(reducer)를 만든다!

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;