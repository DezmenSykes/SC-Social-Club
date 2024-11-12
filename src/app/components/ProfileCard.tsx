import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        {/* Background */}
        <Image
          src="https://images.pexels.com/photos/20219264/pexels-photo-20219264/free-photo-of-lake-in-winter-scenery.jpeg"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        {/* Profile */}
        <Image
          src="https://images.pexels.com/photos/8230822/pexels-photo-8230822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Dezmen Sykes</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/8230822/pexels-photo-8230822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/8230822/pexels-photo-8230822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/8230822/pexels-photo-8230822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover"
            />
          </div>
          <span className="text-xs text-gray-500">500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
