import TenderCard from "@components/Card/TenderCard";
const Tender = () => {
  return (
    <div className=" h-[350px] p-4 mb-2 mx-1 shadow-sm flex-1 bg-white">
      <div className="w-full border-2 border-[#cfcfcf] pb-[10px] m-0 mb-[15px] pt-[15px] pl-[15px] bg-[#00aed9] text-white">
        <h3 className="head-title  m-0 p-0 text-[16px] text-bold">
          Latest Tender
        </h3>
      </div>
      <TenderCard />
    </div>
  );
};

export default Tender;
