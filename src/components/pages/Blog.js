import React from "react";
import '../../App.css';
import BlogCards from "../posts/BlogCards";
import Footer from "../Footer";

export default function Blog() {
  return (
    <>
      <h1 className="blog">
        BLOG
      </h1>
      <BlogCards />
      <Footer />
    </>
  )
}