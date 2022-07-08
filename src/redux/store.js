import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
} from "redux-persist"
import storage from 'redux-persist/lib/storage';

const persistConfig={
  key:'root',
  version:1,
  storage,
}
const persistedReducer=persistReducer(persistConfig,todoReducer)

const store=configureStore({
  reducer:{todoReducer:persistedReducer},
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware({
    serializableCheck:{
      ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,REGISTER],
    },
  }),
});
export default store;
