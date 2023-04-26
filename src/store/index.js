import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { movieApi } from './apis/movieApi';
import { searchMovieReducer, changeSearchTerm } from './searchMovieSlice';

export const store = configureStore({
    reducer: {
      [movieApi.reducerPath]: movieApi.reducer, //dette er en mere sikker måde, ungår "typo's"
      searchMovie: searchMovieReducer
    },
    middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
      return getDefaultMiddleware()
      .concat(movieApi.middleware);
    }
  });
  
  setupListeners(store.dispatch);
  
  
  export { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery } from './apis/movieApi';
  export {changeSearchTerm};
  