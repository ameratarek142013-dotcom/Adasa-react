import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function ArticleCard({ post, view }) {
    if (view === "list") {
        return (
            <Link to={`/blog/${post.slug}`}>
            <article className="group flex items-stretch bg-[#161616] border border-[#262626] rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500">
                
                <div className="relative w-1/3 shrink-0 overflow-hidden">
                    <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        src={post.image}
                        alt={post.title}
                    />
                </div>

                <div className="flex-1 min-w-0 p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center flex-wrap gap-3 mb-4">
                            <span className="px-3 py-1.5 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm text-neutral-500">
                                <i className="fa-regular fa-calendar"></i>
                                {new Date(post.date).toLocaleDateString("ar-EG", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm text-neutral-500">
                                <i className="fa-regular fa-clock"></i>
                                {post.readTime}
                            </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight line-clamp-2 group-hover:text-main-orange transition-all duration-300">
                            {post.title}
                        </h2>
                        <p className="text-neutral-400 mb-5 line-clamp-2 text-sm sm:text-base leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                            <div>
                                <p className="text-sm font-semibold text-white">
                                    {post.author.name}
                                </p>
                                <p className="text-xs text-neutral-500">{post.author.role}</p>
                            </div>
                            <img
                                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
                                src={post.author.avatar}
                                alt={post.author.name}
                            />
                        </div>

                        <Link
                            to={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                        >  اقرأ المقال <i className="fa-solid fa-arrow-right-long rotate-180"></i>
                        </Link>
                    </div>
                </div>
                
            </article>
            </Link>
        );
    }

    return (
        <Link to={`/blog/${post.slug}`}>
        <article className='group card overflow-hidden hover:-translate-y-1 transition-all duration-500'>
            
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
            
        </article>
        </Link>
    );
}

export default function Allposts({ posts, active, search, setActive, setSearch }) {

    const [view, setView] = useState("grid");
    const [page, setPage] = useState(1);

    const handleReset = () => {
        if (setActive) setActive("جميع المقالات");
        if (setSearch) setSearch("");
    }


    const filteredPosts = posts.filter((post) => {
        const matchesCategory = active === "جميع المقالات" || post.category === active;
        const matchesSearch = post.title.toLowerCase().includes(search.trim().toLowerCase()) || post.excerpt.toLowerCase().includes(search.trim().toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / 6));

    
    const paginatedPosts = filteredPosts.slice((page - 1) * 6 , page * 6 );

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);


    useEffect(() => {
        setPage(1);
    }, [active, search]);



    return (
        <div className="selection:bg-orange-500 selection:text-white  min-h-screen bg-[#0A0A0A] font-[Tajawal] text-white">

            <div className="w-[95%] mx-auto flex items-center justify-between py-6">
                <p className=" text-gray-400">
                    عرض <span className="text-white font-bold ">{filteredPosts.length}</span> مقالات
                </p>
                <div className="flex items-center gap-1 px-2 py-1.5 bg-[#161616] rounded-lg">
                    <button
                        onClick={() => setView("list")}
                        className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${view === "list" ? "bg-[#f5750a] text-white" : "text-gray-500 hover:text-white"
                            }`}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <button
                        onClick={() => setView("grid")}
                        className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${view === "grid" ? "bg-[#f5750a] text-white" : "text-gray-500 hover:text-white"
                            }`}
                    >
                        <i className="fa-solid fa-grip"></i>
                    </button>
                </div>


            </div>


            {paginatedPosts.length > 0 ? (
                <div
                    className={`w-[95%] mx-auto pb-10 ${view === "grid"
                            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            : "flex flex-col gap-5"
                        }`}
                >
                    {paginatedPosts.map((post) => (
                        <ArticleCard key={post.id} post={post} view={view} />
                    ))}
                </div>
            ) : (
                <div className="w-[95%] mx-auto flex flex-col items-center text-center py-20">
                    <div className="w-24 h-24 rounded-full bg-[#1c1c1c] flex items-center justify-center mb-6">
                        <i className="fa-regular fa-frown text-4xl text-gray-500"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">لا توجد مقالات</h3>
                    <p className="text-gray-500 mb-8">
                        حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
                    </p>
                    <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300"
                    >
                        إعادة تعيين الفلاتر
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </button>
                </div>
            )}


            {filteredPosts.length > 0 && (
                <div className="w-[95%] mx-auto flex flex-col items-center gap-3 pb-12">
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="w-10 h-10 ml-1 flex items-center justify-center rounded-lg bg-[#161616] text-gray-400 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>

                        {pages.map((p) => (
                            <button
                                key={p}
                                onClick={() => setPage(p)}
                                className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${p === page ? "bg-[#f5750a] text-white" : "bg-[#161616] text-gray-400 hover:text-white hover:border border-orange-500/50 transition-all duration-300"
                                    }`}
                            >
                                {p}
                            </button>
                        ))}

                        <button
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="w-10 h-10 mr-1 flex items-center justify-center rounded-lg bg-[#161616] text-gray-400 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    </div>

                    <p className="text-xs text-gray-500">
                        صفحة {page} من {totalPages}
                    </p>
                </div>
            )}
        </div>
    );
}