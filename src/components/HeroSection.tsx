const HeroSection = () => {
  return (
    <div className="relative md:py-20 py-10 bg-white">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Made for people Built
          <br className="hidden md:inline" /> for productivity
        </h1>
        <p className="mb-8 text-lg sm:text-xl">
          Connect the right people, find anything you need and automate
          <br className="hidden md:inline" />
          the rest. That’s work in Slack, your productivity platform.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white border py-3 px-5 rounded w-full sm:w-auto">
            Sign Up with Google
          </button>
          <button className="bg-[#6A65FF] text-white py-3 px-5 rounded w-full sm:w-auto">
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
