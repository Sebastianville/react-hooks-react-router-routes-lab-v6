import {Link} from 'react-router-dom';



function MovieCard({ movie }) {
  const {title, time, genres, id}= movie


//   const { id } = useParams(); //Going to pass down parameters that are sent being sent from the routes 
//   const navigate = useNavigate(); //allows to use a function. Save a variable and use it to a different page 
// console.log(id)
  return (
    <article>
        <h2>{title}</h2>
        <p>Time: {time} minutes</p>
        <p> {genres.join(',')}</p>
          <Link to={`/Movie/${id}`}> View info
          </Link>
          
    </article>
  );
};

export default MovieCard;