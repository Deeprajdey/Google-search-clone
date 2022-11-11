import Head from "next/head";
import Header from "./../components/Header";
import React from "react";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import SearchResults from "../components/SearchResults";

const Search = ({ results, searchTerm }) => {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <meta name="description" content="Google search clone" />
        <link
          rel="icon"
          href="https://img.icons8.com/bubbles/200/null/google-logo.png"
        />
      </Head>
      {/* Header */}
      <Header term={searchTerm} />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
};

export default Search;
export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || 0;
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
      searchTerm: context.query.term,
    },
  };
}
