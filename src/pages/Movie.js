import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const {id} = useParams();
const [movieData, setMovieData] = useState({genres:[]});


  useEffect (() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then((res) => res.json())
    .then((data) => setMovieData(data) )
  }, []) 
 
  return (
    <div>
       <header>
        <NavBar />
      </header>
      <h1>
        {movieData.title}
      </h1>
      <p>
        {movieData.time}
      </p>
      <div>
          {movieData.genres.map((curGenere) => ( 
            <span key={curGenere}>{curGenere}</span>
          ))}
      </div>
    </div>
  );
};

export default Movie;
