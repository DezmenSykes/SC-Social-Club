import Image from "next/image";
import React from "react";

const Story = ({ profilePic }: { profilePic: string }) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      <Image
        src={profilePic}
        width={80}
        height={80}
        alt="Profile"
        className="w-20 h-20 rounded-full ring"
      />
      <span className="font-medium">David</span>
    </div>
  );
};

export default Story;
