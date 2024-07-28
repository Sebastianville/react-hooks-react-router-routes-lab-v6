import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";


function Home() {
  const [homeMoviesData, setHomeMoviesData] = useState([]);
 

  useEffect (() => {
    fetch(`http://localhost:4000/movies`)
    .then((res) => res.json())
    .then((data) => setHomeMoviesData(data))

  }, []) 

  return (
    <>
      <header> 
        <NavBar />
      </header>
      <h1>Home Page </h1>
      <main>
      {
       homeMoviesData.map((movie) => <MovieCard key={movie.id} movie={movie}/> ) 
      }
      </main>
      
    </>
  );
};

export default Home;
