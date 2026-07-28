import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navtabs from '../Navtabs/Navtabs'
import Allposts from './Allposts'
import posts from '../../data/postsData'
import Blogheader from '../Blogheader/Blogheader'

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [active, setActive] = useState(
    searchParams.get('category') || 'جميع المقالات'
  )
  const [search, setSearch] = useState('')

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category')
    if (categoryFromUrl) {
      setActive(categoryFromUrl)
    }
  }, [searchParams])

  const handleSetActive = (cat) => {
    setActive(cat)
    if (cat === 'جميع المقالات') {
      searchParams.delete('category')
      setSearchParams(searchParams)
    } else {
      setSearchParams({ category: cat })
    }
  }

  return (
    <>
      <Blogheader />

      <Navtabs
        active={active}
        setActive={handleSetActive}
        search={search}
        setSearch={setSearch}
      />
      <Allposts
        posts={posts}
        active={active}
        search={search}
        setActive={handleSetActive}
        setSearch={setSearch}
      />

    </>
  )
}