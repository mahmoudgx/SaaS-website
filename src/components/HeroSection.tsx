const HeroSection = () => {
  return (
    <div className="relative md:py-20 py-10 bg-[url('./assets/architect.svg')] bg-center">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-7xl font-bold mb-4  md:leading-snug leading-tight">
          Made for people Built
          <br className="hidden md:inline" /> for productivity
        </h1>
        <p className="mb-8 md:text-lg text-sm">
          Connect the right people, find anything you need and automate
          <br className="hidden md:inline" />
          the rest. That’s work in Slack, your productivity platform.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-white border py-3 px-5 rounded w-full sm:w-auto flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Logo"
              className="h-6 mr-2"
            />
            Sign Up with Google
          </button>
          <button className="bg-[#6A65FF] text-white py-3 px-5 rounded w-full sm:w-auto">
            Try for Free
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 md:h-[300px] h-[250px] bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
