import React from 'react'

export default function Blogheader() {
  return (
    <>
    <section className='relative selection:bg-orange-500 selection:text-white  font-[Tajawal] bg-[#0a0a0a] overflow-hidden'>

        <div className="absolute  inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
        <div className="absolute top-0 left-80 w-130 h-100 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="containerr z-20 flex flex-col justify-center items-center">

          <div className='flex items-center gap-2 px-4 py-2.5 bg-orange-400/10 rounded-full border border-orange-500/30'>
            <span className='w-2 h-2 bg-orange-400 rounded-full animate-pulse '></span>
            <i className='fas fa-newspaper text-main-orange text-sm'></i>
            <span className='text-main-orange text-sm font-medium'>مدونتنا</span>
          </div>

          <div className='z-20 text-4xl md:text-5xl lg:text-6xl font-bold leading-16 my-6'>
            <span className='bg-linear-to-r from-[#F97F18] to-[#FAB221] bg-clip-text text-transparent '><span className='text-white'> استكشف</span> مقالاتنا</span>
          </div>

          <p className='text-xl text-gray-400 z-20'>
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>

        </div>

      </section></>
  )
}
