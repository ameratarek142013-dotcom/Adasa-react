import React from 'react'

export default function About() {
  return (
    <>
    <section id='HeroSection' className='selection:bg-orange-500 selection:text-white relative font-[Tajawal] flex items-center overflow-hidden bg-[#0a0a0a]'>
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
                <span className='text-neutral-300 mr-2'> من نحن</span>
              </div>
              <h1 className='text-center text-4xl lg:text-6xl  font-bold text-secondary-orange mb-6 leading-tight tracking-tight  '>
                <span className='text-white'> مهمتنا هي </span>  الإعلام والإلهام
              </h1>
              <p className=" text-xl text-neutral-400 mb-10 mx-auto text-center leading-relaxed max-w-3xl">
               مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 w-full md:px-15 lg:px-40 xl:px-65 gap-4 mx-auto">
               
                <div className="glassCard hover:scale-105 transition-transform duration-300">
                  <i className='fa-solid fa-users text-2xl text-orange-500 mb-1'></i>
                  <p className='text-[24px] md:text-[30px] font-bold text-secondary-orange'>+2مليون</p>
                  <p className="text-neutral-500 text-sm">قارئ شهرياً</p>
                </div>
                 <div className="glassCard hover:scale-105 transition-transform duration-300">
                  <i className='fa-solid fa-newspaper text-2xl text-orange-500 mb-1'></i>
                  <p className='text-[24px] md:text-[30px] font-bold text-secondary-orange'>+500</p>
                  <p className="text-neutral-500 text-sm">مقالة منشورة</p>
                </div>
                
                <div className="glassCard hover:scale-105 transition-transform duration-300">
                  <i className='fa-solid fa-pen-nib text-2xl text-orange-500 mb-1'></i>
                  <p className='text-[24px] md:text-[30px] font-bold text-secondary-orange'>+50</p>
                  <p className="text-neutral-500 text-sm">كاتب خبير</p>
                </div>
                <div className="glassCard hover:scale-105 transition-transform duration-300">
                  <i className='fa-solid fa-book-open text-2xl text-orange-500 mb-1'></i>
                  <p className='text-[24px] md:text-[30px] font-bold text-secondary-orange'>+15
</p>
                  <p className="text-neutral-500 text-sm">تصنيف</p>
                </div>
              </div>
            </div>
          </div>
        </section></>
  )
}
