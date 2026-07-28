import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Footer() {
  const [siteInfo, setSiteInfo] = useState({
    "siteInfo": {
      "name": "عدسة",
      "tagline": "عالم التصوير الفوتوغرافي",
      "description": "مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.",
      "email": "hello@adasah.com",
      "social": {
        "twitter": "https://twitter.com/adasah",
        "github": "https://github.com/adasah",
        "linkedin": "https://linkedin.com/company/adasah",
        "youtube": "https://youtube.com/@adasah"
      }
    }
  })

  return (
    <>
      <footer className='font-[Tajawal] selection:bg-orange-500 selection:text-white  relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]'>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="relative containerr">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to='/' className='flex items-center gap-3 mb-6 group'>
                <div className="w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                  <span className='text-white font-bold text-xl'>ع</span>
                </div>
                <span className='text-white font-bold text-xl'>{siteInfo.siteInfo.name}</span>
              </Link>
              <p className='text-sm text-neutral-500 mb-6 leading-relaxed'>{siteInfo.siteInfo.description}</p>
              <div className="flex gap-2">
                <Link to={siteInfo.siteInfo.social.twitter} className='w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110'><i className="fa-brands fa-x-twitter"></i></Link>
                <Link to={siteInfo.siteInfo.social.github} className='w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110'><i className="fa-brands fa-github"></i></Link>
                <Link to={siteInfo.siteInfo.social.linkedin} className='w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110'><i className="fa-brands fa-linkedin"></i></Link>
                <Link to={siteInfo.siteInfo.social.youtube} className='w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110'><i className="fa-brands fa-youtube"></i></Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>استكشف
              </h3>
              <ul className='space-y-4'>
                <li><Link to="/" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'><i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i> الرئيسيه</Link></li>
                <li><Link to='/blog' className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'><i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i> المدونه</Link></li>
                <li><Link to='/about' className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'><i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i> من نحن</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>التصنيفات
              </h3>
              <ul className='space-y-4'>
                <li><Link to='/blog?category=إضاءة' className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'><i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i> إضاءة</Link></li>
                <li><Link to='/blog?category=بورتريه' className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'><i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i> بورتريه</Link></li>
                <li><Link to='/blog?category=مناظر طبيعية' className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'><i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i> مناظر طبيعية</Link></li>
                <li><Link to='/blog?category=تقنيات' className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'><i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>تقنيات</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                ابقي علي اطلاع
              </h3>
              <p className="text-sm text-neutral-500 mb-4">اشترك للحصول على أحدث المقالات والتحديثات.</p>
              <form className='space-y-3'>
                <div className="relative">
                  <input type="email" placeholder='ادخل بريدك الاكتروني' className='w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600' />
                </div>
                <button type="submit" className='btn text-sm w-full py-4 px-5'>اشترك</button>
              </form>
            </div>
          </div>
        </div>
        <div className="relative border-t border-[#262626]">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-neutral-600">© 2026 عدسة. صنع بكل <i className="fa-solid fa-heart text-orange-500 me-1"></i>جميع الحقوق محفوظة</p>
              <div className="flex gap-6">
                <Link to='' className='text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300'>سياسه الخصوصيه</Link>
                <Link to='' className='text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300'>شروط الخدمه</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}