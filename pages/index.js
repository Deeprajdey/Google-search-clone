import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value;
    if (!searchTerm) return;
    router.push(`/search?term=${searchTerm}`);
  };
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google search clone" />
        <link
          rel="icon"
          href="https://img.icons8.com/bubbles/200/null/google-logo.png"
        />
      </Head>
      <header className="flex justify-between p-5 text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <Squares2X2Icon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 transition duration-500 cursor-pointer" />

          <Avatar url="./profile.jpg" />
        </div>
      </header>
      {/* Body */}
      <form className="flex-grow flex flex-col items-center mt-44 px-3">
        <Image src="/google_logo.png" width="300" height="200" alt="logo" />
        <div className="flex items-center w-full mt-5 hover:shadow-lg focus-width:shadow-lg max-w-md rounded-full border border-gray-200 p-2 hover:border-none sm:max-w-xl lg:max-w-2xl ">
          <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none "
          />
          <MicrophoneIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 transition duration-500 cursor-pointer" />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-2 w-1/2 space-y-2 lg:justify-center lg:space-y-0 mt-8 gap-8">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  );
}
