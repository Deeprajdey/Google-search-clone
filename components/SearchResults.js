import React from "react";
import Pagination from "./Pagination";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full p-6  sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-700 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} in results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={result.link} className="text-sm line-clamp-1">
              {result.formattedUrl}
            </a>
            <a href={result.link} className="text-sm">
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline ">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}
      <Pagination />
    </div>
  );
};

export default SearchResults;
