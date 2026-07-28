import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo-GdqARQRt.png'

export default function Navbar() {


  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(true)
  }

  function closeMenu() {
    setIsOpen(false)
  }


  return (
    <>


      <nav className="bg-[#161616fb] selection:bg-orange-500 selection:text-white  font-[Tajawal] backdrop-blur-xl transition-all fixed w-full   z-40 top-0 inset-s-0 border-b border-[#262626] ">
        <div className="max-w-7xl flex flex-wrap items-center justify-between  mx-auto h-20 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 rtl:space-x-reverse group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-110 transition-all duration-500">  <img src={logo} className="w-full h-full object-cover" alt="Logo" />
            </div>
            <div className=" flex flex-col">
              <span className=" text-x font-bold bg-linear-to-r from-white to-neutral-300 text-transparent bg-clip-text ">عدسة</span>
              <span className='text-xs text-orange-400/80 hidden sm:block'>عالم التصوير الفوتوغرافي</span>

            </div>
          </Link>

          <div className="flex md:order-2 items-center gap-3 rtl:space-x-reverse">
            <button className='hidden md:block cursor-pointer p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626] '><i className='fa-solid fa-search w-5 h-5'></i></button>
            <Link to="/blog" className="bg-linear-to-r from-[#F66E14] to-[#ED5D0E] rounded-full text-white hidden md:block py-4 px-8 text-sm font-bold hover:-translate-y-0.5 transition-all duration-300">ابدأ القراءة</Link>
            <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center h-11 w-11 justify-center transition-all duration-300 text-body rounded-base md:hidden  hover:text-white hover:border hover:border-slate-700 " aria-controls="navbar-sticky" aria-expanded={isOpen}>
              {isOpen ? <svg
                className="w-6 h-6 transition-transform duration-300 transform rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg> :
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h14" /></svg>

              }
            </button>
          </div>

          <div className={`${isOpen ? 'block' : 'hidden'}  md:flex md:items-center md:justify-between md:w-auto md:order-1 md:relative md:top-auto md:left-0 md:right-0 w-[90%] left-[5%] right-[5%] absolute top-full`} id="navbar-sticky">
            <ul className="flex flex-col p-2 font-medium border rounded-base md:rounded-full border-[#262626]  bg-[#161616]  md:flex-row md:mt-0 gap-1">
              <li >
                <NavLink onClick={closeMenu} to="/" className="block py-2.5 px-5 text-sm text-neutral-400 transition-all hover:text-white " aria-current="page">الرئيسيه</NavLink>
              </li>
              <li>
                <NavLink onClick={closeMenu} to="/blog" className="block  py-2.5  px-5 text-sm transition-all rounded text-neutral-400 hover:text-white">المدونه</NavLink>
              </li>
              <li>
                <NavLink onClick={closeMenu} to="/about" className="block  py-2.5  px-5 text-sm transition-all rounded text-neutral-400 hover:text-white ">من نحن</NavLink>
              </li>
              <Link onClick={closeMenu} to="/blog" className="bg-linear-to-r from-orange-400 to-orange-500 rounded-full text-white md:hidden  py-3 text-center mt-3 ">ابدأ القراءه</Link>
            </ul>
          </div>
        </div>
      </nav>





    </>
  )
}
