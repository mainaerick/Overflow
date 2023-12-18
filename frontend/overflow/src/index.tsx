import ReactDOM from 'react-dom'

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AppRoutes } from "./routing/AppRoutes";
import store, { persistor } from "./setup/redux/Store";
import * as _redux from './setup'
import axios from 'axios';

_redux.setupAxios(axios, store)

ReactDOM.render(
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <AppRoutes />
      </PersistGate>
    </Provider>,
  document.getElementById('root')
)
