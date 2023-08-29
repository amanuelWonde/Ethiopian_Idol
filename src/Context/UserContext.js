import React, { createContext, useContext, useReducer } from "react";

const UserContext = createContext(null);
const DispatchUser = createContext(null);

export default function UserDataContext({ children }) {
  const [user, dispatch] = useReducer(userReducer, currentUser);
  // console.log(user)
  return (
    <UserContext.Provider value={user}>
      <DispatchUser.Provider value={dispatch}>{children}</DispatchUser.Provider>
    </UserContext.Provider>
  );
}
export function useUser() {
  return useContext(UserContext);
}

export function useUserDispatch() {
  return useContext(DispatchUser);
}
function userReducer(user, action) {
  switch (action.type) {
    case "user": {
      return {
        name: action.name,
        email: action.email,
        phone: action.phone,
        wallet: action.wallet,
      };
    }
    case "deleteUser": {
      return {};
    }
  }
}
const currentUser = {};
