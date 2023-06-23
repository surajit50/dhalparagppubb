import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full flex-center items-center h-[100vh]">
      <Image
        src="../assets/icons/loader.svg"
        width={100}
        height={100}
        alt="loader"
        className="object-contain"
      />
    </div>
  );
};

export default Loading;
