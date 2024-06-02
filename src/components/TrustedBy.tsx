const companies = [
  {
    name: "Uber",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
  },
  {
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
  },
  {
    name: "Etsy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg",
  },
  {
    name: "NASA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Rivian",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Rivian_logo_and_wordmark.svg",
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    name: "OneOncology",
    logo: "https://asset.brandfetch.io/idRmJLV5TJ/idiMdXiEHw.svg",
  },
  {
    name: "CapitalOne",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Capital_One_logo.svg",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
  },
  {
    name: "Roku",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Roku_logo.svg",
  },
  {
    name: "Shipt",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Shipt_Logo.png",
  },
];

const TrustedBy = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-10 md:p-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Trusted by companies all over the world
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {companies.map((company, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="mx-auto h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
