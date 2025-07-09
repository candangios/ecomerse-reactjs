import { createContext, useReducer, useState } from 'react';

export const SideBarContext = createContext();
//Create a reducer function
const initState = {
  isOpen: false,
  type: null,
  detailProduct: null,
  listProductCart: null
};
const sideReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isOpen: true, type: 'LOGIN' };
    case 'COMPARE':
      return { isOpen: true, type: 'COMPARE' };
    case 'WISHLIST':
      return { isOpen: true, type: 'WISHLIST' };
    case 'CART':
      return { isOpen: true, type: 'CART' };
    case 'EXITS':
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export const SideBarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sideReducer, initState);
  return (
    <SideBarContext.Provider value={{ state, dispatch }}>
      {children}
    </SideBarContext.Provider>
  );
};
