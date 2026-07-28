import React from 'react'

const categories = [
    'جميع المقالات',
    'إضاءة',
    'بورتريه',
    'مناظر طبيعية',
    'تقنيات',
    'معدات',
]

export default function Navtabs({ active, setActive, search, setSearch }) {
    return (
        <>
            <nav className='sticky bg-[#0A0A0A] selection:bg-orange-500 selection:text-white  font-[Tajawal] backdrop-blur-xl transition-all top-20 z-30 py-4 border-t border-b border-[#262626]'>
                <div className='flex flex-col md:flex-row items-center justify-between w-[95%] mx-auto gap-4 md:gap-0'>

                    <div className='relative w-full md:w-64 shrink-0'>
                        <input
                            value={search}
                            onChange={(e)=> setSearch(e.target.value)}
                            className='w-full bg-[#161616] py-3 pr-10 pl-4 rounded-xl border border-gray-400/20 focus:border-orange-500 focus:outline-0 focus:ring-0 transition-all duration-300 text-white'
                            type="search"
                            placeholder='ابحث في المقالات ...'
                        />
                        <i className='fas fa-search absolute top-1/2 -translate-y-1/2 left-3 text-gray-500 z-10'></i>
                    </div>

                    <div className='flex flex-wrap lg:flex-nowrap items-center gap-3 justify-center overflow-x-auto'>
                        {categories.map((cat) => {
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActive(cat)}
                                    className={`px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${cat === active
                                        ? 'bg-[#f5750a] text-white font-bold'
                                        : 'bg-[#161616] text-gray-300 border border-gray-400/10 hover:border-orange-500/40'
                                        }`}
                                >
                                    {cat}
                                </button>
                            )
                        })}
                    </div>

                </div>
            </nav>
        </>
    )
}