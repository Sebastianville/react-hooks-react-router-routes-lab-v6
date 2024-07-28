import { useEffect, useState } from "react";

function Directors() {
 const [directors, SetDirectors] = useState ([]);
 

 useEffect(() => {
fetch('http://localhost:4000/directors')
  .then((res) => res.json())
  .then((data) => SetDirectors(data));
 }, []);

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((curDirector) => (
        <article key={curDirector.id}>
          <h2>{curDirector.name}</h2>
          <ul>
            {curDirector.movies.map((curMovies) => (
              <li key={curMovies}>{curMovies}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};
export default Directors;
