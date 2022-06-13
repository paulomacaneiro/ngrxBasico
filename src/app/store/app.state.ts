import { createAction, createReducer, on } from '@ngrx/store';

export interface IAppState {
  counter: number;
}

export const appInitialState: IAppState = {
  counter: 2,
};

export const incrementaContadorAction = createAction(
  '[App] INCREMENTA_CONTADOR'
);
export const decrementaContadorAction = createAction(
  '[App] DECREMENTA_CONTADOR'
);

export const appReducer = createReducer(
  appInitialState,
  on(incrementaContadorAction, (state) => ({
    ...state,
    counter: state.counter + 1,
  })),
  on(decrementaContadorAction, (state) => ({
    ...state,
    counter: state.counter - 1,
  }))
);
