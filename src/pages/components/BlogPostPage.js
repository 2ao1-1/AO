import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Data } from "../../Data";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.4 } },
};

const BlogPostPage = () => {
  const navigate = useNavigate();
  const { title } = useParams();

  // البحث عن المقالة
  const blogPost = Data.blogPosts.find(
    (post) => post.title.toLowerCase().replace(/ /g, "-") === title
  );

  // إذا لم يتم العثور على المقال
  if (!blogPost) {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="min-h-screen flex items-center justify-center bg-PrimaryDark"
      >
        <h1 className="text-3xl text-Main font-bold">Post Not Found</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-Main text-white rounded"
        >
          Go Back
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-PrimaryDark py-16"
    >
      <div className="container mx-auto px-4">
        {/* عنوان المقال */}
        <h1 className="text-5xl font-bold text-Main mb-6">{blogPost.title}</h1>

        {/* معلومات المقال */}
        <div className="flex items-center gap-4 text-Details text-sm mb-4">
          <span>{blogPost.category}</span>
          <span>•</span>
          <span>{blogPost.readTime}</span>
        </div>

        {/* المحتوى النصي */}
        <p className="text-lg text-Details mb-6">{blogPost.content}</p>

        {/* الكود (إن وجد) */}
        {blogPost.codeSnippet && (
          <pre className="bg-Secondary p-4 rounded text-white text-sm overflow-x-auto">
            <code>{blogPost.codeSnippet}</code>
          </pre>
        )}

        {/* زر الإغلاق */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-2 bg-Main text-white rounded hover:bg-Secondary transition"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default BlogPostPage;
