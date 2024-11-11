import Image from "next/image";
import React from "react";
import Story from "./Story";

const Stories = () => {
  const getRandomPic = () => {
    return pics[Math.floor(Math.random() * pics.length)];
  };
  const pics = [
    "https://images.pexels.com/photos/29139391/pexels-photo-29139391/free-photo-of-dome-of-palacio-de-bellas-artes-in-mexico-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/29127727/pexels-photo-29127727/free-photo-of-adorable-shih-tzu-puppy-playing-with-toy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/29187003/pexels-photo-29187003/free-photo-of-couple-strolling-through-a-vibrant-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/17525263/pexels-photo-17525263/free-photo-of-peach-juice-in-glasses.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/29234074/pexels-photo-29234074/free-photo-of-abstract-architectural-curves-against-blue-sky.jpeg",
    "https://images.pexels.com/photos/28271474/pexels-photo-28271474/free-photo-of-a-tall-clock-tower-with-palm-trees-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/29181016/pexels-photo-29181016/free-photo-of-american-bully-portrait-in-autumn-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/29278100/pexels-photo-29278100/free-photo-of-scenic-harbor-scene-with-historic-ship.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/13798997/pexels-photo-13798997.jpeg",
    "https://images.pexels.com/photos/15295905/pexels-photo-15295905/free-photo-of-cars-and-buildings-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {pics.map((pic, index) => (
          <Story key={index} profilePic={getRandomPic()} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
