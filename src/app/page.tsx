import Counter from "@/app/components/Counter";
import React from "react";

const Home = () => {
  return (
    <div className="flex gap-6">
      <div className="hidden xl:block w-[20%]"></div>
      <div className="w-full lg:w-[70%] xl:w-[50%]"></div>
      <div className="hidden lg:block w-[30%]"></div>
    </div>
  );
};

export default Home;
