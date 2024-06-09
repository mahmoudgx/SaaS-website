import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Define the types for the blog posts
interface BlogPost {
  img: string;
  date: string;
  category: string;
  title: string;
}

const Blog = () => {
  const { t } = useTranslation();

  // Get blog posts from translations
  const blogPosts: BlogPost[] = t("blog.posts", { returnObjects: true });

  return (
    <div className="mt-10">
      <div className="mb-10">
        <h1 className="text-center md:text-3xl text-2xl font-bold">
          {t("blog.title")}
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:px-20 p-4">
        {blogPosts.map((post: BlogPost, index: number) => (
          <motion.div
            key={index}
            className="border-2 rounded-xl overflow-hidden h-auto flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              className="object-cover h-48 w-full"
              src={post.img}
              alt={post.title}
            />
            <div className="flex justify-between p-5 items-center">
              <h1 className="text-gray-500 text-sm">{post.date}</h1>
              <h1 className="text-blue-500 text-sm">{post.category}</h1>
            </div>
            <p className="pt-5 p-5 font-semibold">{post.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
