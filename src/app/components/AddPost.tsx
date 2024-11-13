import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

const AddPost = async () => {
  const { userId } = await auth();

  return (
    <div className="p-4 bg-white shadow-md flex gap-4 justify-between text-sm">
      {/* Avatar */}
      <div className="">
        <Image
          src="https://images.pexels.com/photos/15295905/pexels-photo-15295905/free-photo-of-cars-and-buildings-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      {/* Post */}
      <div className="flex-1">
        {/* Input */}
        <form action="" className="flex gap-4">
          <textarea
            name="desc"
            rows={2}
            id=""
            placeholder="What's on your mind, Dezmen?"
            className="bg-slate-100 flex-1 p-2 rounded-lg"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
          <button>Post</button>
        </form>
        {/* Post Options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
