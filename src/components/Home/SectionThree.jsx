import React from 'react'
import { Link } from 'react-router-dom';

export default function SectionThree({ categories }) {
    return (
        <>
            <section className='bg-[#111111] selection:bg-orange-500 selection:text-white  font-[Tajawal] relative border-y border-[#262626]'>
                <div className="containerr">
                    <div className="flex flex-col items-center mb-12">
                        <span className="label">
                            <span className='relative ms-2 flex h-2 w-2'>
                                <span className='animate-ping absolute h-full w-full rounded-full bg-orange-500 opacity-75'></span>
                                <span className='relative rounded-full h-2 w-2 bg-orange-500'></span>
                            </span>
                            <span className='text-main-orange mr-2'>التصنيفات</span>
                        </span>
                        <h2 className='sectionTitle'>استكشف حسب الموضوع</h2>
                        <p className="sectionSubtitle" >اعثر على محتوى مصمم حسب اهتماماتك</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {categories.map(((cat,index) => {
                            return <Link key={index} to={`/blog?category=${cat.name}`} className='group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1'>
                                <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent"><i className={cat.icon}></i></div>
                                    <h3 className='font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1'>{cat.name}</h3>
                                    <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">{cat.count} مقاله</p>
                                    <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300"><i className="fa-solid fa-angle-right text-white rotate-180"></i></div>
                                </div>
                            </Link>
                        }))}
                    </div>
                </div>
            </section>
        </>
    )
}
