import { getInfo } from '@/apis/authService';
import Cookies from 'js-cookie';

const { createContext, useState, useEffect } = require('react');

const StoreContext = createContext();
function StoreProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (userId) {
      getInfo({ userId })
        .then((res) => {
          setUserInfo(res.data.data);
        })
        .catch((error) => {
          console.log(error);
          _;
        });
    }
  }, [userId]);

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    Cookies.remove('userId');
    setUserInfo(null);
    window.location.reload();
  };

  return (
    <StoreContext.Provider value={{ userInfo, handleLogOut, setUserId }}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
