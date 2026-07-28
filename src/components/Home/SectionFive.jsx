import React from 'react'
import photo1 from "../../assets/avatar-1.jpg"
import photo2 from "../../assets/avatar-2.jpg"
import photo3 from "../../assets/avatar-3.jpg"

export default function SectionFive() {
    return (
        <>
            <section className="relative selection:bg-orange-500 selection:text-white  overflow-hidden font-[Tajawal] bg-[#0a0a0a]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="containerr relative">
                    <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
                        <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><i className="fa-solid fa-envelope text-2xl text-white"></i></div>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>اشترك في  <span className="text-secondary-orange">نشرتنا الإخبارية</span></h2>
                        <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
                            <input type="email" placeholder='ادخل بريدك الالكتروني' className='flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500 text-white placeholder-neutral-500 transition-colors' />
                            <button type="submit" className='px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300'>اشترك الان</button>
                        </form>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-2 space-x-reverse">
                                    <img src={photo1} className="w-8 h-8 rounded-full border-2 border-[#161616]" />
                                    <img src={photo2} className="w-8 h-8 rounded-full border-2 border-[#161616]" />
                                    <img src={photo3} className="w-8 h-8 rounded-full border-2 border-[#161616]" />
                                </div>
                                <span>انضم لي <span className='text-white font-medium'>+10.000</span> مصور</span>
                            </div>
                            <span className='text-[#262626]'>•</span>
                            <span>بدون ازعاج</span>
                            <span className='text-[#262626]'>•</span>
                            <span>الغاء الاشتراك في اي وقت</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
