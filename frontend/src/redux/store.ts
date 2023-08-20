import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./features/user/usersFeature.ts";
import { authApi } from "./features/auth/authFeature.ts";
import authReducer from "./features/auth/authSlice";

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
