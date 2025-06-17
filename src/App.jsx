import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import './App.css';
import MainLayout from '@components/Layout/Layout';
import Header from '@components/Header/Header';

function App() {
  return (
    <>
      <MainLayout>
        <Header />
      </MainLayout>
    </>
  );
}

export default App;
