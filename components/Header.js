import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = ({ term }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(term);
  const search = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    router.push(`/search?term=${searchTerm}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex flex-col sm:flex-row  p-6 w-full items-center">
        <Image
          src="/google_logo.png"
          height="0"
          width="120"
          alt="logo"
          priority
          className="h-auto w-[120px] mb-5 sm:mb-0"
          onClick={() => {
            router.push("/");
          }}
        />
        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg sm:max-w-3xl w-full items-center px-6 py-4  ml-10 mr-5">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow w-full focus:outline-none"
          />
          <XMarkIcon
            className="h-7 sm:mr-3 cursor-pointer text-gray-500 transition hover:scale-125"
            onClick={() => setSearchTerm("")}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 pl-4" />
          <MagnifyingGlassIcon className="h-6 mr-3 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          url="./profile.jpg"
          className="hidden sm:inline-flex sm:ml-auto"
        />
      </div>
      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
};

export default Header;
