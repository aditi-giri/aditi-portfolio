"use client"
import { useState } from "react"
import "../styles/blogs.css"
import { blogs } from "../data/blogData"

export default function Blogs() {

    const [activeIndex, setActiveIndex] = useState(null)


    const nextBlog = () => {
        setActiveIndex((prev) => (prev + 1) % blogs.length)
    }

    const prevBlog = () => {
        setActiveIndex((prev) => (prev - 1 + blogs.length) % blogs.length)
    }

    return (

        <section id="blogs">

            <div className="container">

                <h2 className="section-title">Blogs</h2>

                <div className="blogs-scroll">

                    {blogs.map((blog, index) => (
                        <div
                            className="blog-card"
                            key={index}
                            onClick={() => setActiveIndex(index)}
                        >

                            <div className="blog-image">
                                <img src={blog.image} alt={blog.title} />
                            </div>

                            <span className="blog-date">{blog.date}</span>

                            <h3>{blog.title}</h3>

                            <p>{blog.desc}</p>

                        </div>
                    ))}

                </div>

            </div>

            {activeIndex !== null && (

                <div className="blog-modal-overlay" onClick={() => setActiveIndex(null)}>

                    <div
                        className="blog-modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="modal-close"
                            onClick={() => setActiveIndex(null)}
                        >
                            ✕
                        </button>

                        <img
                            className="modal-blog-image"
                            src={blogs[activeIndex].image}
                            alt={blogs[activeIndex].title}
                        />

                        <span className="modal-blog-date">
                            {blogs[activeIndex].date}
                        </span>

                        <h2>{blogs[activeIndex].title}</h2>

                        {blogs[activeIndex].content.split("\n").map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}


                        <div className="modal-navigation">

                            <button onClick={prevBlog}>
                                ← Previous
                            </button>

                            <button onClick={nextBlog}>
                                Next →
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </section>

    )

}