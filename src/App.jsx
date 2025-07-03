import { Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
// import './App.css';
import MainLayout from '@components/Layout/Layout';
import Header from '@components/Header/Header';
import Banner from './components/Baner/Baner';
import HomePage from './pages/Home/Home';
import { SideBarProvider } from './contexts/SideBarProvider';
import SideBar from './components/SideBar/SideBar';

import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Router, Routes } from 'react-router';
import routers from './routers/routers';

function App() {
  return (
    <SideBarProvider>
      <BrowserRouter basename='/'>
        <SideBar />
        <Suspense>
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
