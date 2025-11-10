import React from 'react'
import HeroBlog from '../Components/Blog/HeroBlog';
import { Helmet } from 'react-helmet';


const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog | Infolanze</title>
      </Helmet>
      <HeroBlog />
    </div>
  )
}

export default Blog
