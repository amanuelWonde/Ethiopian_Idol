import React, { createContext, useContext, useReducer } from "react";

const ApiContext = createContext(null);
const DispatchApi = createContext(null);

export default function ApiProvider({ children }) {
  const [api, dispatch] = useReducer(videoReducer, currentApi); // Fix the typo here
  // console.log(deliveryBoy)
  return (
    <ApiContext.Provider value={api}>
      <DispatchApi.Provider value={dispatch}>{children}</DispatchApi.Provider>
    </ApiContext.Provider>
  );
}

export function useApi() {
  // Change the function name to useVideo
  return useContext(ApiContext);
}

export function useApiDispatch() {
  return useContext(DispatchApi);
}

function videoReducer(api, action) {
  // Rename userReducer to videoReducer
  switch (action.type) {
    case "api": {
      return {
        url: action.api,
      };
    }
    case "deleteApi": {
      return {};
    }
    default: {
      return api;
    }
  }
}

const currentApi = {};
