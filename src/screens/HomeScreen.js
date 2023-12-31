import React from "react";
import Banner from "../Banner";
import Nav from "../Nav";
import Row from "../Row";
import requests from "../Request";

function HomeScreen() {
  return (
    <div>
      {/* {nav} */}
      <Nav />
      {/* banner */}
      <Banner />
      {/* row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title=" Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title=" Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Row title=" Documentaries" fetchUrl={requests.fecthDocumentaries} />
    </div>
  );
}

export default HomeScreen;
