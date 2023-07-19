import Gallery from "@components/Gallery/Gallery";

import Notice from "@components/Notice/Notice";
import Tender from "@components/Tender/Tender";
import HeroImage from "@components/HeroImage/HeroImage";
const Home = () => {
  return (
    <div className="">
      {/*<!---------- Slider HTML Starts --------->*/}
      <div className="w-full h-auto p-3 m-1">
        <HeroImage />
      </div>
      {/*<!---------- Slider HTML Ends --------->*/}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <Tender />
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <Notice />
            </div>
          </div>
        </div>
      </section>

      {/*<!-----------------------Prodhan colum---------!>*/}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-600">
              Partha Roy
              <br className="hidden lg:inline-block" />
              Prodhan Dhalpara Gram Panchayat
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*<!---------- Gallery HTML Starts --------->*/}
      <div className="w-full mt-[50px]">
        <Gallery />
      </div>
      {/*<!---------- Gallery HTML Ends --------->*/}

      {/*<!---------- Recruiter List HTML Starts --------->*/}
      {/*<div className="container">
        <h3 className="recruiter-head-style">Top Recruiters Company</h3>
        <marquee className="recruiter-marquee">
          <img src="images/rec/recruiter-1.jpg" />
          <img src="images/rec/recruiter-2.jpg" />
          <img src="images/rec/recruiter-3.jpg" />
          <img src="images/rec/recruiter-4.jpg" />
          <img src="images/rec/recruiter-5.jpg" />
          <img src="images/rec/recruiter-6.jpg" />
          <img src="images/rec/recruiter-7.jpg" />
          <img src="images/rec/recruiter-8.jpg" />
          <img src="images/rec/recruiter-9.jpg" />
          <img src="images/rec/recruiter-10.jpg" />
          <img src="images/rec/recruiter-11.jpg" />
          <img src="images/rec/recruiter-12.jpg" />
          <img src="images/rec/recruiter-13.jpg" />
          <img src="images/rec/recruiter-14.jpg" />
          <img src="images/rec/recruiter-15.jpg" />
          <img src="images/rec/recruiter-16.jpg" />
          <img src="images/rec/recruiter-17.jpg" />
        </marquee>
      </div>
*/}
      {/*<!---------- Recruiter List HTML Ends --------->*/}
    </div>
  );
};

export default Home;
