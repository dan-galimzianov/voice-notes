import { Provider, useDispatch, useSelector } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadFromLocalStorage, saveToLocalStorage } from './lib/localStorage';
import { notesSlice } from 'entities/Notes';
import { ReactNode } from 'react';

const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: combineReducers({
    notesStore: notesSlice.reducer
  }),
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState())
});

export const RTKProvider = ({children}: {children: ReactNode}) => (
    <Provider store={store}>{children}</Provider>
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

