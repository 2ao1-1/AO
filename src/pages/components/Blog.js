import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Data } from "../../Data";

const pageVariants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const BlogPage = () => {
  const location = useLocation();

  // إعادة موضع التمرير عند العودة
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, [location]);

  const handleSaveScrollPosition = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="min-h-screen bg-PrimaryDark py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold text-Main mb-12 text-center"
        >
          Blog Posts
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Data.blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
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
                onClick={handleSaveScrollPosition}
                className="text-Main hover:text-Details transition-colors inline-flex items-center gap-2"
              >
                Read More
                <motion.svg
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
