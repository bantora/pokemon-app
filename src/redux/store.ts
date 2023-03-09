import { configureStore } from '@reduxjs/toolkit' 

import {pokemonApi} from '../api/poke-api';
import {pokemonSprites} from '../api/poke-sprites';


export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [pokemonSprites.reducerPath]: pokemonSprites.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware, pokemonSprites.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch