import { type } from "os";
import React from "react";

interface Props {
  memberImageLink: string;
  memberName: string;
  memberMobileNumber: string;
  membertype: string;
}
const MemberCard = ({
  memberImageLink,
  memberName,
  memberMobileNumber,
  membertype,
}: Props) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={memberImageLink}
        />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{memberName}</h2>
          <p className="text-gray-500">{membertype}</p>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">
            Mobile Number
          </h2>
          <p className="text-gray-500">{memberMobileNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
