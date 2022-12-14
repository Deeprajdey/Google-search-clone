import { GlobeAltIcon } from "@heroicons/react/24/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-gray-500">
      <div className="flex items-center justify-center p-4">
        <p>India</p>
      </div>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense">
        <div className=" flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeAltIcon className="h-5 w-5 text-green-700" /> Carbon neutral
          since 2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
      {/* <GlobeAltIcon /> */}
    </footer>
  );
};

export default Footer;
