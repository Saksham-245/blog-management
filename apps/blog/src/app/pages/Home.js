import React, {useEffect} from 'react'
import Header from "../components/header/Header";
import {listBlogs} from "@blog-management/shared-logic";

export default function Home() {

  useEffect(() => {
    listBlogs().then((blogs) => setBlogs(blogs.blogs))
  }, [])

  const [blogs, setBlogs] = React.useState(null);
  return (
    <div>
      <Header/>
      <div>
        <h1>Blog Management</h1>
        <h2>Blog List</h2>
      </div>
    </div>
  )
}
