import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function Layout() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>




    
     
        <div className="mt-20">
                <Outlet />
            </div>
     
   




    <Footer/>
    
    </>
  )
}
