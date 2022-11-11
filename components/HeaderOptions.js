import React from "react";
import HeaderOption from "./HeaderOption";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  PlayCircleIcon,
  NewspaperIcon,
  PhotoIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
const HeaderOptions = () => {
  return (
    <div className="flex text-gray-700 justify-evenly w-full text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 mt-6 border-b-2">
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={MagnifyingGlassIcon} title="All" selected />
        <HeaderOption Icon={PhotoIcon} title="Images" />
        <HeaderOption Icon={PlayCircleIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={EllipsisVerticalIcon} title="More" />
      </div>
      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
