const HeroImage = () => {
  return (
    <div className="heroImage relative flex flex-col justify-center items-center">
      <div className="image__caption absolute   text-center ">
        <h1 className="text-white font-bold text-3xl">
          Welcome to Dhalpara Gram Panchayat
        </h1>
        <h3 className="text-sm font-bold text-yellow-50">
          The Most Exciting guide to living, working, visiting
        </h3>
        <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 text-white mt-2">
          Discover More
        </button>
      </div>
      <img src="/assets/images/heroImage.jpeg" className="w-[100%] h-[50vh] " />
    </div>
  );
};

export default HeroImage;
