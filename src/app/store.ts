import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import projectsReducer from '../reducers/projects';
import technologiesSlice from '../reducers/sort';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    technologies: technologiesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
