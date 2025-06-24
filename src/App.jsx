import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import './App.css';
import MainLayout from '@components/Layout/Layout';
import Header from '@components/Header/Header';
import Banner from './components/Baner/Baner';
import HomePage from './Pages/Home/Home';

function App() {
  return (
    <>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
}

export default App;
