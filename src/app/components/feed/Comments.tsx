import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/29184391/pexels-photo-29184391/free-photo-of-artistic-dessert-presentation-with-spoon-and-chocolate-cup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-1 items-center justify-between w-full bg-slate-100 px-6 py-2 rounded-xl">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className=" ">
        {/* Comment */}
        <div className="flex  gap-4 justify-between mt-6">
          {/* Avatar */}
          <Image
            src="https://images.pexels.com/photos/29184391/pexels-photo-29184391/free-photo-of-artistic-dessert-presentation-with-spoon-and-chocolate-cup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* Desc. */}
          <div className="flex flex-1 flex-col gap-2 text-xs">
            <span className="font-medium">Dezmen</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, quia perferendis. Repellat ab dolores culpa odit
              deleniti temporibus necessitatibus. Nobis officiis temporibus
              distinctio, modi doloribus aliquid et porro qui sed!
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="w-4 h-4 cursor-pointer "
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">34,433 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
