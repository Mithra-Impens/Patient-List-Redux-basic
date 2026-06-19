import { createStore } from 'redux';
import reducer from './reducer';

// ─────────────────────────────────────────
//  Store Creation
// ─────────────────────────────────────────
// createStore() takes two arguments here:
//   1. reducer  — the function that manages state changes
//   2. enhancer — the Redux DevTools extension hook
//
// window.__REDUX_DEVTOOLS_EXTENSION__ is injected by the
// Redux DevTools browser extension. The double && short-circuits:
//   • If the extension is NOT installed → undefined → ignored safely
//   • If it IS installed → the enhancer is applied → DevTools connect
//
// This means the app works fine without the extension installed;
// it simply won't have DevTools features.

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;