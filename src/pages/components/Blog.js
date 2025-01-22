import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../../Data";

export default function BlogSection() {
  return (
    <section className="py-16 bg-PrimaryDark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-Main mb-12">Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Data.blogPosts.map((post, index) => (
            <article
              key={index}
              className="border border-Secondary p-6 hover:border-Main transition-colors"
            >
              <div className="flex items-center gap-4 text-Details text-sm mb-4">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-xl text-Main font-bold mb-3">{post.title}</h3>
              <p className="text-Details mb-6">{post.excerpt}</p>

              <Link
                to={`/blog/${post.title.toLowerCase().replace(/ /g, "-")}`}
                className="text-Main hover:text-Details transition-colors inline-flex items-center gap-2"
              >
                Read More
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
