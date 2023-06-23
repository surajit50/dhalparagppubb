const Gallery = () => {
  return (
    <div className="container">
      <h3 className="gallery-head-style bg-[#00aed9]  pt-4 pl-4 w-full text-center">
        Gallery{" "}
      </h3>
      <div className="flex justify-center items-center flex-wrap bg-red-600 gap-1">
        <div className="flex-1 bg-orange-600">
          <img
            src="images/gallery-1.jpg"
            className="gallery-img h-[250px] w-[100%]"
          />
        </div>
        <div className="flex-1">
          <img
            src="images/gallery-2.jpg"
            className="gallery-img h-[250px] w-[100%]"
          />
        </div>
        <div className="flex-1">
          <img
            src="images/gallery-3.jpg"
            className="gallery-img h-[250px] w-[100%]"
          />
        </div>
        <div className="flex-1">
          <img
            src="images/gallery-4.jpg"
            className="gallery-img h-[250px] w-[100%]"
          />
        </div>
        <div className="flex-1">
          <img
            src="images/gallery-5.jpg"
            className="gallery-img h-[250px] w-[100%]"
          />
        </div>
        <div className="flex-1">
          <img
            src="images/gallery-6.jpg"
            className="gallery-img h-[250px] w-[100%]"
          />
        </div>
        <div className="flex-1">
          <img
            src="images/gallery-7.jpg"
            className="gallery-img h-[250px] w-[100%]"
          />
        </div>
        <div className="flex-1">
          <img
            src="images/gallery-8.jpg"
            className="gallery-img h-[250px] w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
