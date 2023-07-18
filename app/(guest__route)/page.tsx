import Gallery from "@components/Gallery/Gallery";

import Notice from "@components/Notice/Notice";
import Tender from "@components/Tender/Tender";

const Home = () => {
  return (
    <div className="">
      {/*<!---------- Slider HTML Starts --------->*/}
      <div className="w-full h-auto">
        <img
          className="w-full  slider h-[400px]"
          src="/assets/images/heroImage.jpeg"
        />
      </div>
      {/*<!---------- Slider HTML Ends --------->*/}

      <div className="w-full mt-2">
        <div className="flex flex-col justify-between  lg:flex-row">
          <Tender />
          <Notice />
        </div>
      </div>

      {/* <!---------- Information HTML Starts ---------> */}
      <div className="w-full mt-2">
        <div className="flex flex-col justify-between  lg:flex-row"></div>
      </div>
      {/*<!---------- Information HTML Ends --------->*/}

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
