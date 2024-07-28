import {Link} from 'react-router-dom'

function NotFoundPage (){
    return (
        <div>
            404 not found
            <Link to="/"> Home from link </Link>
        </div>
    );
}
export default NotFoundPage;