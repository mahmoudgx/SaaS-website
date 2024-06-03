const Blog = () => {
  return (
    <div className="mt-10">
      <div className="mb-10">
        <h1 className="text-center md:text-3xl text-2xl font-bold">
          Take a deeper dive into a new way to work
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:px-20 p-4">
        <div className="border-2  rounded-xl overflow-hidden h-[350px] flex flex-col">
          <img
            className="object-cover h-48 w-full"
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="flex justify-between p-5 ">
            <h1 className="text-gray-500">December 12, 2023</h1>
            <h1 className="text-blue-500">Event</h1>
          </div>
          <p className="pt-5 p-5 font-semibold">
            get ready for ai in slack - innovation awaits with advanced
            capabilities
          </p>
        </div>
        <div className="border-2 rounded-lg overflow-hidden h-[350px] flex flex-col">
          <img
            className="object-cover h-48 w-full"
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="flex justify-between p-5 ">
            <h1 className="text-gray-500">December 15, 2023</h1>
            <h1 className="text-blue-500">On-demand</h1>
          </div>
          <p className="pt-5 p-5 font-semibold">
            "Big launches recap world tour new york highlights."
          </p>
        </div>
        <div className="border-2 rounded-lg overflow-hidden h-[350px] flex flex-col">
          <img
            className="object-cover h-48 w-full"
            src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="flex justify-between p-5 ">
            <h1 className="text-gray-500">December 19, 2023</h1>
            <h1 className="text-blue-500">Customer Story</h1>
          </div>
          <p className="pt-5 p-5 font-semibold">
            "Expanding ChatGpt with Slack: OpenAI's Approach."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
