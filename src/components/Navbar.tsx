const Navbar = () => {
  return (
    <nav className="px-4 md:px-20 py-2.5 md:py-5 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center md:justify-between items-center">
        <div className="text-xl font-bold">SaaS Website</div>
        <div className="space-x-4 hidden md:flex">
          <a href="#features" className="text-black font-semibold">
            Features
          </a>
          <a href="#enterprise" className="text-black font-semibold">
            Enterprise
          </a>
          <a href="#resources" className="text-black font-semibold">
            Resources
          </a>
          <a href="#pricing" className="text-black font-semibold">
            Pricing
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-white mr-2 text-black py-2 px-4 border-2 border-gray-500 rounded">
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
