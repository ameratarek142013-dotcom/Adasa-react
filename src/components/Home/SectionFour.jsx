import React from 'react'
import { data, Link } from 'react-router-dom';


export default function SectionFour({ posts }) {
    return (
        <>
            <section className="bg-[#0a0a0a] selection:bg-orange-500 selection:text-white  font-[Tajawal] relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent"></div>
                <div className="relative containerr ">
                    <div className="flex flex-col md:flex-row justify-between item mb-12 gap-4">
                        <div>
                            <span className="label">
                                <span className='relative ms-2 flex h-2 w-2'>
                                    <span className='animate-ping absolute h-full w-full rounded-full bg-orange-500 opacity-75'></span>
                                    <span className='relative rounded-full h-2 w-2 bg-orange-500'></span>
                                </span>
                                <span className='text-main-orange mr-2'>الأحدث</span>
                            </span>
                            <h2 className='sectionTitle'>أحدث المقالات</h2>
                            <p className="sectionSubtitle" >محتوى جديد طازج من المطبعة</p>
                        </div>
                        <Link to="/blog" className='group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors'>عرض جميع المقالات <i className="fa-solid fa-arrow-right-long group-hover:-translate-x-1 transition-transform rotate-180"></i></Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => {
                            return <article key={post.id} className='group card overflow-hidden hover:-translate-y-1 transition-all duration-500'>
                                <Link to=''>
                                    <div className="relative h-52 overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">{post.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                                            <span className='flex items-center gap-1'><i className="fa-regular fa-clock"></i>{post.readTime}</span>
                                            <span className='w-1 h-1 bg-neutral-600 rounded-full'></span>
                                            <span>
                                                {new Date(post.date).toLocaleDateString("ar-EG", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">{post.title}</h3>
                                        <p className='text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed'>{post.excerpt}</p>
                                        <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                                            <div className="flex items-center gap-3">
                                                <img src={post.author.avatar} alt={post.author.name} className='w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]' />
                                                <div className="">
                                                    <p className="text-sm font-medium text-white">{post.author.name}</p>
                                                    <p className="text-xs text-neutral-500">{post.author.role}</p>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent"><i className="fa-solid fa-angle-left text-orange-500 group-hover:text-white"></i></div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
