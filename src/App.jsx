import { Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import { SideBarProvider } from './contexts/SideBarProvider';
import SideBar from './components/SideBar/SideBar';

import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Router, Routes } from 'react-router';
import routers from './routers/routers';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <SideBarProvider>
      <BrowserRouter basename='/'>
        <SideBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routers.map((item, index) => {
              return (
                <Route
                  path={item.path}
                  element={<item.component />}
                  key={index}
                />
              );
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </SideBarProvider>
  );
}

export default App;
