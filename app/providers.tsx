"use client";

import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store"; // Ensure persistor is exported here
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate
        // loading={<div>Loading...</div>}
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
