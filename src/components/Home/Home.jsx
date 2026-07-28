import React from 'react'
import { Link } from 'react-router-dom';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFive from './SectionFive';

export default function Home() {
  return (
    <>
    <main>
        <section id='HeroSection' className='relative selection:bg-orange-500 selection:text-white  font-[Tajawal] flex items-center overflow-hidden bg-[#0a0a0a]'>
          {/* backGround  */}
          <div className="absolute  inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
          {/* content  */}
          <div className="containerr z-10">
            <div className="flex flex-col justify-center items-center">
              <div className="label ">
                <span className='relative ms-2 flex h-2 w-2'>
                  <span className='animate-ping absolute h-full w-full rounded-full bg-orange-500 opacity-75'></span>
                  <span className='relative rounded-full h-2 w-2 bg-orange-500'></span>
                </span>
                <span className='text-neutral-300 mr-2'>مرحباً بك في عدسة</span>
              </div>
              <h1 className='text-center  font-bold text-white mb-6 leading-tight tracking-tight md:text-[60px] lg:text-[72px] text-[48px]'>
                اكتشف <span className='text-secondary-orange'>فن</span> <br /> التصوير الفوتوغرافي
              </h1>
              <p className="text-[20px] md:text-[24px] text-neutral-400 mb-10 mx-auto text-center leading-relaxed">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>
              <div className="flex flex-col w-full sm:flex-row justify-center gap-4 mb-16">
                <Link to="/blog" className='btn  py-3 px-6 inline-flex items-center justify-center gap-2 group'>
                  <span>استكشف المقالات</span>
                  <i className="fa-solid fa-arrow-right group-hover:-translate-x-1 text-white transition-transform rotate-180"></i>
                </Link>
                <Link to="/about" className='hover:border-[#ff6a007e] hover:bg-[#2E1E14] hover:text-[#FF6900] transition-all duration-300 rounded-full  py-3 px-6 border border-slate-600 inline-flex items-center justify-center gap-2 text-white'>
                  <i className="fas fa-circle-inf"></i>
                  <span>اعرف المزيد</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 w-full md:px-15 lg:px-40 xl:px-65 gap-4 mx-auto">
                <div className="glassCard hover:scale-105 transition-transform duration-300">
                  <i className='fa-solid fa-newspaper text-2xl text-orange-500 mb-1'></i>
                  <p className='text-[24px] md:text-[30px] font-bold text-secondary-orange'>+50</p>
                  <p className="text-neutral-500 text-sm">مقاله</p>
                </div>
                <div className="glassCard hover:scale-105 transition-transform duration-300">
                  <i className='fa-solid fa-users text-2xl text-orange-500 mb-1'></i>
                  <p className='text-[24px] md:text-[30px] font-bold text-secondary-orange'>+10الف</p>
                  <p className="text-neutral-500 text-sm">قاارئ</p>
                </div>
                <div className="glassCard hover:scale-105 transition-transform duration-300">
                  <i className='fa-solid fa-folder-open text-2xl text-orange-500 mb-1'></i>
                  <p className='text-[24px] md:text-[30px] font-bold text-secondary-orange'>4</p>
                  <p className="text-neutral-500 text-sm">تصنيفات</p>
                </div>
                <div className="glassCard hover:scale-105 transition-transform duration-300">
                  <i className='fa-solid fa-pen-nib text-2xl text-orange-500 mb-1'></i>
                  <p className='text-[24px] md:text-[30px] font-bold text-secondary-orange'>6</p>
                  <p className="text-neutral-500 text-sm">كاتب</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SectionTwo/>
        <SectionFive/>
      </main>
</>
  )
}
