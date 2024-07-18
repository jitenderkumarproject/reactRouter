import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Header from './component/header';

function Home() {
  return (
    <>
   <Header />

   
   <Outlet />
   </>
  );
}

export default Home
