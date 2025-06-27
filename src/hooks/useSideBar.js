import { useContext } from 'react';
import { SideBarContext } from '../contexts/SideBarProvider';

export const useSideBar = () => {
  const { state, dispatch } = useContext(SideBarContext);
  return { state, dispatch };
};
