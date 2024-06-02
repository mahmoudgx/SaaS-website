const Navbar = () => {
  return (
    <nav className="px-4 md:px-20 py-6 md:py-10">
      <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center">
        <div className="text-xl font-bold">SaaSRevive</div>
        <div className="space-x-4 hidden md:flex">
          <a href="#features" className="text-gray-400">
            Features
          </a>
          <a href="#enterprise" className="text-gray-400">
            Enterprise
          </a>
          <a href="#resources" className="text-gray-400">
            Resources
          </a>
          <a href="#pricing" className="text-gray-400">
            Pricing
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-white mr-2 text-black py-2 px-4 border-2 border-gray-400 rounded">
            Log In
          </button>
          <button className="bg-[#6A65FF] text-white py-2 px-4 rounded">
            Try for Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
