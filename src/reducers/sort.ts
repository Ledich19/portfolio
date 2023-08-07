import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  [key: string]: boolean;
};

const initialState: InitialState = {
  html: false,
  css: false,
  js: false,
  typescript: false,
  REST: false,
  scss: false,
  React: false,
  Redux: false,
  GraphQl: false,
  NodeJs: false,
  WebSocket: false,
  vite: false,
  Prisma: false,
  Nest: false,
};

const technologiesSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setTechnology(
      state,
      actions: {
        type: string;
        payload: {
          name: string;
          checked: boolean;
        };
      }
    ) {
      return { ...state, [actions.payload.name]: actions.payload.checked };
    },
  },
});

export const { setTechnology } = technologiesSlice.actions;
export default technologiesSlice.reducer;
