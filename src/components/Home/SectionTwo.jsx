import React from 'react'
import { Link } from 'react-router-dom';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import Allposts from '../Blog/Allposts';
import { posts, categories } from '../../data/postsData';

export default function SectionTwo() {
    const featuredPosts = posts.slice(0, 3);
    const selectedPosts = posts.filter(post => [4, 5, 6].includes(post.id));

    return (
        <>
            <section className='bg-[#0a0a0a] selection:bg-orange-500 selection:text-white  font-[Tajawal] relative overflow-hidden'>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent"></div>
                <div className="relative containerr">
                    <div className="flex flex-col md:flex-row justify-between item mb-12 gap-4">
                        <div>
                            <span className="label">
                                <span className='relative ms-2 flex h-2 w-2'>
                                    <span className='animate-ping absolute h-full w-full rounded-full bg-orange-500 opacity-75'></span>
                                    <span className='relative rounded-full h-2 w-2 bg-orange-500'></span>
                                </span>
                                <span className='text-main-orange mr-2'>مميز</span>
                            </span>
                            <h2 className='sectionTitle'>مقالات مختارة</h2>
                            <p className="sectionSubtitle" >محتوى منتقى لبدء رحلة تعلمك</p>
                        </div>
                        <Link to="/blog" className='bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 px-5 py-2.5 group font-medium'>عرض الكل <i className="fa-solid fa-angle-right group-hover:-translate-x-1 transition-transform rotate-180"></i></Link>
                    </div>
                    <div className="space-y-8">
                        {featuredPosts.map((post) => {
                            return <article key={post.id} className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
                                <Link to='' className='block'>
                                    <div className="grid md:grid-cols-2 gap-0">
                                        <div className="relative h-full md:h-100 overflow-hidden ">
                                            <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out' src={post.image} alt={post.title} />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="absolute top-4 right-4">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full"><i className="fa-solid fa-star"></i> مميز</span>
                                            </div>
                                        </div>
                                        <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className='px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20'>{post.category}</span>
                                                <span className="flex items-center gap-1 text-sm text-neutral-500"><i className="fas fa-clock"></i> {post.readTime}</span>
                                            </div>
                                            <h2 className='text-[24px] md:text-[30px] font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight'>{post.title}</h2>
                                            <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative">
                                                        <img className='w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md' src={post.author.avatar} alt={post.author.name} />
                                                        <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                                                    </div>
                                                    <div>
                                                        <p className='text-sm font-semibold text-white'>{post.author.name}</p>
                                                        <p className='text-xs text-neutral-500'> {new Date(post.date).toLocaleDateString("ar-EG", {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        })}</p>
                                                    </div>
                                                </div>
                                                <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">اقرأ المقال <i className="fa-solid fa-arrow-right-long rotate-180"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        })}

                    </div>
                </div>
            </section>
            <SectionThree categories={categories} />
            <SectionFour posts={selectedPosts} />
        </>
    )
}