import { motion } from "framer-motion";

const Blog = () => {
  const blogPosts = [
    {
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "December 12, 2023",
      category: "Event",
      title:
        "Get ready for AI in Slack - innovation awaits with advanced capabilities",
    },
    {
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "December 15, 2023",
      category: "On-demand",
      title: "Big launches recap world tour new york highlights.",
    },
    {
      img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "December 19, 2023",
      category: "Customer Story",
      title: "Expanding ChatGpt with Slack: OpenAI's Approach.",
    },
  ];

  return (
    <div className="mt-10">
      <div className="mb-10">
        <h1 className="text-center md:text-3xl text-2xl font-bold">
          Take a deeper dive into a new way to work
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:px-20 p-4">
        {blogPosts.map((post, index) => (
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
