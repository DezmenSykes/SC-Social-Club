import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="https://images.pexels.com/photos/12206301/pexels-photo-12206301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://images.pexels.com/photos/14552146/pexels-photo-14552146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10 object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Dezmen Sykes</h1>
            <div className="flex items-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">923</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">6.5K</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.8K</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="dsykes" />
      </div>
    </div>
  );
};

export default ProfilePage;
