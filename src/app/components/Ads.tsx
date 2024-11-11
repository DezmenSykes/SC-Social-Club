import Image from "next/image";
import Link from "next/link";
import React from "react";

const Ads = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Top */}
      <div className="flex justify-between text-gray-500 items-center font-medium">
        <span className="text-gray-500">Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* Content */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/24827415/pexels-photo-24827415/free-photo-of-man-hand-holding-vintage-map-of-turkey.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/24827415/pexels-photo-24827415/free-photo-of-man-hand-holding-vintage-map-of-turkey.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={24}
            height={24}
            className="object-cover w-6 h-6 rounded-full"
          />
          <span className="font-medium text-blue-500">Travelocity</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? " Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sitin eos adipisci minima"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit in eos adipisci minima aliquam fugit doloremque, enim molestiae repellat excepturi? Tempora sit in eos adipisci minima aliquam fugit doloremque, enim molestiae repellat excepturi?"}
        </p>
        <button className="bg-gray-200 text0gray-500 text-xs p-2 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Ads;
